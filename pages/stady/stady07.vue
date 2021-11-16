<template>
  <div id="demo">
    <div>
      {{ view }}
      <button @click="view = 'v-a'">
        a
      </button>
      <button @click="view = 'v-b'">
        b
      </button>
    </div>
    <div>
      <div>1111</div>
      <transition name="component-fade" mode="out-in">
        <component :is="view" />
      </transition>
      <div>1111</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    'v-a': {
      template: '<div>Component A</div>'
    },
    'v-b': {
      template: '<div>Component B</div>'
    }
  },
  layout: 'stady',
  data () {
    return {
      view: 'v-a'
    }
  }
}
</script>

<style>
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}

</style>
