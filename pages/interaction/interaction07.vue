<template>
  <div>
    <link rel="stylesheet" href="https://www.cssscript.com/demo/material-bottom-sheet/main.1f19ae8e.css">

    <button id="country-select-button">Open The Bottom Sheet</button>
    <!-- bottom sheet -->
    <div id="country-selector" class="c-bottom-sheet c-bottom-sheet--list">
      <div class="c-bottom-sheet__scrim"></div>
      <div class="c-bottom-sheet__sheet">

        <div class="c-bottom-sheet__handle"><span></span><span></span></div>

        <ul class="c-bottom-sheet__list">
          <li class="c-bottom-sheet__item active"><a class="c-bottom-sheet__link" href="/">JavaScript</a></li>
          <li class="c-bottom-sheet__item"><a class="c-bottom-sheet__link" href="">CSS/CSS3</a></li>
          <li class="c-bottom-sheet__item"><a class="c-bottom-sheet__link" href="">HTML5/XML</a></li>
          <li class="c-bottom-sheet__item"><a class="c-bottom-sheet__link" href="">Angular.js</a></li>
          <li class="c-bottom-sheet__item"><a class="c-bottom-sheet__link" href="">React.js</a></li>
        </ul>

      </div>
      <div class="c-bottom-sheet__container"></div>
    </div>

    <script src="https://www.cssscript.com/demo/material-bottom-sheet/main.1f19ae8e.js"></script>
  </div>
</template>

<script>
export default {
  name: 'Interaction07',
  layout: 'interaction',

  data () {
    return {
    }
  }
}
</script>
