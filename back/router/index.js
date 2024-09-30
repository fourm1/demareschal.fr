import { createRouter, createWebHistory } from 'vue-router';
import CurrencyConverter from '../../front/src/components/currencyConverter/CurrencyConverterComponent.vue';

const routes = [
    {
        path: '/currency-converter',
        name: 'CurrencyConverter',
        component: CurrencyConverter
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;