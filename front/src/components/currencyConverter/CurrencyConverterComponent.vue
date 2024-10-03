<template>
    <div class="currency-converter">
        <h1>Convertisseur de Devises</h1>
        <table>
            <tr>
                <td>
                    <select v-model="currencyFrom" class="currency-converter__select">
                        <option v-for="currency in currencies" :key="currency" :value="currency">
                            {{ currency }}
                        </option>
                    </select>
                </td>
                <td>
                    <select v-model="currencyTo" class="currency-converter__select">
                        <option v-for="currency in currencies" :key="currency" :value="currency">
                            {{ currency }}
                        </option>
                    </select>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <input type="number" v-model="amount" placeholder="Montant à convertir" class="currency-converter__input" />
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <button @click="convertCurrency" class="currency-converter__button">Convertir</button>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <p class="currency-converter__button">Résultat : {{ result }}</p>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>

import '@/components/currencyConverter/currencyConverter.scss'

export default {
    data() {
        return {
            currencies: ['USD', 'EUR', 'GBP', 'JPY'],
            currencyFrom: 'USD',
            currencyTo: 'EUR',
            amount: 0,
            result: null,
            exchangeRates: {}
        };
    },
    methods: {
        async fetchExchangeRates() {
            try {
                const response = await fetch('https://api.coupa.com/api/exchange_rates');
                const data = await response.json();
                this.exchangeRates = data.exchangeRates;
            } catch (error) {
                console.error('Erreur lors de la récupération des taux de change : ', error);
            }
        },
        convertCurrency() {
            const rateFrom = this.exchangeRates[this.currencyFrom];
            const rateTo = this.exchangeRates[this.currencyTo];
            if (rateFrom && rateTo) {
                this.result = (this.amount / rateFrom) * rateTo;
            } else {
                this.result = 'taux de change non disponible';
            }
        },
        created() {
            this.fetchExchangeRates();
        }
    }
};
</script>

<style scoped>

</style>