<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="list"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      hide-default-footer
      disable-filtering
      disable-sort
      class="elevation-1"
      @page-count="pageCount = $event"
    >
      <template v-slot:item="row">
        <tr>
          <td>{{ row.item.id }}</td>
          <td>{{ row.item.date }}</td>
          <td>{{ row.item.category }}</td>
          <td>{{ row.item.value }}</td>
          <td><options :categories="categories" :id="row.item.id" @close="Options = false" /></td>
        </tr> </template>
        
        </v-data-table>
    <div class="text-center pt-2">
      <v-pagination v-model="page" :length="pageCount"></v-pagination>
      <v-text-field
        :value="itemsPerPage"
        label="Items per page"
        type="number"
        min="-1"
        max="15"
        @input="itemsPerPage = parseInt($event, 10)"
      ></v-text-field>
    </div>
  </div>
</template>

<script>
import Options from "../components/Options.vue";
export default {
  name: "PaymentsDisplay",
  components: {
    Options,
  },
  data() {
    return {
      headers: [
        { text: "#", value: "id" },
        { text: "Date", value: "date" },
        { text: "Category", value: "category" },
        { text: "Value", value: "value" },
        { text: "Options", value: "button" },
      ],
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
    };
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    categories: {
      type: Array,
      default: () => [],
    }
  },
  created() {
    this.pageCount = this.list.length / this.itemsPerPage;
  },
};
</script>

<style lans="scss">
.list-item {
  border-bottom: 1px solid lightgrey;
}
.v-pagination button,
.v-application .primary {
  background: transparent !important;
  box-shadow: none !important;
  border-radius: 0 !important;
  border: 0 !important;
}
.v-application .primary {
  color: #1976d2 !important;
}
</style>
