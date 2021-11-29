<template>
  <div class="container">
    <Flickity ref="flickity" :options="flickityOptions" @init="onInit">
      <div class="carousel-cell">
        1
      </div>
      <div class="carousel-cell">
        2
      </div>
      <div class="carousel-cell">
        3
      </div>
      <div class="carousel-cell">
        4
      </div>
      <div class="carousel-cell">
        5
      </div>
      <div class="carousel-cell">
        6
      </div>
      <div class="carousel-cell">
        7
      </div>
      <div class="carousel-cell">
        8
      </div>
      <div class="carousel-cell">
        9
      </div>
      <div class="carousel-cell">
        10
      </div>
    </Flickity>
  </div>
</template>

<script>
import Flickity from 'vue-flickity'
import $ from 'jquery'
export default {
  components: {
    Flickity
  },
  layout: 'interaction',
  data () {
    return {
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: true,
        pageDots: true,
        wrapAround: false
        // draggable: true,
        // freeScroll: false,
        // groupCells: false,
        // fullscreen: true,
        // lazyLoad: 1,
        // fade: true,
        // contain: true
        // hash: true
      }
    }
  },
  methods: {
    onInit () {
      this.$refs.flickity.on('change', (index) => {
        $('.flickity-page-dots').attr('style', '--selected:' + index)
        $('.flickity-page-dots > .dot').prev().removeClass('dot--prev')
        $('.flickity-page-dots > .dot').prev().removeClass('dot--prev-prev')
        $('.flickity-page-dots > .dot').prev().removeClass('dot--prev-prev-prev')
        $('.flickity-page-dots > .is-selected').prev().addClass('dot--prev')
        $('.flickity-page-dots > .is-selected').prev().prev().addClass('dot--prev-prev')
        $('.flickity-page-dots > .is-selected').prev().prev().prev().addClass('dot--prev-prev-prev')
      })
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/flickty.scss';
.flickity-enabled {
  width: 100%;
}
</style>
