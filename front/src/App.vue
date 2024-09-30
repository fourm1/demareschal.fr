<template>
    <div id="app">
        <HeaderComponent :is-logged-in="isLoggedIn" :username="username" />
        <Home/>
        <FooterComponent />
    </div>

</template>

<script>

import Home from "@/components/homepage/HomePageComponent.vue";
import HeaderComponent from "@/components/header/HeaderComponent.vue";
import FooterComponent from "@/components/footer/FooterComponent.vue";

export default {
    name: 'App',
    components: {
        FooterComponent,
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
