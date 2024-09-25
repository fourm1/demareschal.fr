<template>
    <div id="app">
        <HeaderComponent :is-logged-in="isLoggedIn" :username="username" />
        <Home/>
    </div>

</template>

<script>

import Home from "@/components/homepage/HomePage.vue";
import HeaderComponent from "@/components/header/HeaderComponent.vue";

export default {
    name: 'App',
    components: {
        Home,
        HeaderComponent
    },
    data() {
        return {
            isLoggedIn: true,
            username: 'Antoine'
        };
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
    margin-top: 0;
}
</style>
