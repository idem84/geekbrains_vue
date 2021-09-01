import { Doughnut, mixins} from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Doughnut,
  mixins: [reactiveProp],
  data: function() {
    return {
      options: {
        responsive: true,
        legend: {
          position: "right",
          align: "middle",
        },
        title: {
          display: true,
          text: "Costs by categories",
        },
      },
    };
  },
  props: {
    chartData: {
      type: Object,
      default: null
    },
  },
  watch: {
    chartData() {
      console.log(1);
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}