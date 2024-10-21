<template>
    <header class="header-header">
        <div class="logo">
            <router-link to="/">
                <img src="../../assets/images/logo-a.png" alt="Logo"/>
            </router-link>
        </div>

        <nav class="nav">
            <ul>
                <li class="nav-item dropdown" @mouseover="showModulesDropdown = true"
                    @mouseleave="showModulesDropdown = false">
                    <button>Modules</button>
                    <ul v-if="showModulesDropdown" class="dropdown-menu">
                        <li v-for="module in modules" :key="module">
                            <router-link v-if="module === 'Convertisseur de devises'" to="/currency-converter">{{
                                    module
                                }}
                            </router-link>
                            <span v-else>{{ module }}</span>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <router-link to="/contact" class="contact-button">Contact</router-link>
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
                <button id="register" @click="register">S'inscrire</button>
                <button id="login" @click="login">Se connecter</button>
            </div>
        </div>
    </header>
</template>

<script>
import '@/components/header/header.scss';

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
        toggleUserDropdown() {
            this.showUserDropdown = !this.showUserDropdown;
        },
        logout() {
            alert("Déconnexion réussie !");
        },
        register() {
            alert("Redirection vers la page d'inscription");
        },
        login() {
            alert("Redirection vers la page de connexion");
        }
    },
};
</script>