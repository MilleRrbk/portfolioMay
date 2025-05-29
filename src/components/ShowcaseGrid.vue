<template>
  <section class="showcase page-grid">
    <router-link
      v-for="item in items"
      :key="item.id"
      :to="{ 
        name: 'ProjectDetail', 
        params: { slug: item.slug } }"
      class="showcase-item"
    >
     <div class="showcase-image-container">
      <img
          :src="item.image"
          :alt="item.title"
          class="showcase-image" />
    </div>
      <h3 class="showcase-title">{{ item.title }}</h3>
    </router-link>
  </section>
</template>


<script>
export default {
  name: 'ShowcaseGrid',
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
/* — grid container — */
.showcase {
  grid-column: 1 / 13;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(1rem, 7.5vw, 10rem);
  margin-bottom:5vw;

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

/* — clickable Item Wrapper — */
.showcase-item {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  transform-origin: center center;
}

/* 1) base square: solid secondary color */
.showcase-image-container {
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  /* prevent from stretching */
  align-self: flex-start;
  outline: 1px solid var(--border-clr);
  transition: background-color 0.3s ease, outline 0.3s ease;
}

.showcase-image-container:hover {
  outline: none;
  background-color: var(--pri-clr);
}

.showcase-image {
  position: static;
  width: 90%;
  height: 90%;
  object-fit: cover;
}

/* title under the box */
.showcase-title {
  margin: clamp(0.5rem, 1.5vw, 1rem) 0 0;
  text-align: left;  font-family: AzeretMono, sans-serif;
  font-size: clamp(1rem, 1vw, 1.5rem);
  text-align: left;
  color: var(--text-clr);
}
</style>

