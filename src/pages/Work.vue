<template>
  <div class="work page-grid">
    <h1 class="page-title">Projekter</h1>
    <p class="page-intro">Velkommen til min portfolio. Her har jeg samlet udvalgte projekter fra både studiet og min fritid. <br><br>Klik dig ind på hvert projekt for at læse om proces, værktøjer og designvalg.
</p>
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
