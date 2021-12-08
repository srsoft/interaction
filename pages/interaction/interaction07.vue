<template>
  <div>
    <!-- <button class="button--green" @click="modal1 = true">
      전체덮기1
    </button> -->
    <button class="button--green" @click="modal2 = true">
      덜덮기1~
    </button>
    <button class="button--green" @click="open">
      vue-bottom-sheet
    </button>

    <vue-bottom-sheet ref="myBottomSheet" max-height="auto" :swipe-able="false">
      <div>
        <h1 @click="close">Lorem Ipsum</h1>
        <h2>What is Lorem Ipsum?</h2>
        <p>
          <strong>Lorem Ipsum</strong> is simply dummy text
        </p>
        <div v-for="i in 10" :key="i">{{ i }}</div>
      </div>
    </vue-bottom-sheet>

    <!-- <swipemodal
      v-model="modal1"
      height="100%"
      width="100%"
      radius="0px"
    >
      <h1>contents1</h1>
      <span @click="modal1=false">close</span>
    </swipemodal> -->
    <!-- <swipemodal
      v-model="modal2"
      height=""
      width="100vw"
      radius="10px"
      notip="true"
    >
      <h1>contents2</h1>
      <span @click="modal2=false">close</span>
      <div v-for="i in 20" :key="i">
        {{ i }}
      </div>
    </swipemodal> -->
  </div>
</template>

<script>
// import swipemodal from 'nekoo_vue_swipemodal'
// import 'nekoo_vue_swipemodal/dist/swipemodal.css'

export default {
  name: 'Interaction05',

  // components: {
  //   swipemodal
  // },
  layout: 'interaction',

  data () {
    return {
      modal1: false,
      modal2: false
    }
  },
  methods: {
    open () {
      this.$refs.myBottomSheet.open()
    },
    close () {
      this.$refs.myBottomSheet.close()
    }
  }
}
</script>
<style lang="scss">
// @import './assets/scss/swipemodal.scss';
.bottom-sheet__pan {
  display: none;
}
</style>
