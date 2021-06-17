import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)





export default new Vuex.Store({
  state: {
    arrayPokeSt: [],
    pokeSelect: [],
    imgPokeSelect: null,

  },
  mutations: {
    llenarPokes(state, pokeAccion) {
      state.arrayPokeSt = pokeAccion
    },

    colocarPokemon(state, pokeActionAll) {
      state.pokeSelect = pokeActionAll;
      state.imgPokeSelect = pokeActionAll.sprites.other.dream_world.front_default;
    },


  },
  actions: {


    obtenerPokemon: async function (context, id) {

      const data = await fetch('https://pokeapi.co/api/v2/pokemon/' + id);
      const pokemon = await data.json();
      const dataMore = await fetch('https://pokeapi.co/api/v2/pokemon-species/' + id);
      const pokemonMore = await dataMore.json();

      const objectPOke = {
        ...pokemon,
        evolucion: pokemonMore.evolves_from_species,
        is_baby: (pokemonMore.is_baby)? "Si" : "No",
        is_legendary:  (pokemonMore.is_legendary)? "Si" : "No"
      };

      context.commit('colocarPokemon', objectPOke);
    },



    getByPokeSt: async function (context, search) {
      search = search.toLowerCase()
      let urlEnd = search ? `/${search}` : '?limit=100';
      const imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"
      let response = [];
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon${urlEnd}`);
      const dataJson = await data.json();
      
      if (Array.isArray(dataJson.results)) {
        response = dataJson.results.map(element => {
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
})
