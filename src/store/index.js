import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)





export default new Vuex.Store({
  state: {
    drawer: false,
    arrayPokeSt: [],
    arrayAllPokeSt: [],
    pokeSelect: [],
    imgPokeSelect: null,
    pokeSearch: [],
    imgPokeSearch: null,
    messageSEarchPOke:"",

  },
  mutations: {
    showDrawer(state) {
      state.drawer = !state.drawer;
    },



    llenarPokes(state, pokeAccion) {
      state.arrayPokeSt = pokeAccion
    },



    llenarAllPokes(state, pokeAccion) {
      state.arrayAllPokeSt = pokeAccion
    },

    
    


    colocarNombre(state, pokeActionAll) {
      state.pokeSelect = pokeActionAll;
      state.imgPokeSelect = pokeActionAll.sprites.other.dream_world.front_default;
    },
    buscarPoke(state, pokeActionAll, message) {
      state.pokeSearch = pokeActionAll;
      state.imgPokeSearch = pokeActionAll.sprites.other.dream_world.front_default;
      state.messageSEarchPOke = message;
    },

  },
  actions: {


    obtenerPokemon: async function (context, id) {

      const data = await fetch('https://pokeapi.co/api/v2/pokemon/' + id);
      const pokemon = await data.json();
      context.commit('colocarNombre', pokemon);
    },

    buscarPokemon: async function (context, id) {


      const data = await fetch('https://pokeapi.co/api/v2/pokemon/' + id);
      if (!data.ok) {
        const message = `An error has occured: ${data.status}`;
        throw new Error(message);
      }    


      const pokemon = await data.json();
      context.commit('buscarPoke', pokemon);
    },

    getByPokeSt:  async function (context, search) {
      let urlEnd = search ? `/${search}` : '?limit=100';
      const imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"
      let response = [];
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon${urlEnd}`);
      const dataJson = await data.json();

      console.log(dataJson);
      if (Array.isArray(dataJson.results)){
        response = dataJson.results.map(element =>  {
          const id = element.url.split('pokemon/')[1].replace('/', '');
          return {
            ...element, 
            img: `${imgUrl}${id}.svg`,
            id,
          };
        });
      } else {
        response = [{
        ...dataJson,
        img: `${imgUrl}${dataJson.id}.svg`, 
        
        }]
      }
      context.commit('llenarPokes', response)

    },
  },






  modules: {
  }
})
