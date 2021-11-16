<template>
  <div>
    <button @click="modal1 = true" class="button--green">modal1</button>
    <button @click="modal2 = true" class="button--green">modal2</button>

    <swipemodal
      v-model="modal1"
      height="80vh"
      width="100%"
      radius="20px"
    >
      <h1>contents1</h1>
    </swipemodal>
    <swipemodal
      v-model="modal2"
      height="50vh"
      width="300px"
      radius="10px"
    >
      <h1>contents2</h1>
    </swipemodal>
  </div>
</template>

<script>
import swipemodal from 'nekoo_vue_swipemodal'
import 'nekoo_vue_swipemodal/dist/swipemodal.css'

export default {
  name: 'Interaction07',

  components: {
    swipemodal
  },
  layout: 'interaction',

  data () {
    return {
      modal1: false,
      modal2: false
    }
  }
}
</script>
