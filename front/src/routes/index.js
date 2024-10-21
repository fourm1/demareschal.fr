import HomePage from "@/components/homepage/HomePageComponent.vue";
import currencyConverter from "@/components/currencyConverter/CurrencyConverterComponent.vue";
import {createRouter, createWebHistory} from "vue-router";
import EndpointsShowComponent from "@/components/endpointsShow/EndpointsShowComponent.vue";
import ContactComponent from "@/components/contact/ContactComponent.vue";

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
    },
    {
        path: '/api-endpoints',
        name: 'EndpointsShow',
        component: EndpointsShowComponent
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactComponent
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
