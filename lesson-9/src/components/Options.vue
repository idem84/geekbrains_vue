<template>
  <div class="text-left">
    <v-menu bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          :ripple="false"
          link
          plain
          tile
          text
          depressed
          v-bind="attrs"
          v-on="on"
        >
          <v-icon dark>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-btn
            :ripple="false"
            link
            plain
            tile
            text
            depressed
            @click="editItem(item.type)"
          >
            {{ item.title }}
          </v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-dialog v-model="edit" width="500">
      <v-card>
        <add-payment-form
          :idProp="item.id"
          :valueProp="item.value"
          :categoryProp="item.category"
          :dateProp="item.date"
          @close="edit = false"
        />
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import AddPaymentForm from "../components/AddPaymentForm.vue";
export default {
  name: "Options",
  components: {
    AddPaymentForm,
  },
  props: {
    id: Number,
  },
  data: () => ({
    items: [
      { title: "Edit", type: "edit" },
      { title: "Delete", type: "delete" },
    ],
    closeOnClick: true,
    edit: false,
    item: {
      id: 0,
      value: 0,
      category: "",
      date: "",
    },
  }),
  methods: {
    editItem(type) {
      switch (type) {
        case "edit": {
          const item = this.$store.getters.getPaymentsItem(this.id)[0];
          this.item.id = item.id;
          this.item.value = item.value;
          this.item.category = item.category;
          this.item.date = item.date;

          this.edit = true;
          break;
        }
        case "delete": {
          this.$store.commit("deleteDataFromPaymentList", this.id);
          break;
        }
      }
    },
    // deleteItem() {
    //   this.$store.commit("deleteDataFromPaymentList", this.index);
    // },
    // editItem() {
    //   //this.$modal.show('EditForm', {header: "Edit form", index: this.index})
    // }
  },
};
</script>

<style lang="scss" scoped>
.option-link:focus,
.option-link:active {
  background: transparent !important;
  border: 0;
  box-shadow: none;
}
</style>
