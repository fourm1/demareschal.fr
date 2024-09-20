<template>
    <header class="header">
        <!-- Logo -->
        <div class="logo">
            <img src="https://via.placeholder.com/150" alt="Logo" />
        </div>

        <!-- Menu principal -->
        <nav class="nav">
            <ul>
                <!-- Bouton Modules avec menu déroulant -->
                <li class="nav-item dropdown">
                    <button @click="toggleModulesDropdown">Modules</button>
                    <ul v-if="showModulesDropdown" class="dropdown-menu">
                        <li v-for="module in modules" :key="module">{{ module }}</li>
                    </ul>
                </li>
                <li class="nav-item"><button>Contact</button></li>
                <li class="nav-item"><button>À propos</button></li>
            </ul>
        </nav>

        <!-- Droite du header : utilisateur connecté ou non -->
        <div class="user-section">
            <!-- Version connectée -->
            <div v-if="isLoggedIn" class="user-dropdown">
                <button @click="toggleUserDropdown">{{ username }}</button>
                <ul v-if="showUserDropdown" class="dropdown-menu">
                    <li><button @click="logout">Déconnexion</button></li>
                </ul>
            </div>

            <!-- Version non connectée -->
            <div v-else>
                <button @click="register">S'inscrire</button>
                <button @click="login">Se connecter</button>
            </div>
        </div>
    </header>
</template>

<script>

import ('@/assets/styles/header.scss')

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
            // Logique d'inscription
            alert("Redirection vers la page d'inscription");
        },
        login() {
            // Logique de connexion
            alert("Redirection vers la page de connexion");
        },
    },
};
</script>

<style scoped src="@/assets/styles/header.scss"></style>
