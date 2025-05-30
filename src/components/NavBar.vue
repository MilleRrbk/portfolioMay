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
  padding-left: var(--space-sm);
}

.nav-item:nth-child(3),
.nav-item:nth-child(4) {
  justify-content: flex-end;
  padding-right: var(--space-sm);
}

.nav-btn {
  background: var(--sec-clr);
  border: 1px solid var(--border-clr);
  display: block;
  width: 100%;
  max-width: 10ch;
  text-align: center;
  margin-block: var(--space-xs);
  padding-block: var(--space-2xs);
  padding-inline: var(--space-sm);
  cursor: pointer;
  color: var(--text-clr);
  font-size: var(--fs-xs);
  text-decoration: none;
  font-family: AzeretMonoSemiBold, sans-serif;
  font-weight: 600;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

@media (max-width: 400px) {
  .nav-btn {
    padding-block: var(--space-2xs);
    padding-inline: var(--space-xs);
    width: 100%;
    min-width: fit-content;
    justify-content: center;
    margin-block: 0;
  }

  .nav-item {
    padding: 0;
    justify-content: stretch;
  }

  .stroke-box {
    border: none;
    padding: 0;
  }
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


