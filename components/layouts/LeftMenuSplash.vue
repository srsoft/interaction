<template>
  <div>
    <p>splash</p>
    <ul>
      <li v-for="(item, i) in routeData" :key="i">
        <nuxt-link :to="{ name: item.name }" :class="{ on: currentRouteCheck(item) }">{{ item.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      routeData: [
        { name: 'splash', title: '홈' },
        { name: 'splash-splash01', title: '에니메이션1' },
        { name: 'splash-splash02', title: '에니메이션2' }
      ]
    }
  },
  computed: {
  },
  methods: {
    currentRouteCheck (item) {
      return this.$nuxt.$route.name === item.name
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  li {
    padding: 0 10px;
    a {
      display: block;
      padding: 5px 10px;
      text-align: left;
      border-radius: 999px;
      &.on {
        background-color: #000;
        color: #fff;
      }
    }
  }
}
</style>
