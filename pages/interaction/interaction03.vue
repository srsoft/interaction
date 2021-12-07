<template>
  <div class="example">
    <div class="tabs">
      {{ currentId }}
      <TabItem
        v-for="item in list"
        v-bind="item"
        :key="item"
        v-model="currentId"
      />
    </div>
    <div class="contents">
      <transition>
        <section :key="currentId" class="item">
          ({{ current.content }})
        </section>
      </transition>
    </div>
  </div>
</template>

<script>
import TabItem from './interaction03TabItem.vue'
export default {
  components: { TabItem },
  layout: 'interaction',
  data () {
    return {
      currentId: 1,
      list: [
        { id: 1, label: 'Tab1', content: '콘텐츠1' },
        { id: 2, label: 'Tab2', content: '콘텐츠2' },
        { id: 3, label: 'Tab3', content: '콘텐츠3' }
      ]
    }
  },
  computed: {
    current () {
      return this.list.find(el => el.id === this.currentId) || {}
    }
  }
}
</script>

<style scoped>
.contents {
  position: relative;
  overflow: hidden;
  width: 280px;
  border: 2px solid blue;
}
.item {
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  transition: all 0.8s ease;
  border: 2px solid red;
}
/* 트랜지션 전용 스타일 */
.v-leave-active {
  position: absolute;
}
.v-enter {
  transform: translateX(-100%);
}
.v-leave-to {
  transform: translateX(100%);
}
</style>
