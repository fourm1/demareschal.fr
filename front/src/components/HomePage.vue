<template>
    <div class="home">
        <header class="header">
            <h1>Antoine de Mareschal</h1>
            <h2>Développeur full-stack junior</h2>
        </header>

        <div class="profile">
            <img src="data:image/jpeg;base64,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" alt="Jeremy Clarkson" class="profile-picture">
          <p>Bonjour, je suis Olivier de Carglass.</p>
        </div>

        <div class="carousel-container">
            <!-- Utilisation d'une transition groupée pour coordonner l'apparition et la disparition -->
            <transition
                name="carousel"
                @before-enter="beforeEnter"
                @after-leave="afterLeave"
                mode="out-in"
            >
                <span :key="currentTech" class="carousel-item">{{ currentTech }}</span>
            </transition>
        </div>
    </div>
</template>

<script>

import('@/assets/styles/home.scss')

export default {
    data() {
        return {
            techs: ['Vue', 'React', 'Angular', 'HTML', 'CSS', 'Javascript', 'Typescript', 'Git'],
            currentIndex: 0,
            isAnimating: false,
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
                if (!this.isAnimating) {
                    this.currentIndex = (this.currentIndex + 1) % this.techs.length;
                }
            }, 3000); // Change toutes les 3 secondes pour laisser le temps à l'animation
        },
        beforeEnter() {
            this.isAnimating = true;
        },
        afterLeave() {
            this.isAnimating = false;
        }
    },
};
</script>
