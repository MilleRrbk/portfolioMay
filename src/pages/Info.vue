<template>
<!--introduction to me-->
    <div class="info-detail page-grid">
      <h2 class="page-title"> Kontakt</h2>
      <section class="me-intro page-grid">
        <div class="info-text">
          <h2 class="page-title1"> Lidt om mig</h2>
          <div class="info-text">
            <p>Mit navn er Mille Rørbæk. <br>Jeg brænder for at designe og skabe visuelle fortællinger og universer, der kan mærkes. <br>Jeg er draget af det, der vækker følelser, glæde eller eftertanke - og af mødet mellem det tekniske og det sanselige. <br>Jeg har en fascination for det mere urrealistiske og det skæve, som vækker nysgerrighed og sætter fanatsien i gang.</p>
          </div>
          <h2 class="page-title1"> Min uddannelse</h2>
          <p>Jeg er i gang med at færdiggøre min professionsbachelor i Coded Design - Visual Kommunikation på DMJX, hvor jeg får lov til at udfolde mig kreativt og bringe mine idéer til live. <br>Uddannelsen kombinerer design, teknologi og konceptudvikling, og jeg arbejder med digitale brugeroplevelser, kode og visuel formgivning.<br> Jeg har udviklet projekter, der spænder fra interaktive websites og 3D universer til typografi og visuel identitet. <br>Der lægges vægt på processer og ekserimentering, og det har lært mig at tænke kritisk, visuelt og tværfagligt.</p>
        </div>
        <div class="info-image">
          <img src="@/assets/imgs/mig.jpg" alt="portræt af mille">
        </div>
      </section>
      
      <!--contact section-->
      <section class="me-intro page-grid">
        <h2 class="page-title">Kom i kontakt!</h2>
      <div class="info-text">
        <p class="link-styling">
      Email: <a href="mailto:mille.rorbak@hotmail.com">mille.rorbak@hotmail.com</a>
    </p>
    <p>
      Telefon: 27 57 40 53
    </p>
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
  font-size: var(--fs-md);
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
  gap: var(--space-lg);
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
    margin-bottom: var(--space-lg);
}

.me-intro {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(12,1fr);
  color: var(--text-clr);
  font-family: Poppins, sans-serif;
  font-size: var(--fs-sm);
  align-items: start;
}
@media (max-width: 580px) {
  .info-text {
    grid-column: 1 / -1;
  }

  .info-image {
    grid-column: 1 / -1;
    display: flex;
    justify-content: center;
  }

  .info-text p {
    grid-column: 1 / -1;
  }

  .info-image img {
    width: 60%;
  }
}

</style>