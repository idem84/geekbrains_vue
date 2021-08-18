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
    
        
    <button @click="showAddCategoryForm">Add category</button>
    <button @click="showPaymentFormFn">Add payment</button>
  
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
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
    ...mapActions({
      fetchListData: "fetchData"
    }),
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
    fetchData() {
      return [
        {
          date: "28.03.2020",
          category: "Food",
          value: 169
        },
        {
          date: "24.03.2020",
          category: "Transport",
          value: 360
        },
        {
          date: "24.03.2020",
          category: "Food",
          value: 532
        }
      ];
    }
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
    await this.fetchListData();
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
</style>