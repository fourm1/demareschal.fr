<template>
    <div class="page">
        <h1>API Endpoints</h1>
        <ul class="all-api">
            <li v-for="endpoint in endpoints" :key="endpoint.url">
                <h2>{{ endpoint.method }} {{ endpoint.url }}</h2>
                <button @click="fetchData(endpoint)">Récupérer les données</button>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";
import '@/components/endpointsShow/endpointsShow.scss';

export default {
    data() {
        return {
            endpoints: [
                {method: 'GET', url: '/api/currencies', result: null},
                {method: 'GET', url: '/api/site-map', result: null}
            ],
        };
    },
    methods: {
        async fetchData(endpoint) {
            try {
                const response = await axios({
                    method: endpoint.method.toLowerCase(),
                    url: endpoint.url,
                });
                endpoint.result = JSON.stringify(response.data, null, 2);
                const blob = new Blob([endpoint.result], {type: 'application/json'});
                const url = URL.createObjectURL(blob);
                window.open(url, '_blank');
            } catch (error) {
                endpoint.result = `Error: ${error.message}`;
            }
        }
    },
};
</script>