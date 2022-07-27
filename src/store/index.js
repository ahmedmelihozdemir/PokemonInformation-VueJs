import { createStore } from 'vuex'

export default createStore({
  state: {
    pokemons: [],
    infoPokemon: [],
    index: 25,


  },
  getters: {
    getPokemons: state => state.pokemons,
    getInfoPokemon: state => state.infoPokemon,
    getIndex: state => state.index,


  },
  mutations: {
    setPokemons(state, payload) {
      state.pokemons = payload
    },
    setInfoPokemon(state, payload) {
      state.infoPokemon = payload
    },
    setIndex(state, payload) { state.index = payload },



  },
  actions: {
    fetchPokemons(context) {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        .then(response => response.json())
        .then((data) => {
          console.log(data)
          context.commit("setPokemons", data.results)
        })
    },
    fetchPokemonInformation(context) {
      /* fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.index}/`) */
      fetch("https://pokeapi.co/api/v2/pokemon/" + context.getters.getIndex + "/")
        .then(response => response.json())
        .then((data) => {
          console.log(data) 
          context.commit("setInfoPokemon", data)

        })
    }
  },
})

