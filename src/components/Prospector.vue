<template>
  <v-container grid-list-xs pt-10 class>
    <v-row class="d-flex justify-center">
      <v-col md="3" cols="10" sm="7" class="prospector">
        <v-text-field
          class="rounded-xl"
          label="Busca tu pokemon "
          solo
          append-icon="mdi-pokeball"
          v-model="valueSearch"
        ></v-text-field>
      </v-col>
      <v-col md="2" cols="6" sm="6" class="btnProspectorSearch d-flex justify-end">
        <v-btn
          elevation="10"
          @click="getByPokeSt(valueSearch)"
          class="rounded-xl yellow"
        >buscar</v-btn>
      </v-col>
      <v-col md="1" cols="6" sm="6" class="btnProspectorSearch" v-if="valueSearch">
        <v-btn
          xs-small
          color="red"
          @click="valueSearch = ''; getByPokeSt(valueSearch)"
          elevation="5"
          class="btnDelete red lighten-3 rounded-xl"
        >Borrar</v-btn>
      </v-col>
    </v-row>
    <v-divider></v-divider>

    <div class="d-flex justify-center" v-if="mensajeErorr">
      <h4>No encontramos el POKEMON, intentá de nuevo</h4>
    </div>

    <div v-if="seeCard">
      <v-container grid-list-md pl-14 class="AllCards d-flex justify-center">
        <v-row row wrap class="d-flex justify-center">
          <v-col md="3" xs="12">
            <v-card
              contain
              elevation="15"
              width="250px"
              height="250px"
              class="pokeCard rounded-xl pokeCard"
              dialog="true"
              @click="obtenerPokemon(pokePrueba.name); dialog = true"
            >
              <div class="d-flex justify-md-center ImgCard">
                <v-img contain :src="imgPokePrueba" width="200px" height="200px"></v-img>
              </div>
              <v-card-actions>
                <v-btn block class="rounded-xl yellow buttonCard">{{pokePrueba.name}}</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-divider></v-divider>
    </div>
    <v-divider></v-divider>

    <v-dialog v-model="dialog" class="rounded-xl red lighten-4">
      <v-card class="rounded-xl dialogPoke">
        <v-container>
          <v-row p-1>
            <v-col md="4" class="d-flex justify-xs-center" color="primary">
              <v-img class="imgPoke" contain :src="imgPokeSelect" height="400px" width="400px"></v-img>
            </v-col>
            <v-col md="8">
              <v-card-title class="justify-center" size="500">
                <h2 class="text-uppercase">{{pokeSelect.name}}</h2>
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
  </v-container>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import { mapMutations } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "Prospector",
  data: () => ({
    valueSearch: null,
    dialog: false,
    seeCard: false,
    pokePrueba: null,
    mensajeErorr: false,
    SearchBad: null
    //
  }),
  methods: {
    ...mapActions(["obtenerPokemon","getByPokeSt"]),

    BuscarPokePrueba: async function(id) {
      id = id.toLowerCase();
      this.seeCard = false;
      this.mensajeErorr = false;

      this.pokePrueba = null;
      try {
        const data = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
        this.pokePrueba = await data.json();
        this.imgPokePrueba = this.pokePrueba.sprites.other.dream_world.front_default;
        this.seeCard = true;
      } catch (err) {
        this.mensajeErorr = true;
        this.SearchBad = id;
      }
    }
  },

  computed: {
    ...mapState(["pokeSearch", "imgPokeSearch", "pokeSelect", "imgPokeSelect"])


  }
};
</script>
<style scoped>
@media only screen and (max-width: 600px) {
  .prospector {
    position: relative;
    left: 30px;
  }
  .btnProspectorSearch {
    padding-left: 0px !important;
    position: relative;
    left: 50px;
  }
  .btnDelete {
  }
}
</style>