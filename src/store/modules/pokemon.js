const state={
  pokemons: [],
}

const getters={
  getPokemons: state => state.pokemons,
}

const mutations={
  setPokemons(state, payload) {
    state.pokemons = payload
  },
}

const actions={
  fetchPokemons(context) {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then(response => response.json())
      .then((data) => {
        /* console.log(data) */
        context.commit("setPokemons", data.results)
      })
  },
}

export default{
  state,
  getters,
  mutations,
  actions,
}