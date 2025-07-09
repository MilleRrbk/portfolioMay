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
    <section
  class="detail-thumbs page-grid"
  :class="{ 'thumbs-few': project.thumbs.length <= 2 }"
>
  <div
    v-for="(img, i) in project.thumbs"
    :key="i"
    class="detail-thumb"
  >
    <img :src="img" :alt="project.title + ' thumb ' + (i + 1)" />
  </div>
</section>

    <!--  moreText -->
    <section class="detail-body">
  <p v-for="(line, i) in bodyLines" :key="i" v-html="line"></p>
</section>

     <!-- thumbs2.5 -->
     <section
  v-if="project.thumbs25?.length"
  class="detail-thumbs page-grid"
  :class="{ 'thumbs-few': project.thumbs25.length <= 2 }"
>
  <div 
    v-for="(img, i) in project.thumbs25"
    :key="'thumb2-' + i"
    class="detail-thumb">
    <img 
      :src="img" 
      :alt="`${project.title} ekstra thumb ${i + 1}`">
  </div>
</section>

<!-- thumbs3 -->
<section
  v-if="project.thumbs3?.length"
  class="detail-thumbs detail-thumbs-free page-grid"
  :class="{ 'thumbs-few': project.thumbs3.length <= 2 }"
>
  <div 
    v-for="(img, i) in project.thumbs3"
    :key="'thumb3-' + i"
    class="detail-thumb">
    <img 
      :src="img" 
      :alt="`${project.title} tredje thumb ${i + 1}`">
  </div>
</section>

<!-- video -->
<section v-if="project.video" class="detail-video">
  <video
    controls
    preload="none"
    :poster="project.poster || ''"
    width="100%"
  >
    <source :src="project.video" type="video/mp4" />
    Din browser understøtter ikke video-tagget.
  </video>
</section>

    <section>
      <div class="page-title">
      <p>Process</p>
    </div>
    </section>

     <!-- thumbs2 -->
<section
  v-if="project.thumbs2?.length"
  class="detail-thumbs page-grid"
  :class="{ 'thumbs-few': project.thumbs2.length <= 2 }"
>
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
    :key="'more2-' + i"
    v-html="line">
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
  margin-right: var(--space-lg);

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

.detail-thumbs.thumbs-few {
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
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
  margin-bottom: 0;
  line-height: 1.6;
  color: var(--text-clr);
  font-family: Poppins, sans-serif;
  font-size: var(--fs-sm);
}

.detail-video {
  grid-column: 1 / -1;
  margin-block: var(--space-lg);
}

.detail-video video {
  width: 100%;
  height: auto;
  max-width: 100%;
  border: 1px solid var(--border-clr);
}

.detail-thumbs-free .detail-thumb img {
  width: 100%;
  height: auto;
  aspect-ratio: auto;
  object-fit: contain;
  margin-top: var(--space-lg);
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
  .detail-thumbs,
  .detail-thumbs.thumbs-few {
    grid-template-columns: 1fr !important;
  }
}



</style>
