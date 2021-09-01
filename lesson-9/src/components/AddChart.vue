<script>
import { Doughnut } from "vue-chartjs";

export default {
  extends: Doughnut,
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    categories: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    this.renderMyChart();
  },
  methods: {
    fillItems() {
      const data = []
      const backgroundColor = []
      const result = []

      for (let i = 0; i < this.categories.length; i++) {
        const categoryName = this.categories[i];
        switch (categoryName) {
          case "Sport": {
            backgroundColor.push("yellow");
            const count = this.list.filter(function(obj) {
              return obj.category === categoryName;
            }).length;
            data.push(count);
            break;
          }
          case "Food": {
            backgroundColor.push("green");
            const count = this.list.filter(function(obj) {
              return obj.category === categoryName;
            }).length;
            data.push(count);
            break;
          }
          case "Education": {
            backgroundColor.push("pink");
            const count = this.list.filter(function(obj) {
              return obj.category === categoryName;
            }).length;
            data.push(count);
            break;
          }
          case "Internet": {
            backgroundColor.push("grey");
            const count = this.list.filter(function(obj) {
              return obj.category === categoryName;
            }).length;
            data.push(count);
            break;
          }
          case "Other": {
            backgroundColor.push("black");
            const count = this.list.filter(function(obj) {
              return obj.category === categoryName;
            }).length;
            data.push(count);
            break;
          }
          default: {
            //'#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
            backgroundColor.push("red");
            const count = this.list.filter(function(obj) {
              return obj.category === categoryName;
            }).length;
            data.push(count);
            break;
          }
        }
      }

      result.push({
        label: "test",
        backgroundColor: backgroundColor,
        data: data,
      });

      return result
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },
    renderMyChart: function() {
      this.renderChart(
        {
          labels: this.categories,
          datasets: this.fillItems(),
        },
        {
          responsive: true,
          legend: {
            position: "right",
            align: "middle",
          },
          title: {
            display: true,
            text: "Costs by categories",
          },
        }
      );
    },
  },
  watch: {
    categories: function() {
      this.$data._chart.update()
    },
    list: function() {
      this.renderMyChart();
      this.$data._chart.update()
    },
  },
};
</script>
