export default {
  data () {
    return {
      Flickity: ''
    }
  },
  methods: {
    start () {
      // external js: flickity.pkgd.js

      // Add this code:

      // eslint-disable-next-line no-undef
      Flickity.createMethods.push('_createPrevNextCells')

      let slideIndex

      Flickity.prototype._createPrevNextCells = function () {
        this.on('select', this.setPrevNextCells)
      }

      Flickity.prototype.setPrevNextCells = function () {
        console.log(this)
        // remove classes
        changeDotClasses(this.previousDot, 'remove', 'dot--prev')
        changeDotClasses(this.previousPreviousDot, 'remove', 'dot--prev-prev')
        changeDotClasses(this.previousPreviousPreviousDot, 'remove', 'dot--prev-prev-prev')
        changeDotClasses(this.nextDot, 'remove', 'dot--next')
        // set slides
        this.previousDot = this.pageDots.dots[this.selectedIndex - 1]
        this.previousPreviousDot = this.pageDots.dots[this.selectedIndex - 2]
        this.previousPreviousPreviousDot = this.pageDots.dots[this.selectedIndex - 3]
        this.nextDot = this.pageDots.dots[this.selectedIndex + 1]
        this.direction = slideIndex < this.selectedIndex ? 'right' : 'left'
        slideIndex = this.selectedIndex

        // set holder
        this.pageDots.holder.setAttribute('style', '--selected:' + this.selectedIndex)
        this.pageDots.holder.setAttribute('data-direction', this.direction)
        // add classes
        changeDotClasses(this.previousDot, 'add', 'dot--prev')
        changeDotClasses(this.previousPreviousDot, 'add', 'dot--prev-prev')
        changeDotClasses(this.previousPreviousPreviousDot, 'add', 'dot--prev-prev-prev')
        changeDotClasses(this.nextDot, 'add', 'dot--next')
      }

      function changeDotClasses (dot, method, className) {
        if (!dot) {
          return
        }
        dot.classList[method](className)
      }
    }
  },
  mounted () {
    this.start()
  }
}
