<template>
  <div>
    <button class="btn btn-info" type="button" @click='isVisible = !isVisible'>Add new cost</button>
    <div class="add-cost-form" v-show="isVisible">
      <input type="text" v-model="date" placeholder="date" />
      <input type="text" v-model="category" placeholder="category" />
      <input type="text" v-model="value" placeholder="value" />
      <button @click="onSave">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddPaymentForm",
  data() {
    return {
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
    }
  },
  methods: {
      onSave() {
          const { value, category } = this
          const data = {
              date: this.date || this.getCurrentDate,
              value,
              category
          }

          this.$emit('addNewPayment', data)
      }
  },
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
    &>button{
      max-width: 208px; 
    }
  }
</style>