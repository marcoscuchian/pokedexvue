<template>
  <v-app id="app">
    <Sidenav />
    <Prospector />
    <CardsPokemon />
  </v-app>
</template>

<script>
import CardsPokemon from "./components/CardsPokemon";
import Sidenav from "./components/Sidenav";
import Prospector from "./components/Prospector";
import axios from "axios";
import { mapState } from "vuex";
import { mapMutations } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    CardsPokemon,
    Sidenav,
    Prospector,
    
  },

  data: () => ({
    //
  }),

  mounted() {},
  methods: {}
};
</script>
<style >
#app {
  background: rgb(218, 223, 159);
}

@media only screen and (max-width: 600px) {
#app {
  width: 100%;
}

}
</style>