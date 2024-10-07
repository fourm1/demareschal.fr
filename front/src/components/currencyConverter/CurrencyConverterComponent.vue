<template>
    <div class="currency-converter">
        <h1>Convertisseur de devises</h1>
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
import axios from 'axios';
import '@/components/currencyConverter/currencyConverter.scss';

export default {
    data() {
        return {
            currencies: [],
            currencyFrom: 'EUR',
            currencyTo: 'USD',
            amount: 0,
            result: null,
            exchangeRates: {},
        };
    },
    methods: {
        async fetchCurrencies() {
            try {
                const response = await axios.get('/api/currencies');
                const devises = response.data;

                // Mise à jour des devises et des taux de change
                this.currencies = devises.map(devise => devise.codeISODevise);
                devises.forEach(devise => {
                    this.exchangeRates[devise.codeISODevise] = devise.taux;
                });
            } catch (error) {
                console.error("Erreur lors de la récupération des devises:", error);
            }
        },
        convertCurrency() {
            const rateFrom = this.exchangeRates[this.currencyFrom];
            const rateTo = this.exchangeRates[this.currencyTo];
            if (rateFrom && rateTo) {
                this.result = ((this.amount / rateFrom) * rateTo).toFixed(2);
            } else {
                this.result = 'Taux de change non disponible';
            }
        },
        getCurrencySymbol(currency) {
            const symbols = {
                USD: 'US $',
                EUR: '€',
                JPY: '¥',
                BGN: '',
                CZK: '',
                DKK: '',
                GBP: '£',
            };
            return symbols[currency] || '';
        }
    },
    mounted() {
        // Appel initial pour récupérer les devises dès le montage du composant
        this.fetchCurrencies();
    },
};
</script>
