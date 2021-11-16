<template>
  <div id="demo">
    <button @click="show = !show">
      Toggle
    </button>
    <transition name="fade">
      <p v-if="show">
        hello
      </p>
    </transition>
  </div>
</template>

<script>
export default {
  layout: 'stady',
  data () {
    return {
      show: true
    }
  }
}
</script>

<style>
.fade-enter-active {
  transition: opacity 1.5s;
  border: 1px solid blue;
}
.fade-leave-active {
  transition: opacity 1.5s;
  border: 1px solid red;
}
.fade-enter {
  opacity: 0;
}
.fade-leave-to {
  opacity: 0;
}
</style>
