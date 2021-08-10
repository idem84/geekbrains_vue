<template>
  <div>
    <ul class="pagination-wrapper">
      <li @click="onClick(cur - 1)">pref</li>
      <li class="page" :class="{'active': cur === page}" v-for="page in amount" :key="page" @click="onClick(page)">
      {{ page }}
      </li>
      <li @click="onClick(cur + 1)">next</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    length: Number,
    n: {
      type: Number,
      default: 5,
    },
    cur: Number,
  },
  computed: {
    amount() {
      return Math.ceil(this.length / this.n);
    },
  },
  methods: {
    onClick(p) {
      if (p < 1 || p > this.amount) {
        return;
      }

      this.$emit("changePage", p);
    },
  },
};
</script>
<style lang="scss" scoped>
.pagination-wrapper {
  display: flex;
  & > li {
    padding: 10px;
    list-style-type: none;
    &.active {
      color: #ccc;
    }
  }
  & > li:hover {
    cursor: pointer;
  }
}
</style>
