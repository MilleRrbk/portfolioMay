<template>
    <section class="home-highlights page-grid">
      <router-link
        v-for="item in items"
        :key="item.id"
        :to="{ name: 'ProjectDetail', params: { slug: item.slug } }"
        class="home-highlight-item"
      >
        <!-- image container -->
        <div class="home-highlight-image-container">
          <img
            :src="item.heroImage"
            :alt="item.title"
            class="home-highlight-image"
          />
        </div>
  
        <!-- text block -->
        <div class="home-highlight-text">
          <h3>{{ item.title }}</h3>
        </div>
      </router-link>
    </section>
  </template>
  
  <script>
  export default {
    name: 'HomeHighlights',
    props: {
      items: {
        type: Array,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  /* container wraps all cards in a column with fluid gaps */
  .home-highlights {
  grid-column: 1 / 13;
  display: grid;
  /* ALWAYS 2 columns, each taking equal space */
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(1rem, 4vw, 6rem);
}

/* less than 800px = go down to one per row */
@media (max-width: 800px) {
  .home-highlights {
    grid-template-columns: 1fr;
  }
}
  
  .home-highlight-item {
    display: grid;
    grid-template-columns: 1fr 1fr; 
    aspect-ratio: 2 / 1;        
    text-decoration: none;
    overflow: hidden;
    padding: 2vw;
    background-color: var(--sec-clr);
    outline: 1px solid var(--border-clr);
    transition: background-color 0.3s ease, outline 0.3s ease;
}

  
.home-highlight-item:hover {
  outline: none;
  background-color: var(--pri-clr);
}
  
.home-highlight-image-container {
  aspect-ratio: 1/1;
  flex: 0 0 clamp(200px, 25vw, 400px);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.home-highlight-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
  
  .home-highlight-text {
    flex: 1;
    padding: clamp(1rem, 2vw, 2rem);
  }
  
  .home-highlight-text h3 {
  margin: 0;
  font-family: AzeretMono, sans-serif;
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  color: var(--text-clr);
}
  </style>
  