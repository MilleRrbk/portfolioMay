<template>
  <div class="project-detail page-grid">
    <h2 class="page-title">{{ project.title }}</h2>
    <!--  intro(longIntro) + hero image -->
    <section class="detail-intro page-grid">
      <div class="detail-text">
        <p v-html="project.longIntro"></p>
      </div>
      <div class="detail-image">
        <img :src="project.heroImage" :alt="project.title" />
      </div>
    </section>

    <!--  thumbs -->
    <section class="detail-thumbs page-grid">
      <div
        v-for="(img,i) in project.thumbs"
        :key="i"
        class="detail-thumb"
      >
        <img :src="img" :alt="project.title + ' thumb ' + (i+1)" />
      </div>
    </section>

    <!--  moreText -->
    <section class="detail-body">
      <p v-for="(line,i) in bodyLines" :key="i">{{ line }}</p>
    </section>

     <!-- thumbs2 -->
<section
  v-if="project.thumbs2?.length"
  class="detail-thumbs">
  <div 
    v-for="(img, i) in project.thumbs2"
    :key="'thumb2-' + i"
    class="detail-thumb">
    <img 
      :src="img" 
      :alt="`${project.title} ekstra thumb ${i + 1}`">
  </div>
</section>
     <!-- moretext2 -->
     <section
  v-if="project.moreText2"
  class="detail-body">
  <p
    v-for="(line, i) in moreText2Lines"
    :key="'more2-' + i">
    {{ line }}
  </p>
</section>

  </div>
</template>

<script>
export default {
  name: 'ProjectDetail',
  props: { project: Object },
  computed: {
    introLines() { return this.project.longIntro.split('\n') },
    bodyLines()  { return this.project.moreText.split('\n') },
    moreText2Lines() { return this.project.moreText2?.split('\n') || []}
  }
}
</script>

<style scoped>
.project-detail {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-md);
}

/* 2) intro + hero */
.detail-intro {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-md);
  color: var(--text-clr);
  font-family: Poppins, sans-serif;
  font-size: var(--fs-sm);
  align-items: start;
}

.detail-text {
  grid-column: 1 / 7;
}

.detail-image {
  grid-column: 7 / -1;
}

.detail-image img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}

.detail-text p {
  margin: 0;
}

/* thumbs */
.detail-thumbs {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-md);
}

.detail-thumb img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}

.project-detail.page-grid {
  align-items: start;
}

/* 4) long intro text */
.detail-body {
  grid-column: 1 / -1;
}

.detail-body p {
  margin-bottom: var(--space-lg);
  line-height: 1.6;
  color: var(--text-clr);
  font-family: Poppins, sans-serif;
  font-size: var(--fs-sm);
}

/* ========== RESPONSIVE STYLES ========== */

/* Under 768px: text + image full width, stacked */
@media (max-width: 768px) {
  .detail-text {
    grid-column: 1 / -1;
  }

  .detail-image {
    grid-column: 1 / -1;
    margin-top: var(--space-sm);
  }
}

/* Under 509px: thumbs in one column */
@media (max-width: 509px) {
  .detail-thumbs {
    grid-template-columns: 1fr;
  }
}


</style>
