<template>
  <div>
    <input type="text" v-model="date" placeholder="date" />
    <input type="number" v-model.number="value" placeholder="value" name="value"/>
    <!-- <select v-model="category" v-if="options">
      <option v-for="option in options" :value="option" :key="option">
        {{ option }}
      </option>
    </select> -->
    <!-- <input type="text" v-model="category" placeholder="category" /> -->
    <button @click="onSave" name="btnClick">Save</button>
  </div>
</template>

<script>
import {mapActions, mapMutations} from 'vuex'
export default {
  name: "AddPaymentForm",
  data() {
    return {
      value: "",
      category: "",
      date: "",
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
    // options(){
    //   return this.$store.getters.getCategories
    // }
  },
  methods: {
    ...mapMutations([
      'addDataToPaymentList'
    ]),
    ...mapActions([
      'fetchCategoryList'
    ]),
      onSave() {
          const { value, category } = this
          const data = {
              date: this.date || this.getCurrentDate,
              value,
              category
          }

          this.addDataToPaymentList(data)
      }
  },
  async created(){
    await this.fetchCategoryList()
    if(this.$route.name === 'AddPaymentFromUrl') {
      this.value = Number(this.$route.query?.value)|| 0,
      this.category = this.$route?.params?.category || ''
      //this.$router.push('/dashboard')
    }
  },
};
</script>
