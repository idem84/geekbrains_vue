<template>
  <div class="list">
      <div class="item" v-for="(item, idx) in list" :key="idx">
          {{item.id}} - {{ item }} - 
          <span @click="onContextMenuClick($event,item)">...</span>
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
    },
    methods: {
        onContextMenuClick(event, item){
            const items = [
                { text: "Редактировать", action:()=>{ console.log('edit', item) }},
                { text: "Удалить", action:()=>{ console.log('delete', item) }}
            ]
            this.$context.show({event,items})
        }
    }
}
</script>
