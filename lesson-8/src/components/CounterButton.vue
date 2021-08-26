<template>
  <button @click="onClick">Clicked {{ counter }} times!</button>
</template>

<script>
export default {
  name: "CounterButton",
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    onClick() {
      this.counter++;
    },
    mouseOver() {
      console.log("Hovered");
    
    }
  },

  // хук создания
  beforeCreate() {
    console.log("beforeCreate");
  },

  created() {
    console.log("created");
    this.onClick();
  },

  // хук монтирования
  beforeMount() {
    console.log("beforeMount");
    console.log(this.$el);
  },
  mounted() {
    const btn = this.$el;
    if (btn) {
      btn.addEventListener("mouseover", this.mouseOver);
    }
  },

  //update dom
  beforeUpdate() {
    console.log("beforeUpdate");
  },

  updated() {
    console.log("updated");
  },

  //destroy
  beforeDestroy() {
    console.log("beforeDestroy");
    if(this.$el){
        this.$el.removeEventListener('mouseover', this.mouseOver)
        console.log('complete')
    }
  },
  destroyed() {
    console.log("destroyed");
  }
};
</script>
