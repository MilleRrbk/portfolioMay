<template>
    <div class="home page-grid">
      <Hero />
  
      <!-- udvalgte projekter -->
      <section class="intro-section page-grid">
        <div class="highlights-title">
          <p>Udvalgte projekter</p>
        </div>
      </section>
  
      <HomeHighlights :items="highlights" />
    </div>
  </template>
  
  <script>
  import Hero from '@/components/Hero.vue'
  import HomeHighlights from '@/components/HomeHighlights.vue'
  import { workProjects } from '@/data/work.js'
  
  export default {
  name: 'Home',
  components: { Hero, HomeHighlights },
  computed: {
    highlights() {
      return workProjects.slice(2, 4)
    }
  }
}
</script>
  
<style scoped>
.highlights-title {
  grid-column: 1 / 13;
  margin-top: var(--space-xl);
  font-size: var(--fs-lg);
  color: var(--text-clr);
  font-family: AzeretMono, sans-serif;
}
</style>
