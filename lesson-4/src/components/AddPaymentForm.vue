<template>
  <div>
    <button class="btn btn-info" type="button" @click='isVisible = !isVisible'>Add new cost</button>
    <div class="add-cost-form" v-show="isVisible">
      <input type="text" v-model="date" placeholder="date" />
      <select v-model="category" v-if="options">
        <option v-for="option in options" :value="option" :key="option">
          {{ option }}
        </option>
      </select>
      <input type="text" v-model="value" placeholder="value" />
      <button @click="onSave">Save</button>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "AddPaymentForm",
  data() {
    return {
      id: 0,
      value: "",
      category: "",
      date: "",
      isVisible: false,
    };
  },
  computed: {
      getCurrentDate () {
      const today = new Date();
      const d = today.getDate()
      const m = today.getMonth() + 1
      const y = today.getFullYear()
      return `${d}.${m}.${y}`
    },
    options(){
      return this.$store.getters.getCategories
    }
  },
  methods: {
    ...mapActions([
      'fetchCategoryList'
    ]),
      onSave() {
          const { value, category } = this
          const lastItemId = this.$store.getters.getPaymentsList.length;
          const data = {
              date: this.date || this.getCurrentDate,
              value,
              category,
              id: lastItemId + 1
          }

          console.log('emit: addNewPayment',data)

          this.$emit('addNewPayment', data)
      }
  },
  created(){
    this.fetchCategoryList()
  }
};
</script>
<style lang="scss" scoped>
  .add-cost-form {
    margin-top: 10px;
    display: grid;
    grid-template-columns: 1fr;
    width: 400px;
    &>input {
      max-width: 200px; 
      margin-bottom: 5px;
    }
    &>select {
      max-width: 208px; 
      margin-bottom: 5px;
    }
    &>button{
      max-width: 208px; 
    }
  }
</style>
