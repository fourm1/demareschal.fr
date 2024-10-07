<template>
    <footer class="footer">
        <div class="footer-content">
            <div class="social-icons">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" >
                    <Icon icon="mdi:facebook" class="default-icon" />
                    <Icon icon="devicon:facebook" class="hover-icon" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <Icon icon="mdi:instagram" class="default-icon" />
                    <Icon icon="skill-icons:instagram" class="hover-icon" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Icon icon="mdi:linkedin" class="default-icon" />
                    <Icon icon="skill-icons:linkedin" class="hover-icon" />
                </a>
                <a href="https://github.com/fourm1" target="_blank" rel="noopener noreferrer">
                    <Icon icon="mdi:github" class="default-icon" />
                    <Icon icon="skill-icons:github-light" class="hover-icon" />
                </a>
                <a href="https://steamcommunity.com/id/fourm1ssou" target="_blank" rel="noopener noreferrer" >
                    <Icon icon="mdi:steam" class="default-icon" />
                    <Icon icon="la:steam" class="hover-icon steam-icon" />
                </a>
            </div>
            <div class="footer-links">
                <a>Politique de confidentialité</a>
                <a>Mentions légales</a>
                <a>Plan du site</a>
                <router-link to="/api-endpoints">API Endpoints</router-link>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import '@/components/footer/footer.scss';
</script>