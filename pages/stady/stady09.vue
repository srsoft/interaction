<template>
  <div>
    <div id="flip-list-demo" class="demo">
      <button @click="shuffle">
        Shuffle
      </button>
      <transition-group name="flip-list" tag="ul" class="shuffle">
        <li v-for="(item) in items" :key="item">
          {{ item }}
        </li>
        <!-- <li v-for="i in 100" :key="i">{{ i }}</li> -->
      </transition-group>
    </div>
  </div>
</template>

<script>
import lodash from 'lodash'
export default {
  layout: 'stady',
  data () {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  },
  methods: {
    shuffle () {
      this.items = lodash.shuffle(this.items)
    }
  }
}
</script>

<style lang="scss">
.flip-list-move {
  transition: transform 1s;
}
ul.shuffle {
  width: 100px;
  li {
    display: inline-block;
    width: 20px;
    border: 1px solid black
  }
}
</style>
