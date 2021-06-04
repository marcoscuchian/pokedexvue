<template>
  <v-app id="app" >
  <div class="prueba">
  </div>
    <Sidenav/>
   <!-- Comment 

   
   <Prospector/>
   
   --> 
    <CardsPokemon />
      <v-main>
      <router-view />
    <h1> ....................ESTO ES V-MAIN EN APP.VUE TENGO QUE COMPONETIZAR</h1>
    </v-main>
  </v-app>
</template>

<script>
import CardsPokemon from "./components/CardsPokemon";
import Sidenav from "./components/Sidenav";
import Prospector from "./components/Prospector";
import Toolbar from "./components/Toolbar";
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
    Toolbar
  },

  data: () => ({


    //
  }),

  mounted() {
  },
  methods: {
    // getAll(id) {
    //   this.dialog = true;
    //   console.log("llegandin a get all",id, this.arrayPoke[id]);
    //   this.pokeSelec = this.arrayPoke[id]
    //   console.log(this.pokeSelec);

    // },
    //  ver si directamente lo busco del objeto ya creado., para que pedirle a la api de nuevo
    // //  cuando tenga el sort bien hecho esta funcion remplaza a la de abajo


  },



};
</script>
<style scoped>
#app {
  background: rgb(218, 223, 159);
}
.v-input__slot {
  background: black;
}



</style>