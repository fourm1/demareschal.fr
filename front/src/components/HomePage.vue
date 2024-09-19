<template>
        <div class="home">
                <header class="header">
                        <h1>Antoine de Mareschal</h1>
                        <h2>Développeur full-stack junior</h2>
                </header>

                <div class="carousel-container">
                        <transition-group name="slide" tag="p" class="carousel">
                                <span :key="currentTech" class="carousel-item">{{ currentTech }}</span>
                        </transition-group>
                </div>
        </div>
</template>

<script>

import '@/assets/styles/home.scss';

export default {
        data() {
                return {
                        techs: ['Vue', 'React', 'Angular', 'HTML', 'CSS', 'Javascript', 'Typescript', 'Git'],
                        currentIndex: 0,
                };
        },
        computed: {
                currentTech() {
                        return this.techs[this.currentIndex];
                },
        },
        mounted() {
                this.startCarousel();
        },
        methods: {
                startCarousel() {
                        setInterval(() => {
                                this.currentIndex = (this.currentIndex + 1) % this.techs.length;
                        }, 2000); // Change toutes les 2 secondes
                },
        },
};
</script>
