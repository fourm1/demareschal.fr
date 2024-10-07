const express = require('express');
const {fetchCurrencies} = require("./service/currencyConverter/currencyService");
const app = express();
const port = 3000;

app.get('/site-map', (req, res) => {
    res.send("Hello World !");
});

app.get('/api/currencies', async (req, res) => {
    try {
        const currencies = await fetchCurrencies();
        res.json(currencies);
    } catch (error) {
        res.status(500).send('Erreur lors de la récupération des devises');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});