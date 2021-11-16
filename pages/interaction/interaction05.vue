<template>
  <div>
    <button @click="modal1 = true" class="button--green">전체덮기</button>
    <button @click="modal2 = true" class="button--green">덜덮기</button>

    <swipemodal
      v-model="modal1"
      height="100vh"
      width="100vw"
      radius="0px"
    >
      <h1>contents1</h1>
    </swipemodal>
    <swipemodal
      v-model="modal2"
      height="calc(100vh - 80px)"
      width="100vw"
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
  name: 'Interaction05',

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
