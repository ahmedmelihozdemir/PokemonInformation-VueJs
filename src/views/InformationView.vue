<template>
    <div class="information">
        <h1>This is an information page</h1>
        <!-- <h3> Selam: {{$route.params.pokemonName}}</h3> -->
        <InformationComponent></InformationComponent>

    </div>
</template>

<script>
import InformationComponent from "@/components/InformationComponent.vue";

export default{
    components:{
        InformationComponent,
    },

}


</script>


<style>


</style>
