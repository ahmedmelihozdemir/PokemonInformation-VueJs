<template>
    <div class="container">
        <nav class="nav-link">
            <router-link class="nav-linke" to="/">Home / Pokemon Picker</router-link> |
            <router-link class="nav-linke" to="/about">About</router-link> |
            <router-link class="nav-linke" to="/information/pokemonName">Information</router-link>
        </nav>
        <router-view />
        
    <!-- <component :is="activeComponent">
    </component> -->

    </div>
</template>

<script>

export default {
    data(){
        return {
        };
    },
    components: {
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}

.nav-link{
    margin: 20px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    background-color: rgba(240, 128, 128, 0.611);
    border-radius: 10px;
}

.nav-linke{
    text-decoration: none;
    margin: auto;
}
</style>
