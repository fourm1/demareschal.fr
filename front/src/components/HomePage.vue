<template>
  <div class="home">
    <header class="header">
      <h1>Antoine de Mareschal</h1>
      <h2>Développeur full-stack junior</h2>
    </header>

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
      isAnimating: false, // Pour contrôler quand démarrer l'animation
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
