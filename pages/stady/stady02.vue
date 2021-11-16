<template>
  <div id="example-1">
    <button @click="show = !show">
      Toggle render ({{ show }})
    </button>
    <transition name="slide-fade">
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
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
  border: 1px solid blue;
}
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
  border: 1px solid red;
}
</style>
