<template>
    <header class="header">
        <!-- Logo -->
        <div class="logo">
            <img src="https://via.placeholder.com/150" alt="Logo"/>
        </div>

        <nav class="nav">
            <ul>
                <li class="nav-item dropdown" @mouseover="showModulesDropdown = true"
                    @mouseleave="showModulesDropdown = false">
                    <button>Modules</button>
                    <ul v-if="showModulesDropdown" class="dropdown-menu">
                        <li v-for="module in modules" :key="module">{{ module }}</li>
                    </ul>
                </li>
                <li class="nav-item">
                    <button>Contact</button>
                </li>
                <li class="nav-item">
                    <button>À propos</button>
                </li>
            </ul>
        </nav>

        <div class="user-section">
            <div v-if="isLoggedIn" class="user-dropdown">
                <button @click="toggleUserDropdown">{{ username }}</button>
                <ul v-if="showUserDropdown" class="dropdown-menu">
                    <li>
                        <button @click="logout">Déconnexion</button>
                    </li>
                </ul>
            </div>

            <div v-else>
                <button @click="register">S'inscrire</button>
                <button @click="login">Se connecter</button>
            </div>
        </div>
    </header>
</template>

<script>

import '@/assets/styles/header.scss';

export default {
    props: {
        isLoggedIn: {
            type: Boolean,
            default: false,
        },
        username: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            modules: [
                'Gestionnaire de notes scolaires',
                'Site de recettes de cuisine',
                'Quiz des drapeaux',
                'Blind test musical',
                'Générateur de tournoi Counter-Strike',
                'Convertisseur de devises',
            ],
            showModulesDropdown: false,
            showUserDropdown: false,
        };
    },
    methods: {
        toggleModulesDropdown() {
            this.showModulesDropdown = !this.showModulesDropdown;
        },
        toggleUserDropdown() {
            this.showUserDropdown = !this.showUserDropdown;
        },
        logout() {
            // Logique de déconnexion
            alert("Déconnexion réussie !");
        },
        register() {
            alert("Redirection vers la page d'inscription");
        },
        login() {
            alert("Redirection vers la page de connexion");
        },
    },
};
</script>
