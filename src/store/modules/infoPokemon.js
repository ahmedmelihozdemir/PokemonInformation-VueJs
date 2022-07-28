const state = {
  infoPokemon: [],
  index: 25,
}

const getters = {
  getInfoPokemon: state => state.infoPokemon,
  getIndex: state => state.index,
}

const mutations = {
  setInfoPokemon(state, payload) {
    state.infoPokemon = payload
  },
  setIndex(state, payload) { state.index = payload },
}

const actions = {
  fetchPokemonInformation(context) {
    fetch("https://pokeapi.co/api/v2/pokemon/" + context.getters.getIndex + "/")
      .then(response => response.json())
      .then((data) => {
        /* console.log(data) */
        context.commit("setInfoPokemon", data)

      })
  }

}

export default {
  state,
  getters,
  mutations,
  actions,
}