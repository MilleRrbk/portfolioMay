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
      return workProjects.slice(0, 3)
    }
  }
}
</script>
  
<style scoped>
.highlights-title {
  grid-column: 1 / 13;
  margin-top: clamp(1.5rem, 3vw, 5rem); 
  font-size: clamp(1.2rem, 2.8vw, 2.5rem);
  color: var(--text-clr);
  font-family: AzeretMono, sans-serif;
}
</style>
