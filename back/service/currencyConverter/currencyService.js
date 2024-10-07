const axios = require('axios');

async function fetchCurrencies() {
    try {
        const response = await axios.get('http://happyapi.fr/api/devises');
        console.log('Réponse complète de l\'API externe :', response.data); // Log de la réponse complète

        // Vérifions où se trouvent les devises exactement
        let devises = response.data?.result?.result?.devises;

        if (!devises) {
            throw new Error('Devises non trouvées dans la réponse de l\'API');
        }

        devises.unshift({ codeISODevise: 'EUR', taux: 1 });

        return devises;
    } catch (error) {
        console.error('Erreur lors de la récupération des devises :', error);
        throw error;
    }
}

module.exports = { fetchCurrencies };
