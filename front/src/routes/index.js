import HomePage from "@/components/homepage/HomePageComponent.vue";
import currencyConverter from "@/components/currencyConverter/CurrencyConverterComponent.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/currency-converter',
        name: 'CurrencyConverter',
        component: currencyConverter
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
