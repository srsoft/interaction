<template>
  <div>
    <p>stady</p>
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
        { name: 'stady', title: '홈' },
        { name: 'stady-stady01', title: '단일 요소/구성 요소 전환' },
        { name: 'stady-stady02', title: 'CSS 전환' },
        { name: 'stady-stady03', title: 'CSS 애니메이션' },
        { name: 'stady-stady04', title: '사용자 정의 전환 클래스' },
        { name: 'stady-stady05', title: '자바스크립트 후크' },
        { name: 'stady-stady06', title: '전환모드' },
        { name: 'stady-stady07', title: '구성요소간 전환' },
        { name: 'stady-stady08', title: '진입/퇴장 전환 나열' },
        { name: 'stady-stady09', title: '이동전환 나열' },
        { name: 'stady-stady10', title: '놀라운 목록 전환' }
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
