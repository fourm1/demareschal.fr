<template>
    <div id="app">
        <HeaderComponent :is-logged-in="isLoggedIn" :username="username" />
        <router-view /> <!-- Vue du routeur pour rendre les composants en fonction de la route -->
        <FooterComponent />
    </div>
</template>

<script>
import HeaderComponent from "@/components/header/HeaderComponent.vue";
import FooterComponent from "@/components/footer/FooterComponent.vue";

export default {
    name: 'App',
    components: {
        HeaderComponent,
        FooterComponent
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