<template>
  <div>
    <transition>
      <button :key="docState">
        {{ buttonMessage }}
      </button>
    </transition>
  </div>
</template>

<script>
export default {
  layout: 'stady',
  data () {
    return {
      docState: 'saved'
    }
  },
  computed: {
    buttonMessage () {
      switch (this.docState) {
        case 'saved': return 'Edit'
        case 'edited': return 'Save'
        case 'editing': return 'Cancel'
      }
    }
  }

}
</script>

<style>

</style>
