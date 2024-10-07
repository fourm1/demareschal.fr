const express = require('express');
const {fetchCurrencies} = require('./service/currencyConverter/currencyService');
const router = express.Router();

router.get('/api/currencies', async (req, res) => {
    try {
        const devises = await fetchCurrencies();
        res.json(devises);
    } catch (error) {
        res.status(500).json({message: 'Erreur lors de la récupération des devises'});
    }
});

module.exports = router;
