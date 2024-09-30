<template>
    <footer class="footer">
        <div class="footer-content">
            <div class="social-icons">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <font-awesome-icon :icon="['fab', 'facebook']" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <font-awesome-icon :icon="['fab', 'instagram']" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <font-awesome-icon :icon="['fab', 'linkedin']" />
                </a>
                <a href="https://github.com/fourm1" target="_blank" rel="noopener noreferrer">
                    <font-awesome-icon :icon="['fab', 'github']" />
                </a>
                <a href="https://steamcommunity.com/id/fourm1ssou" target="_blank" rel="noopener noreferrer">
                    <font-awesome-icon :icon="['fab', 'steam']" />
                </a>
            </div>
            <div class="footer-links">
                <a>Politique de confidentialité</a>
                <a>Mentions légales</a>
                <a>Plan du site</a>
            </div>
        </div>
    </footer>
</template>

<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import '@/components/footer/footer.scss'
</script>
