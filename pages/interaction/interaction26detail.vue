<template>
  <div class="container">
    <div class="motionContainer">
      <div class="bannerItem on" @click="onClickBanner">
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
  methods: {
    onClickBanner () {
      this.$router.push({ name: 'interaction-interaction26' })
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
    position: absolute;
    top: 0px;
    width: calc(100% - 0px);
    height: 340px;
    margin-left: 0px;
    border-radius: 0px;
    .bannerCard {
      width: 100px;
      height: 160px;
      right: calc(100% / 2 - 50px);
      bottom: -50px;
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
    background-color: #3eaf7c;
  }
}
</style>
