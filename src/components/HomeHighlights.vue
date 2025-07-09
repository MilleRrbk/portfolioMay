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
          <p>{{ item.description }}</p>
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
@media (max-width: 768px) {
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
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.home-highlight-image {
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: center;
  display: block;
}

  
.home-highlight-text {
  overflow: hidden;
  display: flex;
  flex-direction: column; 
  flex: 1;
   
  max-height: 100%;
  margin-left: 15px;
}

.home-highlight-text h3 {
  margin: 0;
  font-family: AzeretMono, sans-serif;
  font-size: var(--fs-ml);
  color: var(--text-clr);
}

.home-highlight-text p {
  margin: 0.5rem 0 0; 
  font-size: var(--fs-sm);   
  line-height: 1.4;
  font-family: Poppins, sans-serif;
  color: var(--text-clr);
 /* ====== ellipsis på linje-niveau ====== */
 display: -webkit-box;             /* WebKit-box til clamping */
  -webkit-box-orient: vertical;     /* lodret stabling */
  -webkit-line-clamp: 7;            
  overflow: hidden;                 /* gem resten */
  text-overflow: ellipsis;          /* vis “…” */
}
/* Eksempel: på meget small skærm, kun 2 linjer */
@media (max-width: 1500px) {
  .home-highlight-text p {
    -webkit-line-clamp: 7;
  }
}
@media (max-width: 1370px) {
  .home-highlight-text p {
    -webkit-line-clamp: 5;
  }
}
@media (max-width: 1200px) {
  .home-highlight-text p {
    -webkit-line-clamp: 4;
  }
}
@media (max-width: 1090px) {
  .home-highlight-text p {
    -webkit-line-clamp: 5;
  }
}
@media (max-width: 1040px) {
  .home-highlight-text p {
    -webkit-line-clamp: 4;
  }
}
@media (max-width: 940px) {
  .home-highlight-text p {
    -webkit-line-clamp: 3;
  }
}
@media (max-width: 873px) {
  .home-highlight-text p {
    -webkit-line-clamp: 2;
  }
}
@media (max-width: 825px) {
  .home-highlight-text p {
    -webkit-line-clamp: 1;
  }
}
@media (max-width: 768px) {
  .home-highlight-text p {
    -webkit-line-clamp: 7;
  }
}
@media (max-width: 425px) {
  .home-highlight-text p {
    -webkit-line-clamp: 5;
  }
}
@media (max-width: 380px) {
  .home-highlight-text p {
    -webkit-line-clamp: 4;
  }
}
@media (max-width: 340px) {
  .home-highlight-text p {
    -webkit-line-clamp: 2;
  }
}
@media (max-width: 310px) {
  .home-highlight-text p {
    -webkit-line-clamp: 1;
  }
}


  </style>
  