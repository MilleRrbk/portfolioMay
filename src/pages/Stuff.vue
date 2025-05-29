<template>
  <div class="stuff page-grid">

    <h1 class="page-title">Andet</h1>
    <p class="page-intro">
      Her finder du en kollektion af analoge værker, jeg har lavet igennem tiden. 
    </p>

    <!-- grid of non-clickable cards -->
    <section class="showcase page-grid">
      <div
        v-for="item in stuffItems"
        :key="item.id"
        class="showcase-item"
      >
        <div class="showcase-image-container">
          <img
            :src="item.image"
            :alt="item.title"
            class="showcase-image"
          />
        </div>
        <h3 class="showcase-title">{{ item.title }}</h3>
      </div>
    </section>
  </div>
</template>

<script>
import { stuffItems } from '@/data/stuff.js'

export default {
  name: 'Stuff',
  data() {
    return { stuffItems }
  }
}
</script>

<style scoped>
.showcase {
  grid-column: 1 / 13;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(1rem, 7.5vw, 10rem);
  margin-bottom: 5vw;
}

/* 2 images per row */
@media (max-width: 1400px) {
  .showcase {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 1 image per row */
@media (max-width: 750px) {
  .showcase {
    grid-template-columns: 1fr;
  }
}

/* — each card wrapper — */
.showcase-item {
  display: flex;
  flex-direction: column;
  transform-origin: center center;
}

/* — square image container — */
.showcase-image-container {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: 1px solid var(--border-clr);

}

.showcase-image {
  width: 90%;
  height: 90%;
  object-fit: contain;
}


/* — title for each card — */
.showcase-title {
  margin: clamp(0.5rem, 1.5vw, 1rem) 0 0;
  font-size: clamp(1rem, 1vw, 1.5rem);
  text-align: left;
  color: var(--text-clr);
  font-family: AzeretMono, sans-serif;
  font-weight: 400;
}
</style>
