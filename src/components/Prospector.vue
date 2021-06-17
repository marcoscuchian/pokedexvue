<template>
  <v-container grid-list-xs pt-10 class id="prospector">
    <v-row class="d-flex justify-center" >
      <v-col md="3" cols="7" sm="7" class="prospector mb-0">
        <v-text-field
          class="rounded-xl"
          label="Busca tu pokemon "
          solo
          append-icon="mdi-pokeball"
          v-model="valueSearch"
        ></v-text-field>
      </v-col>
      <v-col md="2" cols="6" sm="6" class="btnProspectorSearch d-flex justify-end">
        <v-btn title="Buscar Pókemon" elevation="10" @click="getByPokeSt(valueSearch)" class="rounded-xl yellow">buscar</v-btn>
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

    <div class="my-2  float-right seccionSearch " >
      <v-btn fixed color="error" fab large dark href="#prospector" class="seccionSearch " title="Ir al Buscador">
        <v-icon>mdi-pokeball</v-icon>
      </v-btn>
    </div>
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
    valueSearch: null
    //
  }),
  methods: {
    ...mapActions(["getByPokeSt"])
  },

  watch:{
    valueSearch: function(val){
      if(val == ""){
        this.getByPokeSt('')
      }
    }

  }
};
</script>
<style scoped>

.seccionSearch{

	bottom: 30px;
	right: 30px;
}


@media only screen and (max-width: 600px) {
  .prospector {
    position: relative;
    left: 30px;
    padding: 0px;
  }
  .btnProspectorSearch {
    padding: 0px !important;
    padding-left: 10px !important;
    position: relative;
  }
}
</style>