<template>
  <div>
    <button @click="deleteItem">delete</button>
    <button @click="editItem">edit</button>
  </div>
</template>

<script>
export default {
  name: "OptionsForm",
  props:[
    'index'
  ],
  methods: {
    deleteItem() {
      this.$store.commit("deleteDataFromPaymentList", this.index);
    },
    editItem() {
        this.$modal.show('EditForm', {header: "Edit form", index: this.index})
    }
  },
  // async created(){
  //   console.log(this.index);
  // }
};
</script>

<style></style>
