<template>
    <nav class="nav page-grid">
      <!-- hjem -->
      <div class="nav-item stroke-box">
        <router-link :to="{ name: 'Home' }" class="nav-btn">HJEM</router-link>
      </div>
  
      <!-- projekter -->
      <div class="nav-item stroke-box">
        <router-link :to="{ name: 'Work' }" class="nav-btn">PROJEKTER</router-link>
      </div>
  
      <!-- andet -->
      <div class="nav-item stroke-box">
        <router-link :to="{ name: 'Stuff' }" class="nav-btn">ANDET</router-link>
      </div>

      <!-- kontakt  -->
      <div class="nav-item stroke-box">
        <router-link :to="{ name: 'Info' }" class="nav-btn">KONTAKT</router-link>
      </div>
    </nav>
  </template>  

  <style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--sec-clr);
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
}

.nav-item {
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-item:nth-child(1),
.nav-item:nth-child(2) {
  justify-content: flex-start;
  padding-left: clamp(0.5rem, 2vw, 1rem);
}

.nav-item:nth-child(3),
.nav-item:nth-child(4) {
  justify-content: flex-end;
  padding-right: clamp(0.5rem, 2vw, 1rem);
}

.nav-btn {
  background: var(--sec-clr);
  border: 1px solid var(--border-clr);
  display: block;
  width: clamp(8ch, 10vw, 12ch); /* all buttons gets equal width */
  text-align: center;
  margin-block: clamp(0.2rem, 0.8vw, 0.6rem);
  padding-block: clamp(0.2rem, 0.2vw, 0.4rem);
  padding-inline: clamp(0.5rem, 1.7vw, 2rem);
  cursor: pointer;
  color: var(--text-clr);
  font-size: clamp(.6rem, 1vw, 2rem);
  text-decoration: none;
  font-family: AzeretMonoSemiBold, sans-serif;
  font-weight: 600;
  transition:
    background-color 0.3s ease,
    color 0.3s ease,
    border-color 0.3s ease;
}


.nav-btn:hover {
  background-color: var(--pri-clr);
  color: var(--sec-clr);
  border-color: transparent;
}

.nav-btn.router-link-active {
  background-color: var(--text-clr);
  color: var(--sec-clr);
}
</style>

<script>
export default {
  name: 'NavBar'
}
</script>


