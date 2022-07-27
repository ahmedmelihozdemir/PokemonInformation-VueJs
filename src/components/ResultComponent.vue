<template>
    <div class="container">
        <input
            class="input"
            type="text"
            placeholder="Enter Pokemon here."
            v-model="text"
            @keypress="pokemonLookFor"
        />
        <div class="row">

            <!-- <div class="col col-md-6 m-auto">
                <div
                    class="store"
                    v-for="(pokemon, index) in getPokemons"
                    :key="index"
                >
                    {{ pokemon.name }}
                </div>
            </div> -->

            <div class="col col-md-6 m-auto">
                <div
                    class="store m-auto mb-2"
                    v-for="(pokemon, index) in filteredList"
                    :key="index"
                    @click="pokemonSelected(pokemon, index + 1)"
                >
                    {{ index + 1 }}: {{ pokemon.name }}
                    <img :src="getInfoPokemon.sprites.back_shiny" alt="">
                </div>
            </div>  

            <!-- <ul class="list-group">
                <li class="list-group-item col col-md-3 m-auto" v-for="(pokemon,index ) in filteredList" :key="index" @click="pokemonSelected(pokemon,index+1)">
                    {{ index + 1 }}: {{ pokemon.name }}
                </li>
            </ul> --> 


            <div>
                {{ selectedPokemon }}
            </div>
        </div>
    </div>
</template>

<script>
import store from "@/store";
import { mapActions, mapGetters } from "vuex";
export default {
    data() {
        return {
            text: "",
            selectedPokemon: "",
            selectedPokemonIndex: null,
            pokemonInformationURL: "",
        };
    },
    methods: {
        ...mapActions(["fetchPokemons", "fetchPokemonInformation"]),
        pokemonSelected(e, idx) {
            console.log(e);
            this.selectedPokemon = e;
            /* this.$router.push("/information"); */
            /* this.$router.push(`/information/${e.name}`); */
            this.$router.push({
                name: "information",
                params: { pokemonName: e.name },
            });
            this.pokemonInformationURL = e.url; /*işe yaramıyor şimdilik */

            /* console.log(idx); */
            this.selectedPokemonIndex = idx;
            
        },
    },
    computed: {
        ...mapGetters(["getPokemons", "getInfoPokemon"]),
        filteredList() {
            return this.getPokemons.filter((pokemon) => {
                return pokemon.name
                    .toLowerCase()
                    .includes(this.text.toLowerCase());
            });
        },
    },
    watch:{
        selectedPokemonIndex(newIndex){
            store.commit('setIndex', newIndex)
            store.dispatch("fetchPokemonInformation")
        },
    },

    created() {
        this.fetchPokemons();
        this.fetchPokemonInformation();
    },
};
</script>

<style>
.input {
    border: solid 1px #42b983;
    border-radius: 5px;
    height: 50px;
    width: 300px;
    margin-bottom: 20px;
    padding-left: 10px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.store {
    margin-bottom: 10px;
    height: 60px;
    width: 300px;
    border: solid 1px #42b983;
    border-radius: 5px;
    padding: 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.store:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transition-duration: 0.4s;
    background-color: #42b983;
    color: white;
    cursor: pointer;
}
</style>
