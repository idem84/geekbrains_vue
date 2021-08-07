<template>
  <div class="list">
      <div class="title">
          <div><b>#</b></div>
          <div><b>Date</b></div>
          <div><b>Category</b></div>
          <div><b>Value</b></div>
      </div>
      <div class="item" v-for="(item, idx) in list" :key="idx">
          <div>{{idx + 1}}</div>
          <div>{{ item.date }}</div>
          <div>{{ item.category }}</div>
          <div>{{ item.value }}</div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'PaymentsDisplay',
    props: {
        list: {
            type: Array,
            default: ()=> [],
        }
    }
}
</script>
<style lang="scss" scoped>
.list {
    display: grid;
    width: 400px;
    grid-template-columns: 1fr;
    &>.title{
        display: grid;
        grid-template-columns: 40px repeat(auto-fill, 110px);
        border-bottom:1px solid grey;
        &>div{
            padding: 5px;
        }
    }
    &>.item{
        display: grid;
        grid-template-columns: 40px repeat(auto-fill, 110px);
        border-bottom:1px solid grey;
        &>div{
            padding: 5px;
        }
    }
}

</style>