<template>
  <div class="wrapper">
    <div class="header">{{ modalSettings.header }}</div>
    <div class="content">
        <component :is="modalSettings.name" :index="modalSettings.index" />
    </div>
    <div class="footer">
      <button @click="onClose">Close</button>
    </div>
  </div>
</template>

<script>
import AddCategory from './AddCategory.vue';
import OptionsForm from './OptionsForm.vue';
import Auth from './Auth.vue';
export default {
  name: "ModalWindow",
  components: { 
   AddPaymentForm: ()=>import(/* webpackChunkName: 'AddPaymentForm' */'./AddPaymentForm.vue'),
   Auth, 
   AddCategory,
   OptionsForm,
   EditForm: ()=>import(/* webpackChunkName: 'EditFormForm' */'./EditForm.vue'),
   },
  props: {
      modalSettings: Object
  },
  methods: {
      onClose(){
          this.$modal.hide()
      }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
    padding: 20px;
    position: absolute;
    top:20%;
    background: #efefef;
    box-shadow: 0px 1px 10px #000;
    &>.content{
      padding-top: 10px;
    }
    &>.footer{
      padding-top: 10px;
    }
}
</style>
