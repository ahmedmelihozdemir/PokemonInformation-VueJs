<template>
    <div class="home">
        <!-- <h1>This is a home page</h1> -->
        <div>
            <h2>Pokemon Picker</h2>
        </div>
        <MainComponent></MainComponent>
    </div>
</template>

<script>
import MainComponent from "@/components/MainComponent.vue";

export default {
    components: {
        MainComponent,
    },
};
</script>

<style scoped>
div {
    text-align: center;
}
div:hover {
    cursor: pointer;
}
h2 {
    font-size: 2em;
    font-weight: bold;
    color: #42b983;
}
</style>
