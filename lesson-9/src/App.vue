<template>
  <v-app>
    <v-app-bar app flat color="teal" dark>
      <v-btn to="/dashboard" plain :ripple="false">
        Dashboard
      </v-btn>
      <v-btn to="/about" plain :ripple="false">
        About
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "App",
  data: () => ({
    //
  }),
  methods: {
    ...mapActions({
      fetchListData: "fetchData",
      fetchCategoriesData: "fetchCategoryList"
    }),
    goToPage(pageName){
      this.$router.push({
        name: pageName
      })
    },
  },
  async created() {
    await this.fetchListData();
    await this.fetchCategoriesData();
  },
};
</script>
