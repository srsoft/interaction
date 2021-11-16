<template>
  <div class="about">
    <h1>About</h1>
    <button @click="goBack()">
      Previous page
    </button>
  </div>
</template>
<script>
export default {
  components: {
  },
  methods: {
    goBack () {
      this.$store.commit('setPageTransition', 'back')
      this.$router.push({
        name: 'interaction-interaction02'
      })
    }
  }
}
</script>
<style lang="scss">
  .about {
    background-color: #ccc;
  }
</style>
