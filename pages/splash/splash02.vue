<template>
  <div>
    <div class="splash">
      <h1 class="fade-in">
        Welcom To My Website
      </h1>
    </div>

    <header class="header">
      Conor Bailey
    </header>
    <section>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </section>
  </div>
</template>
<script>
import splash02 from '~/mixins/splash02'
export default {
  mixins: [splash02],
  layout: 'splash',
  mounted () {
    this.start()
  }
}
</script>
<style>
.splash {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: black;
  z-index: 200;
  color: white;
  text-align: center;
  line-height: 90vh;
}
.splash.display-none {
  opacity: 0;
  z-index: -1;
  transition: all 0.5s;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

.fade-in {
  opacity: 0;
  animation: fadeIn 1s ease-in forwards;
}
</style>
