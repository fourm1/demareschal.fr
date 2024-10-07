<template>
    <div>
        <h1>API Endpoints</h1>
        <ul>
            <li v-for="endpoint in endpoints" :key="endpoint.url">
                <h2>{{ endpoint.method }} {{ endpoint.url }}</h2>
                <button>Récupérer les données</button>
                <pre v-if="endpoint.result">{{ endpoint.result }}</pre>
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
                    { method: 'GET', url: '/api/currencies', result: null },
                    { method: 'GET', url: '/api/site-map', result: null }
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
                } catch (error) {
                    endpoint.result = `Error: ${error.message}`;
                }
            },
        },
    };
</script>
