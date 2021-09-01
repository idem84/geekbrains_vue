<template>
  <v-card class="text-left pa-8">
    <v-text-field disabled v-model="id" v-if="id > 0" label="id" />
    <v-text-field v-model="date" label="date" />
    <v-text-field v-model.number="value" label="value" />
    <v-select v-model="category" label="category" :items="categories" />
    <v-btn @click="onSave" name="btnClick">Save</v-btn>
  </v-card>
</template>

<script>
export default {
  name: "AddPaymentForm",
  props: {
    idProp: {
      type: Number,
      default: 0
    },
    valueProp: {
      type: Number,
      default: 0
    },
    categoryProp: {
      type: String,
      default: ""
    },
    dateProp: {
      type: String,
      default: ""
    },
    categories: {
      type: Array,
      default: () => [],
    }
  },
  data: function () {
    return {
        id: this.idProp,
        value: this.valueProp,
        category: this.categoryProp,
        date: this.dateProp,
    }
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
  },
  methods: {
    onSave() {
      const { value, category } = this;
      const lastItemId = this.$store.getters.getPaymentsList.length;
      const data = {
        date: this.date || this.getCurrentDate,
        value,
        category,
        id: (this.id > 0) ? this.id : lastItemId + 1,
      };

      if (this.id > 0) {
        // edit
        this.$store.commit("editDataInPaymentList", data);
      } else {
        //add new
        if (data.value !== 0 && data.category !== "") {
          this.$store.commit("addDataToPaymentList", data);

          if (this.$router.currentRoute.path.includes("/add/payment/")) {
            this.$router.push("/dashboard");
          }
        }
      }

      this.$emit("close");
    },
  },
  async created() {
    if (this.$route.name === "AddPaymentFromUrl") {
      (this.value = Number(this.$route.query?.value) || 0),
        (this.category = this.$route?.params?.category || ""),
        (this.isVisible = true);
    }
  },
};
</script>
