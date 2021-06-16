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


export default {
  name: "App",
  components: {
    CardsPokemon,
    Sidenav,
    Prospector,
    
  },

};
</script>
<style >
#app {
  background: rgb(218, 223, 159);
}

@media only screen and (max-width: 600px) {
#app {
  width: 100%;
  background: rgba(18, 20, 126, 0.678);
  height: 100%;
  padding-top: 20px;
}


}
</style>