<template>
  <div>
    <div v-if="intro" class="introActive d-flex justify-center">
      <div>
        <img
          contain
          src="../assets/img/135733b07291badc8cb3c083d4fd90b0.gif"
          width="500"
          class="imgIntro pt-8"
        />
      </div>
    </div>
    <v-container grid-list-md pl-14 class="AllCards">
      <v-row row wrap>
        <v-col md="3" xs="12" v-for="poke in arrayPokeSt" :key="poke.name">
          <v-card
            title="Ver Pókemon"
            contain
            elevation="15"
            width="250px"
            height="250px"
            class="pokeCard rounded-xl"
            @click="obtenerPokemon(poke.id); dialog = true"
          >
            <div class="d-flex justify-md-center ImgCard">
              <v-img contain :src="poke.img" width="200px" height="200px"></v-img>
            </div>
            <v-card-actions>
              <v-btn block class="rounded-xl yellow buttonCard">{{poke.name}}</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog v-model="dialog" class="rounded-xl d-flex justify-center">
      <v-card class="rounded-xl dialogPoke d-flex justify-center py-0">
        <v-container>
          <v-row p-1>
            <v-col md="4" class="d-flex justify-xs-center py-0" color="primary">
              <v-img class="imgPoke" contain :src="imgPokeSelect" height="350px" width="350px"></v-img>
            </v-col>

            <v-col md="8" class="pt-2">
              <v-card-title class="d-flex pa-0 pa-sm-4 justify-center grey darken-4 rounded-xl">
                <h1 class="text-uppercase">{{pokeSelect.name}}</h1>
              </v-card-title>
              <v-divider></v-divider>

              <v-row class="d-flex justify-center">
                <v-col cols="12" class="d-flex justify-center">
                  <h2>ID : {{pokeSelect.id}}</h2>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-simple-table dark class="transparent">
                    <template>
                      <tbody>
                        <tr>
                          <td>Altura</td>
                          <td>{{pokeSelect.height}}0 cm</td>
                        </tr>
                        <tr>
                          <td>Peso</td>
                          <td>{{pokeSelect.weight}}0 g</td>
                        </tr>
                        <tr>
                          <td>Base experiencia</td>
                          <td>{{pokeSelect.base_experience}}</td>
                        </tr>
                        <tr v-if="pokeSelect.evolucion">
                          <td>Evoluciona de:</td>
                          <td
                            v-if="pokeSelect.evolucion"
                          >{{ pokeSelect.evolucion.name.toUpperCase() }}</td>
                        </tr>
                        <tr>
                          <td>Es bebe:</td>
                          <td v-if="pokeSelect.is_baby">{{pokeSelect.is_baby.toUpperCase()}}</td>
                        </tr>
                        <tr>
                          <td>Es Legendario:</td>
                          <td
                            v-if="pokeSelect.is_legendary"
                          >{{pokeSelect.is_legendary.toUpperCase()}}</td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                  <v-row class="d-flex justify-center">
                    <v-col sm="6" cols="3" class="d-flex justify-center">
                      <v-card-actions class="pb-0 pt-3 pt-sm-2">
                        <v-btn  class="rounded-xl py-0" dark @click="dialog = false">Ver Menos</v-btn>
                      </v-card-actions>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
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
    intro: true
  }),

  mounted() {
    this.getByPokeSt("");
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





<style >
.imgIntro {
  position: fixed;
  left: 30%;
}
.v-dialog {
  box-shadow: none !important;
}
.pokeCard {
  background: rgb(66, 61, 61) !important;
}

.pokeCard:hover {
  transform: scale(1.1);
  cursor: zoom-in;
  background: rgba(24, 20, 20, 0.781) !important;
}

.dialogPoke {
  background: rgb(54 66 86) !important;
  color: white !important ;
  border: 2px solid black;
}
.verMenos {
  border: 1px solid rgba(255, 255, 255, 0.39);
}

.introActive {
  background: rgba(5, 5, 4, 0.705) !important;
  height: 200vh;
  z-index: 100;
  position: relative;
  top: -160px;
}

@media only screen and (max-width: 600px) {
  .imgIntro {
    position: relative;
    width: 300px;
    left: 50px;
    top: 200px;
  }
  .pokeCard {
    width: 140px !important;
    height: 140px !important;
  }

  .ImgCard {
    position: relative;
    width: 60% !important;
    height: 100px !important;
    bottom: 35px !important;
    left: 10px !important;
  }
  .buttonCard {
    position: relative;
    bottom: 7px !important;
  }
  .AllCards {
    margin-left: 20px !important;
  }

  .dialogPoke {
    background: rgb(58, 57, 66) !important;
    color: white !important ;
    border: 2px solid black;
    width: 300px !important;
    height: 650px !important;
    padding-bottom: 0;
    left: 40px !important;
  }
  .dialogPoke h1 {
    font-size: 25px;
  }

  .imgPoke {
    width: 150px !important;
    height: 150px !important;
  }
  .introActive {
    background: rgba(5, 5, 4, 0.705) !important;
    height: 200vh;
    z-index: 100;
    top: 0;
    position: relative;
    top: -200px;
  }
}
</style>