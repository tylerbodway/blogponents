<template>
  <img class="image" :class="alignment" :src="image" :alt="alt">
</template>

<script>
  import { alignmentProp, imageProps } from './mixins/blogContentBlock.js'

  export default {
    name: 'blog-image',
    mixins: [ alignmentProp, imageProps ]
  }
</script>

<style lang="scss" scoped>
  .image {
    width: 100%;
    grid-row: span 3;

    &.left {
      grid-column: 1 / span 5;
    }

    &.right {
      grid-column: span 5 / -1;
    }
  }
</style>


