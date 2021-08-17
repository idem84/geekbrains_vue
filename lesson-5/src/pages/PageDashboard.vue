<template>
  <div :class="[$style.wrapper]">
    <header>
      <div :class="[$style.title]">My Personal Cost</div>
    </header>
    <div :class="[$style.content]">
      Total Value: {{ getFPV }}
      <payments-display :list="currentElements" />
      <pagination :cur="curPage" 
                  :n="n" 
                  :length="paymentsList.length" 
                  @paginate="onChangePage"/>
    </div>
    <div :class="[$style.addcategory]">
      <input v-model="category" placeholder="category">&nbsp;
      <button @click="addCategory">addCategory</button>
    </div>
    <div :class="[$style.content]">
      <add-payment-form @addNewPayment="addData" />
    </div>
    <br><br>
    <button @click="addItem('/add/payment/Food?value=500')">Add Item</button>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import AddPaymentForm from "../components/AddPaymentForm.vue";
import Pagination from '../components/Pagination.vue';
import PaymentsDisplay from "../components/PaymentsDisplay.vue";

export default {
  name: "Dashboard",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Pagination
  },
  data(){
    return {
      category: '',
      page: '',
      curPage: 1,
      n: 10,
    }
  },
  methods: {
    ...mapMutations({
      loadData: "setPaymentListData",
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
    addCategory(){
        this.$store.commit('addCategoryToList', this.category)
    },
  },
  computed: {
    ...mapGetters({
      paymentsList: "getPaymentsList"
    }),
    getFPV() {
      return this.$store.getters.getFullPaymentValue;
    },
    currentElements(){
      const { n, curPage } = this
      return this.paymentsList.slice(n * (curPage - 1), n* (curPage - 1)+n)
    },
  },
  async created() {
    // this.paymentsList = this.fetchData()
    //this.$store.commit('setPaymentListData', this.fetchData())
    //this.loadData(this.fetchData())
    // this.$store.dispatch('fetchData')
    //await this.fetchListData();
    if (this.$route.params?.page) {
        this.onChangePage(this.$route.params.page)
    }
  },
};
</script>
<style module lang="scss">
.wrapper {
  display: block;
  height: 100%
}
.title{
  font-size: 20px;
  color: red
}
.content {
  padding-top: 30px;
}
.addcategory {
  margin-top: 20px;
  display: flex;
  width: 100%;
}
</style>