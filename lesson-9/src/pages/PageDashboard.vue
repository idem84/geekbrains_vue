<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <div class="text-h5 text-sm-h3">My Personal cost</div>
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on }">
            <v-btn color="teal mt-4 mb-4" dark v-on="on">
              ADD NEW COST <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>
          <v-card>
            <add-payment-form :categories="categories" @close="dialog=false"/>
          </v-card>
        </v-dialog>

        <v-dialog v-model="catModal" width="500">
          <template v-slot:activator="{ on }">
            <v-btn color="teal ml-4 mt-4 mb-4" dark v-on="on">
              ADD CATEGORY <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>
          <v-card>
            <add-category @close="catModal=false"/>
          </v-card>
        </v-dialog>

        <payments-display :categories="categories" :list="paymentsList" />

        <!-- <pagination
          :cur="curPage"
          :n="n"
          :length="paymentsList.length"
          @paginate="onChangePage"
        /> -->

        <!-- <button @click="showAddCategoryForm">Add category</button>
        <button @click="showPaymentFormFn">Add payment</button> -->
      </v-col>
      <v-col cols="4" class="chart-block">
        <add-chart v-if="showChart" :categories="categories" :list="paymentsList" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import AddCategory from '../components/AddCategory.vue';
import AddPaymentForm from '../components/AddPaymentForm.vue';
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
import AddChart from "../components/AddChart.vue";

export default {
  name: "Dashboard",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    AddCategory,
    AddChart
  },
  data() {
    return {
      dialog: false,
      category: "",
      page: 1,
      curPage: 1,
      n: 10,
      showPaymentForm: false,
      catModal: false,
      showChart: false,
    };
  },
  methods: {
    ...mapMutations({
      addDataToStore: "addDataToPaymentList"
    }),
    addData(newPayment) {
      this.addDataToStore(newPayment);
    },
    addItem(link){
      this.$router.push(link);
    },
    onChangePage(p){
      this.curPage = p
    },
    addCategory() {
      this.$store.commit("addCategoryToList", this.category);
    },
    showPaymentFormFn() {
      this.$modal.show("AddPaymentForm", { header: "Add payment Form" });
    },
    showAddCategoryForm() {
      this.$modal.show("addCategory", { header: "Add new category Form" });
    },
  },
  computed: {
    ...mapGetters({
      paymentsList: "getPaymentsList",
      categories: "getCategories",
      count: "itemsCount",
    }),
    getFPV() {
      return this.$store.getters.getFullPaymentValue;
    },
    currentElements() {
      const { n, curPage } = this;
      return this.paymentsList.slice(n * (curPage - 1), n * (curPage - 1) + n);
    }
  },
  created() {
    if (this.$route.params?.page) {
        this.onChangePage(this.$route.params.page)
    }
    
    if (this.count > 0)
      this.showChart = true;
  },
  watch: {
    count () {
      this.showChart = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  display: block;
  height: 100%;
}
.title {
  font-size: 20px;
  color: red;
}
.content {
  padding-top: 30px;
}
.chart-block {
  margin-top: 110px;
}
</style>
