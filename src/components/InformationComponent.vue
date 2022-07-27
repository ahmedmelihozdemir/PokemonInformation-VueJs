<template>
    <div class="information">
        <div class="container">
          <h3>Your's Pokemon: {{ $route.params.pokemonName }}</h3>
          <div class="row">
            <div class="features-card col col-md-6">
              Features: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque voluptatibus quibusdam corporis odit aspernatur. Magnam harum assumenda blanditiis optio obcaecati!
            </div>
            <div class="features-card col col-md-6">
              Features2: Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugiat pariatur dicta deserunt maiores nostrum quod error doloribus porro ad.
          </div>
            <div class="info-card col col-md-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, omnis.</div>
            <div class="info-card col col-md-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, omnis.</div>
            <div class="info-card col col-md-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, omnis.</div>
          </div>
          <div>
            <div class="pic">
              <img class="col col-md-6" :src="getInfoPokemon.sprites.front_shiny" alt="">
              <img class="col col-md-6" :src="getInfoPokemon.sprites.back_shiny" alt="">
            </div>
            <div class="inf-name info-move" v-for="infoPoke in getInfoPokemon" :key="infoPoke">{{ infoPoke.name}} </div>
            <div class="inf-type info-move" v-for="infoPoke in getInfoPokemon.types" :key="infoPoke">Poke Type: {{ infoPoke.type.name}} </div>
            <div class="inf-ability info-move" v-for="infoPoke in getInfoPokemon.abilities" :key="infoPoke">Ability: {{ infoPoke.ability.name}} </div>
            <div class="inf-moves info-move" v-for="infoPoke in getInfoPokemon.moves" :key="infoPoke">Moves: {{ infoPoke.move.name}} </div>
            
          </div>

        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";



export default{
  methods:{
    ...mapActions(["fetchPokemonInformation"]),
  },
  computed:{
    ...mapGetters(["getInfoPokemon"]),
  },
  created(){
    this.fetchPokemonInformation();
  },
}


</script>

<style scoped>
h3{
  color: rgb(44, 168, 81);
  margin: 10px;
  
}
.container{
    width: 50%;
    background-color: rgba(206, 117, 117, 0.421);
    border: 1px solid darkkhaki;
    border-radius: 10px;
}
.features-card{
    background-color: rgba(240, 128, 128, 0.611);
    padding: 10px;
    display: flex;
    justify-content: space-between;
}
.info-card{
    background-color: rgba(72, 173, 223, 0.611);
    padding: 10px;
    display: flex;
    justify-content: space-between;
}
.pic{
    width: 75%;
    margin: auto ;    
}
.inf-name{
    color: rgb(44, 168, 81);
    margin: 10px;
}
.inf-type{
    margin: 4px;
    padding: 10px;
    border: 1px solid rgba(151, 35, 35, 0.558);
    border-radius: 10px;
    background-color: rgba(60, 116, 144, 0.391);
    color: yellow;
    display: flex;
    justify-content: space-between;
}
.inf-ability{
    margin: 4px;
    padding: 10px;
    border: 1px solid rgba(167, 41, 184, 0.558);
    border-radius: 10px;
    background-color: rgba(57, 240, 225, 0.391);
    color: yellow;
    display: flex;
    justify-content: space-between;
}
.inf-moves{
    margin: 4px;
    padding: 10px;
    border: 1px solid rgba(184, 41, 113, 0.558);
    border-radius: 10px;
    background-color: rgba(72, 233, 96, 0.434);
    color: yellow;
    display: flex;
    justify-content: space-between;
}

</style>
