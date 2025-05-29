<template>
  <div class="work page-grid">
    <h1 class="page-title">Projekter</h1>
    <p class="page-intro">Velkommen til min portfolio. Her kan du se hvilke projekter jeg har lavet henover de sidste to år, både skolerelateret og personligt. <br><br>Læs mere om mine arbejdsprocesser under hvert projekt</p>
    <ShowcaseGrid :items="workItems" />
  </div>
</template>

<script>
import ShowcaseGrid    from '@/components/ShowcaseGrid.vue'
import { workProjects } from '@/data/work.js'

export default {
  components: { ShowcaseGrid },
  computed: {
    workItems() {
      return workProjects.map(p => ({
        id:    p.id,
        slug:  p.slug,
        image: p.heroImage,
        title: p.title
      }))
    }
  }
}
</script>
