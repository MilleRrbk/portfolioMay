<template>
    <section class="stroke-box page-grid hero-section">
      <video
        ref="heroVid"
        class="hero-bg"
        autoplay
        loop
        muted
        playsinline
        src="../assets/mp4s/fish.mp4"
      ></video>
        <div class="hero-logo">
        <!-- inline image here -->
        <img src="../assets/imgs/logopinkhvid.png"
        alt="Mille Rørbæk Portfolio" 
        class="logo"
        />
      </div>
    </section>
  </template>
  
  <script>
export default {
  name: 'Hero',
  mounted() {
    this.$refs.heroVid.playbackRate = 0.7;
  }
}  </script>
  
<style scoped>
.hero-section {
  grid-column: 1/13;
  position: relative;
  overflow: hidden;
  height: clamp(200px, 50vw, 60vh);
}

</style>