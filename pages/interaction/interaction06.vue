<template>
  <div>
    <h1>npm install --save vue-swipeable-bottom-sheet</h1>
    <button @click="open">
      Open
    </button>
    <button @click="half">
      Half
    </button>
    <button @click="close">
      Close
    </button>
    <swipeable-bottom-sheet ref="swipeableBottomSheet">
      <h1>Lorem Ipsum</h1>
      <h2>What is Lorem Ipsum?</h2>
      <p>
        <strong>Lorem Ipsum</strong> is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </swipeable-bottom-sheet>

    1 <br />
    1 <br />
    1 <br />
    1 <br />
    1 <br />
    1 <br />
    1 <br />
    1 <br />
    1 <br />
    1 <br />
    1 <br />
    1 <br />
    1 <br />
    1 <br />
    1 <br />
    1 <br />
    1 <br />
    1 <br />
    1 <br />
    1 <br />
    1 <br />
    1 <br />
    1 <br />
    1 <br />
    1 <br />
    1 <br />
    1 <br />
    1 <br />
    1 <br />
    1 <br />
    1 <br />
    1 <br />
    1 <br />
    1 <br />
    1 <br />
    1 <br />
    1 <br />
    1 <br />
    1 <br />
    1 <br />
    <button @click="open">
      Open
    </button>
    <button @click="half">
      Half
    </button>
    <button @click="close">
      Close
    </button>
    2222<br />
    2222<br />
    2222<br />
    2222<br />
    2222<br />
    2222<br />
    2222<br />
    2222<br />
    2222<br />
    2222<br />
    2222<br />
    2222<br />
    2222<br />
    2222<br />
    2222<br />
    2222<br />
    2222<br />
    2222<br />
    2222<br />
    2222<br />
    2222<br />
    2222<br />
    2222<br />
    2222<br />
    2222<br />
    2222<br />
    2222<br />
    2222<br />
    2222<br />
    2222<br />
    2222<br />
  </div>
</template>

<script>
import { SwipeableBottomSheet } from 'vue-swipeable-bottom-sheet'

export default {
  components: {
    SwipeableBottomSheet
  },
  layout: 'interaction',
  methods: {
    half () {
      this.$refs.swipeableBottomSheet.setState('half')
    },
    open () {
      this.$refs.swipeableBottomSheet.setState('open')
    },
    close () {
      this.$refs.swipeableBottomSheet.setState('close')
    }
  }
}
</script>
