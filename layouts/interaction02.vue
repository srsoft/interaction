<template>
  <div id="app">
    [{{ $store.state.pageTransition.name }} / {{ $store.state.pageTransition.mode }}]
    <transition
      :name="$store.state.pageTransition.name"
      :mode="$store.state.pageTransition.mode"
      @after-enter="afterEnter"
      @leave="leave"
    >
      <router-view class="transition" />
    </transition>
  </div>
</template>

<script>
import Store from '~/store/index'

export default {
  name: 'App',
  components: {},
  methods: {
    afterEnter: () => {
      alert(1)
      window.scrollTo(0, 0)
    },
    leave: () => {
      alert(2)
      Store.commit('setPageTransition', 'default')
    }
  }
}
</script>
<style lang="scss">
body{
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

$duration: 0.5s;
.transition {
  overflow: hidden;
}
.router-view,
.router-view-back {
  &-enter-active,
  &-leave-active {
    position: fixed;
    width: 100%;
    background: white;
    min-height: 100vh;
    top: 0;
  }
}
// router view
.router-view-enter-active {
  transition: transform $duration ease-in-out;
  z-index: 2;
  transform: translateX(100%);
}
.router-view-enter-to {
  z-index: 2;
  transform: translateX(0%);
}
.router-view-leave-active {
  z-index: -1;
}
.router-view-leave-to {
  z-index: -1;
}
// router view back

.router-view-back-leave-active {
  transition: transform $duration ease-in-out;
  z-index: 2;
  transform: translateX(0%);
}
.router-view-back-leave-to {
  z-index: 2;
  transform: translateX(100%);
}
</style>
