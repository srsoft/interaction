<template>
  <div class="layout-container">
    <Leftmenu class="leftmenu" />
    <Nuxt class="main" />
  </div>
</template>

<script>
import Leftmenu from '~/components/layouts/LeftMenu.vue'
export default {
  components: { Leftmenu }
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
    align-items: flex-start;
    text-align: left;
    padding: 20px;
  }
}
</style>
