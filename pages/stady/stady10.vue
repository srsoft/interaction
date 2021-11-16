<template>
  <div id="staggered-list-demo">
    <input v-model="query">
    <transition-group
      name="staggered-fade"
      tag="ul"
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <li
        v-for="(item, index) in computedList"
        :key="item.msg"
        :data-index="index"
      >
        {{ item.msg }}
      </li>
    </transition-group>
  </div>
</template>

<script>
import Velocity from 'velocity-animate'
export default {
  layout: 'stady',
  data () {
    return {
      query: '',
      list: [
        { msg: 'Bruce Lee' },
        { msg: 'Jackie Chan' },
        { msg: 'Chuck Norris' },
        { msg: 'Jet Li' },
        { msg: 'Kung Fury' }
      ]
    }
  },
  computed: {
    computedList () {
      const vm = this
      return this.list.filter(function (item) {
        return item.msg.toLowerCase().includes(vm.query.toLowerCase())
      })
    }
  },
  methods: {
    beforeEnter (el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    enter (el, done) {
      const delay = el.dataset.index * 150
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 1, height: '1.6em' },
          { complete: done }
        )
      }, delay)
    },
    leave (el, done) {
      const delay = el.dataset.index * 150
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 0, height: 0 },
          { complete: done }
        )
      }, delay)
    }
  }
}
</script>

<style>

</style>
