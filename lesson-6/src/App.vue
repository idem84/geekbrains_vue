<template>
  <div id="app">
    <div class="page-links">
      <router-link to='/dashboard'>Dashboard</router-link> /
      <router-link to='/about'>About</router-link> / 
      <button @click="goToPage(404)">404</button> /
    </div>
    <div class="content">
    <router-view />
    </div>
    <transition name="fade">
      <modal-window-add-payment-form v-if="modalShown" :modalSettings="modalSettings"/>
    </transition>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: 'App',
  components: { 
    ModalWindowAddPaymentForm: ()=>import('./components/ModalWindowAddPaymentForm.vue')
  },
  data() {
    return {
      modalShown: false,
      modalSettings: {}
    }
  },
  methods: {
    ...mapActions({
      fetchListData: "fetchData",
      fetchCategoriesData: "fetchCategoryList"
    }),
    goToPage(pageName){
      this.$router.push({
        name: pageName
      })
    },
    onShow(settings){
      this.modalSettings = settings
      this.modalShown = true
    },
    onHide(){
      this.modalShown = false
      this.modalSettings = {}
    }
  },
  mounted(){
    this.$modal.EventBus.$on('show', this.onShow)
    this.$modal.EventBus.$on('hide', this.onHide)
  },
  beforeDestroy(){
    this.$modal.EventBus.$off('show', this.onShow)
    this.$modal.EventBus.$off('hide', this.onHide)
  },
  async created() {
    await this.fetchListData();
    await this.fetchCategoriesData();
  },
}
</script>


<style lang="scss" module>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
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

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>