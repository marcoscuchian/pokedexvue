import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)





export default new Vuex.Store({
  state: {
    drawer:false,
    arrayPokeSt:[],
    pokeSelect:[],
    imgPokeSelect: null,
  },
  mutations: {
    showDrawer(state){
      state.drawer = !state.drawer;
    },



    llenarPokes(state, pokeAccion){
      state.arrayPokeSt = pokeAccion
    },


    colocarNombre(state, pokeAction){
      state.pokeSelect = pokeAction;
      state.imgPokeSelect =  pokeAction.sprites.other.dream_world.front_default;
    },

  },
  actions: {

    obtenerPokemon: async function (context, id) {

      const data = await fetch('https://pokeapi.co/api/v2/pokemon/' + id);
      const pokemon = await data.json();
      context.commit('colocarNombre', pokemon);
      console.log("llegamos a la accion que selecciona el pokemon",pokemon.name)
  },






     getByPokeSt:  async function(context,state){
        const respondePOk = [];
        let n = 1 ;
          while (n < 30){    
          const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${n}`);
          const response = await data.json();
          respondePOk.push(response)
          n += 1;
        }
        const ak = respondePOk;
        context.commit('llenarPokes',respondePOk)
        
      },
    },




    //  getByPokeSt: async function({commit}) {
    //    const responsePOk = [];
    //    for (let n = 1; n < 4 ; n++) {
    //      console.log("llega a while en store",n)
    //      console.log(n)
    //      try {
    //        const response = await axios.get(
    //          `https://pokeapi.co/api/v2/pokemon/${n}`
    //          );
    //          responsePOk.push(response.data);
    //          console.log(responsePOk)
    //          return responsePOk;
    //         } catch (error) {
    //           const response = false;
    //           return response;
    //         }
            

    // }


    // commit('llenarPokes',responsePOk)
    // },
  modules: {
  }
})
