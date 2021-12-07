<template>
  <div class="container">
    <div class="motionContainer">
      <h1>interaction26</h1>
      <nuxt-link :to="{name: 'interaction-interaction26detail'}">
        go detail
      </nuxt-link>
      <div v-for="i in 10" :key="i">
        {{ i }}
      </div>
      <div class="bannerItem" :class="{on: bannerAction}" @click="onClickBanner">
        <div class="bannerTitle">
          banner title
        </div>
        <div class="bannerDesc">
          banner desc
        </div>
        <div class="bannerCard" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'interaction',
  data () {
    return {
      bannerAction: false
    }
  },
  methods: {
    onClickBanner () {
      this.bannerAction = true
      setTimeout(() => {
        this.$router.push({ name: 'interaction-interaction26detail' })
      }, 500)
    }
  }
}
</script>

<style lang="scss" scoped>
.motionContainer {
  position: fixed;
  width: 400px;
  height: 100vh;
  border: 1px solid #333;
}
.bannerItem {
  position: relative;
  width: calc(100% - 40px);
  height: 300px;
  margin-left: 20px;
  background-color: #ccc;
  border-radius: 30px;
  padding: 20px;
  cursor: pointer;
  &.on {
    animation: bannerItemAction 0.5s ease-in-out forwards;
    .bannerCard {
      animation: bannerCardAction 0.5s ease-in-out forwards;
    }
  }
  .bannerTitle {
    font-size: 30px;
    font-weight: 800;
  }
  .bannerDesc {
    font-size: 20px;
    font-weight: 500;
  }
  .bannerCard {
    position: absolute;
    right: 20px;
    bottom: 20px;
    width: 50px;
    height: 80px;
    background-color: #888;
  }
}

@keyframes bannerItemAction {
  0% {
    position: absolute;
    top: 150px;
    width: calc(100% - 40px);
    height: 200px;
    margin-left: 20px;
    border-radius: 30px;
  }
  100% {
    position: absolute;
    top: 0px;
    width: calc(100% - 0px);
    height: 340px;
    margin-left: 0px;
    border-radius: 0px;
  }
}

@keyframes bannerCardAction {
  0% {
    width: 50px;
    height: 80px;
    right: 20px;
    bottom: 20px;
  }
  100% {
    width: 100px;
    height: 160px;
    right: calc(100% / 2 - 50px);
    bottom: -50px;
    background-color: #3eaf7c;
  }
}
</style>
