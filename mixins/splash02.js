export default {
  methods: {
    start () {
      const splash = document.querySelector('.splash')
      const header = document.querySelector('.header')

      setTimeout(() => {
        splash.classList.add('display-none')
      }, 2000)

      window.onscroll = function () {
        const top = window.scrollY
        console.log(top)
        if (top >= 50) {
          header.classList.add('active')
        } else {
          header.classList.remove('active')
        }
      }
    }
  }
}
