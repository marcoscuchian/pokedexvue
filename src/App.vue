<template>
  <v-app id="app">
    <v-toolbar color="white" app>
         <v-icon size="50px" color="error"  @click="drawer = !drawer">mdi-pokeball </v-icon>
         <v-container >
         <v-row class="d-flex justify-center ">
         <v-col md="3">
              <v-toolbar-title ><h1> P O K E D E X </h1></v-toolbar-title>
         </v-col>
         </v-row>
         </v-container>
      




    </v-toolbar>

    <v-navigation-drawer  dark v-model="drawer" absolute temporary width="300px">
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title> <h2> Marcos Cuchian </h2></v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }} </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title> <h2>{{ item.title }}</h2></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-container grid-list-md>
      <v-row class="justify-center " color="success">
        <v-col md="4">
          <v-text-field
          class="rounded-xl"
            label="Busca tu pokemon "
            solo
            append-icon="mdi-pokeball"
          > 
          
          </v-text-field>


          
        </v-col>
      </v-row>

      <v-row row wrap>
        <v-col md="3" v-for="poke in arrayPoke" :key="poke.name">
          <v-card elevation="15"  width="250px" height="250px" class="rounded-xl red lighten-4" @click="getAll(poke.id)">
          <div class="d-flex justify-md-center">
            <v-img   :src="poke.sprites.other.dream_world.front_default" width="200px" height="200px" >
    
            </v-img>
          </div>
            <v-card-actions>
    
        <v-btn
        
          block
          class="rounded-xl yellow"
        >{{poke.name}}</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>



    <v-dialog v-model="dialog" width="1000px">
      <v-card  class="rounded-xl red lighten-4 " height="600px" >
        <v-img  src="https://cdn.vuetifyjs.com/images/cards/cooking.png" height="300px"></v-img>
        <v-card-title><h1>{{pokeSelec.name.toUpperCase() }} </h1></v-card-title>
        <v-card-text>
          <h1></h1>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="dialog = false">cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  name: "App",

  data: () => ({
    arrayPoke: [],
    pokeSelec: "",
    dialog: false,
    drawer: null,
    cantidad: 75,
    items: [
      { title: "GitHub", icon: "mdi-github" },
      { title: "Linkedin", icon: "mdi-linkedin" },
      { title: "Instagram", icon: "mdi-instagram" },
      { title: "Facebook", icon: "mdi-facebook" },
    ]
    //
  }),

  mounted() {
    this.listaPokemones();
  },
  methods: {
    getAll(id) {
      this.dialog = true;
      console.log("llegandin a get all", id);
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => {
          this.pokeSelec = response.data;
          console.log(this.pokeSelec);
        })
        .catch(e => console.log(e));
    },

    async getByPoke(info) {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${info}`
        );
        return response.data;
      } catch (error) {
        const response = false;
        return response;
      }
    },

    listaPokemones() {
      var n = 1;

      while (n < 61) {
        this.getByPoke(n).then(res => {
          this.arrayPoke.push(res);
        });
        n += 1;
      }
    }
  }
};
</script>
<style scoped>
#app {
  background: rgb(238, 255, 0);
}
.v-input__slot{
  background: black;
}

</style>