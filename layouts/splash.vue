<template>
  <div class="layout-container">
    <LeftmenuSplash class="leftmenu" />
    <Nuxt class="main" />
  </div>
</template>

<script>
import LeftmenuSplash from '~/components/layouts/LeftmenuSplash'
export default {
  components: { LeftmenuSplash }
}
</script>

<style lang="scss" scope>
.layout-container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  .leftmenu {
    min-height: 100vh;
    border-right: 1px solid #f1f1f1;
    width: 300px;
  }
  .main {
    flex: 1;
    text-align: left;
    padding: 20px;
  }
}
</style>
