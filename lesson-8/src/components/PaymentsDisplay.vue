<template>
    <v-container>
        <v-row>
            <v-col cols='1'>#</v-col>
            <v-col cols='4'>Date</v-col>
            <v-col cols='5'>Category</v-col>
            <v-col cols='2'>Value</v-col>
        </v-row>
        <v-row v-for="item in list" :key="item.id">
            <v-col cols='1'>{{item.id}}</v-col>
            <v-col cols="4">{{item.date}}</v-col>
            <v-col cols="5">{{item.category}}</v-col>
            <v-col cols="2">{{item.value}}</v-col>
        </v-row>
  <!-- <div class="list">
      <div class="item" v-for="(item, idx) in list" :key="idx">
          {{ item }} - 
          <span @click="onContextMenuClick($event,item)">...</span>
      </div>
  </div> -->
    </v-container>
</template>

<script>
export default {
    name: 'PaymentsDisplay',
    props: {
        list: {
            type: Array,
            default: ()=> [],
        }
    },
    methods: {
        onContextMenuClick(event, item){
            const items = [
                { text: "Редактировать", action:()=>{ console.log('edit', item) }},
                { text: "Удалить", action:()=>{ console.log('delete', item.id) }}
            ]
            this.$context.show({event,items})
        }
    }
}
</script>
