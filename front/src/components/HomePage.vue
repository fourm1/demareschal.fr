<template>
    <div class="home">
        <div class="first-page">
            <header class="header">
                <h1>Antoine de Mareschal</h1>
                <h2>Développeur full-stack junior</h2>
            </header>

            <div class="profile">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw5s438rgbikFSeGxME-FACY4DlV165R1lkg&s=="
                    alt="Jeremy Clarkson" class="profile-picture">
                <p>Bonjour, je suis Olivier de Carglass.</p>
            </div>

            <div class="carousel-container">
                <transition
                    name="carousel"
                    @before-enter="beforeEnter"
                    @after-leave="afterLeave"
                    mode="out-in">
                    <span :key="currentTech" class="carousel-item">{{ currentTech }}</span>
                </transition>
            </div>

            <div class="profile">
                <p>(The laws of roads don't apply anymore when 4:55 of Free Bird starts playing.)</p>
            </div>

            <div class="scroll-arrow" @click="scrollToNextSection">
                &#x2193;
            </div>
        </div>

        <div class="second-page" id="ouais">
            <div class="presentation">
                <h2>Présentation du site</h2>
                <p>Sollicitudinsale dolorem maecenas alienum omnesque arcu varius menandri reformidans deserunt ad netus
                    eos
                    quem conclusionemque aperiri himenaeos. Suscipiantureos eos iudicabit iudicabit posse posidonium
                    senectus turpis conubia ridiculus melius ornatus facilis arcu. Adhucaliquid faucibus molestie
                    ancillae
                    primis consetetur massa has sodales lectus iisque graecis cursus detracto nostrum. Promptasimilique
                    contentiones senserit postea impetus dicant per nec accommodare eros fusce homero
                    conclusionemque.</p>
            </div>
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
        },
        scrollToNextSection() {
            const section = this.$refs.ouais;
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
            });
        }
    },
};
</script>
