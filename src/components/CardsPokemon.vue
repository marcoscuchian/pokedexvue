<template>
  <div>
    <div v-if="intro" class="introActive d-flex justify-center ">

       <div>
          <img src="../assets/img/135733b07291badc8cb3c083d4fd90b0.gif" alt  class="imgIntro"/>
     </div>

  
    </div>
    <v-container grid-list-md pl-14>
      <h1>{{introSt}}</h1>
      <v-row row wrap>
        <v-col md="3" v-for="poke in arrayPokeSt" :key="poke.name">
          <v-card
            elevation="15"
            width="250px"
            height="250px"
            class="pokeCard rounded-xl pokeCard"
            @click="obtenerPokemon(poke.id); dialog = true"
          >
            <div class="d-flex justify-md-center">
              <v-img
                contain
                :src="poke.sprites.other.dream_world.front_default"
                width="200px"
                height="200px"
              ></v-img>
            </div>
            <v-card-actions>
              <v-btn block class="rounded-xl yellow">{{poke.name}}</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog v-model="dialog" class="rounded-xl red lighten-4">
      <v-card class="rounded-xl dialogPoke">
        <v-container>
          <v-row p-1>
            <v-col md="4" color="primary">
              <v-img class="imgPoke" contain :src="imgPokeSelect" height="400px" width="400px"></v-img>
            </v-col>
            <v-col md="8">
              <v-card-title class="justify-center" size="500">
                <h1 class="text-uppercase">{{pokeSelect.name}}</h1>
              </v-card-title>
              <v-divider></v-divider>

              <v-card-text>
                <h1>ID : {{pokeSelect.id}}</h1>
                <br />
                <h1>Altura : {{pokeSelect.height}}0 cm</h1>
                <br />

                <h1>Peso : {{pokeSelect.weight}}0 g</h1>
                <br />
                <h1>Base experiencia : {{pokeSelect.base_experience}}</h1>
              </v-card-text>
              <v-card-actions>
                <v-btn block class="rounded-xl buttAg" dark @click="dialog = false">Ver Menos</v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import { mapMutations } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "CardsPokemon",

  data: () => ({
    dialog: false,
    drawer: null,
    cantidad: 75,
    intro: true,
    items: [
      {
        title: "GitHub",
        icon: "mdi-github",
        href: "https://github.com/marcoscuchian"
      },
      {
        title: "Linkedin",
        icon: "mdi-linkedin",
        href: "https://www.linkedin.com/feed/"
      },
      {
        title: "Instagram",
        icon: "mdi-instagram",
        href: "https://www.instagram.com/marcoscuchian/"
      }
    ]
    //
  }),

  mounted() {
    this.getByPokeSt();
  },
  beforeUpdate() {
    this.intro = false;
  },

  methods: {
    ...mapActions(["getByPokeSt", "obtenerPokemon"])
  },

  computed: {
    ...mapState(["arrayPokeSt", "pokeSelect", "imgPokeSelect"])
  }
};
</script>





<style scoped>
.v-input__slot {
  background: black;
}
.pokeCard {
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
    0.3s box-shadow,
    0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
  cursor: pointer;
  background: rgb(66, 61, 61) !important;
}

.pokeCard:hover {
  transform: scale(1.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
  /* background-image: url('/assets/img/soleado.gif'); */
  cursor: zoom-in;

  background: rgba(24, 20, 20, 0.781) !important;
}

.dialogPoke {
  background: rgba(128, 128, 0, 0.644) !important;
  color: white !important ;
  border: 2px solid black;
}
.buttAg {
  border: 1px solid rgba(255, 255, 255, 0.39);
}

.imgPoke {
  border-bottom: 5px solid rgba(0, 0, 0, 0.315) !important ;
}

.introActive {
  background: rgba(121, 119, 0, 0.705) !important;
  height: 200vh;
  z-index: 100;
  top: 0;
  bottom: 0;
}

</style>