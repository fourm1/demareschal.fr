<template>
    <div>
        <h1>Convertisseur de Devises</h1>
        <table>
            <tr>
                <td>
                    <select v-model="currencyFrom">
                        <option v-for="currency in currencies" :key="currency" :value="currency">
                            {{ currency }}
                        </option>
                    </select>
                </td>
                <td>
                    <select v-model="currencyTo">
                        <option v-for="currency in currencies" :key="currency" :value="currency">
                            {{ currency }}
                        </option>
                    </select>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <input type="number" v-model="amount" placeholder="Montant à convertir" />
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <button @click="convertCurrency">Convertir</button>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <p>Résultat: {{ result }}</p>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currencies: ['USD', 'EUR', 'GBP', 'JPY'],
            currencyFrom: 'USD',
            currencyTo: 'EUR',
            amount: 0,
            result: null
        };
    },
    methods: {
        convertCurrency() {
            // Logique de conversion à implémenter
            this.result = this.amount * 1.2; // Exemple de conversion fictive
        }
    }
};
</script>

<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
}
td {
    padding: 10px;
    border: 1px solid #ddd;
}
select, input {
    width: 100%;
    padding: 5px;
}
button {
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
}
button:hover {
    background-color: #45a049;
}
</style>