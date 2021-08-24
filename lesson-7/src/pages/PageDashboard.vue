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
    
    <br>
    <button @click="showAddCategoryForm">Add category</button>&nbsp;
    <button @click="showPaymentFormFn">Add payment</button>&nbsp;
    <button @click="addItem('/add/payment/Food?value=500')">Add Item</button>
  
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import Pagination from '../components/Pagination.vue';
import PaymentsDisplay from "../components/PaymentsDisplay.vue";

export default {
  name: "Dashboard",
  components: {
    PaymentsDisplay,
    Pagination,
  },
  data(){
    return {
      category: '',
      page: '',
      curPage: 1,
      n: 10,
      showPaymentForm: false,
      modalSettings: ""
    }
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
    addCategory(){
        this.$store.commit('addCategoryToList', this.category)
    },
    showPaymentFormFn(){
      this.$modal.show('AddPaymentForm', {header: "Add payment Form"})
    },
    showAddCategoryForm(){
      this.$modal.show('addCategory', {header: "Add new category Form"})
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
    if (this.$route.params.page) {
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