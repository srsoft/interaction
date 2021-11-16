<template>
  <div>
    <div class="intro">
      <h1 class="logo-header">
        <span class="logo">Lo</span><span class="logo">go.</span>
      </h1>
    </div>
    <header>
      <h4>Logo.</h4>
    </header>
  </div>
</template>

<script>
import splash01 from '~/mixins/splash01'
export default {
  mixins: [splash01],
  layout: 'splash'
}
</script>
<style>
* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}

header {
  position: relative;
  left: 0;
  top: 0;
  width: 1005;
  height: 80px;
  border: 1px solid red;
}

header h4 {
  position: absolute;
  left: 10%;
  bottom: 1rem;
  font-size: 1.6rem;
  border: 1px solid blue;
}

/* Splash screen */
.intro {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: #161616;
  transition: 1s;
}

.logo-header {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
}

.logo {
  position: relative;
  display: inline-block;
  bottom: -20px;
  opacity: 0;
}

.logo.active {
  bottom: 0;
  opacity: 1;
  transition: ease-in-out 0.5s;
}

.logo.fade {
  bottom: 150px;
  opacity: 0;
  transition: ease-in-out 0.5s;
}
</style>
