<template>
  <div class="quote" :class="[alignment, { 'w-image': image }]">
    <img v-if="image" class="quote__image" :src="image" :alt="alt">
    <span class="quote__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget arcu ornare, sagittis massa et, vulputate diam.</span>
  </div>
</template>

<script>
  import { alignmentProp, imageProps } from './mixins/blogContentBlock'

  export default {
    name: 'blog-quote-image',
    mixins: [ alignmentProp, imageProps ]
  }
</script>

<style lang="scss" scoped>
  .quote {
    position: relative;
    grid-column: 2 / -2;
    margin-bottom: 3rem;
    padding: 3rem 0;

    @media all and (max-width: 650px) {
      padding: 1rem 0;
    }

    &__text {
      font-size: 40px;
      line-height: 1;
      font-weight: bold;
      text-align: center;

      @media all and (max-width: 650px) {
        font-size: 30px;
        line-height: 1.2;
      }
    }

    &__image {
      position: absolute;
      z-index: -1;
      bottom: 0;
      width: 40%;
      opacity: 0.2;

      @media all and (max-width: 650px) {
        display: none;
      }
    }

    &.left {
      .quote__image {
        left: -10%;
      }
    }

    &.right {
      text-align: right;

      .quote__image {
        right: -10%;
      }
    }
  }
</style>


