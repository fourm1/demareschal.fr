<template>
    <div class="home">
        <section class="first-page">
            <header class="header-home">
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

            <div class="cv">
                <a href="../../assets/downloadable/jetbrains-toolbox-2.2.2.20062.exe" download class="cv-button">
                    Télécharger mon cv
                </a>
            </div>

            <div class="scroll-arrow" @click="scrollToNextSection">
                &#x2193;
            </div>
        </section>

        <section class="second-page" ref="jsp">
            <div class="presentation">
                <h2>Présentation du site</h2>
                <p>(The laws of roads don't apply anymore when 4:55 of Free Bird starts playing.)</p>
            </div>
        </section>
    </div>
</template>

<script>

import('@/components/homepage/homepage.scss')

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
            }, 3000);
        },
        beforeEnter() {
            this.isAnimating = true;
        },
        afterLeave() {
            this.isAnimating = false;
        },
        scrollToNextSection() {
            const section = this.$refs.jsp;
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
            });
        }
    },
};
</script>
