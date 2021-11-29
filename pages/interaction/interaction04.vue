<template>
  <div class="container">
    <div id="multiLineTab">
      <p>{{ scrollX }} / {{ getPercent }} // {{ scrollX * getPercent }}</p>
      <p>{{ tab1 }} / {{ tab2 }}</p>
      <p>{{ tab1 - 300 }} / {{ tab2 - 300 }}</p>
      <p>tab1 : {{ tab1 - tab2 }}</p>
      <p>tab2 : 0</p>
      <div ref="tabScroll" class="scroll">
        <!-- <ul ref="tab1"> -->
          <ul ref="tab1" :style="`transform: translateX(-${scrollX}px)`">
          <li>awerwb</li>
          <li>cdwe</li>
          <li>fghi</li>
          <li>jklmn</li>
        </ul>
        <!-- <ul ref="tab2"> -->
          <ul ref="tab2" :style="`transform: translateX(-${scrollX - (scrollX * getPercent)}px)`">
          <li>aby</li>
          <li>cdewy</li>
          <li>sdf</li>
          <li>we</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'interaction',
  data () {
    return {
      scrollX: 0,
      tab1: 0,
      tab2: 0,
      tab3: 0
    }
  },
  computed: {
    getPercent () {
      return (this.tab1 - this.tab2) / (this.tab1 - 300)
    }
  },
  mounted () {
    this.$refs.tabScroll.addEventListener('scroll', this.onScroll)
    this.tab1 = this.$refs.tab1.clientWidth
    this.tab2 = this.$refs.tab2.clientWidth
    // this.tab3 = this.$refs.tab3.clientWidth
  },
  beforeDestroy () {
    this.$refs.tabScroll.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll (e) {
      this.scrollX = e.target.scrollLeft
    }
  }
}
</script>

<style lang="scss" scoped>
#multiLineTab {
  width: 300px;
  .scroll {
    width: 100%;
    overflow-x: scroll;
    border: 1px solid red;
    ul {
      display: inline-flex;
      margin-bottom: 20px;
      li {
        display: inline-block;
        border: 1px solid #333;
        border-radius: 999px;
        padding: 5px 30px;
        margin-right: 10px;
      }
    }
  }
}
</style>
