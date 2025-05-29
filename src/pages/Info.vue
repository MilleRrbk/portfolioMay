<template>
<!--introduction to me-->
    <div class="info-detail page-grid">
      <h2 class="page-title"> Kontakt</h2>
      <section class="me-intro page-grid">
        <div class="info-text">
          <h2 class="page-title1"> Min uddannelse</h2>
          <p>Til dagligt studerer jeg Coded Design - Visual Kommunikation på DMJX, hvor jeg for lov til at udfolde mig kreativt og lade mine idéer komme til live. <br>Jeg interesserer mig bl.a. for visuelle identiteter, experiencedesign  </p>
          <h2 class="page-title1"> Lidt om mig</h2>
          <div class="info-text">
            <p>Mit navn er Mille Rørbæk, jeg er 24 år gammel og bor på Frederiksberg.</p>
          </div>
        </div>
        <div class="info-image">
          <img src="@/assets/imgs/mig.jpg" alt="me">
        </div>
        
 
        
      </section>
      
      <!--contact section-->
      <section class="me-intro page-grid">
        <h2 class="page-title">Kom i kontakt!</h2>
      <div class="info-text">
        <p>Email</p>
        <p class="link-styling"><a href="mailto:mille.rorbak@hotmail.com">mille.rorbak@hotmail.com</a></p>
      </div>
      </section>

    </div>
</template>
  
  <script>
  export default {
    name: 'Info'
  }
  </script>
  
  <style scoped>

.page-title1{
  text-decoration: underline 4px;
  grid-column: 1 / 13;
  margin-top: 0;
  font-size: clamp(1.2rem, 1.5vw, 2rem);
  color: var(--text-clr);
  font-family: AzeretMono, sans-serif;
}

.link-styling a {
  color: var(--text-clr);
  text-decoration: none;
}

.link-styling a:visited {
  color: var(--text-clr);
  text-decoration: none;
}

.link-styling a:hover {
  color: var(--text-clr);
  text-decoration:underline;
}
  .info-detail {
  display: grid;
  grid-template-columns: repeat(12,1fr);
  gap: clamp(1rem,2vw,2rem);
  }

  .info-text { 
    grid-column: 1 / 7; 
  }

  .info-image { 
    grid-column: 7 / -1; 
  }

  .info-image img {
  width: 80%;
  aspect-ratio: 1 / 1;
  object-fit: contain;
  }

  .info-text p {
  margin-bottom: 5vw; 
}

.me-intro {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(12,1fr);
  gap: clamp(1rem,2vw,2rem);
  color: var(--text-clr);
  font-family: Poppins, sans-serif;
  font-size: clamp(0.875rem, 2vw, 1.25rem);
  align-items: start;
}
</style>