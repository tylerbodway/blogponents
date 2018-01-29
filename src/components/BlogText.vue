<template>
  <div class="text-block" :class="alignment">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget arcu ornare, sagittis massa et, vulputate diam. Etiam eleifend, arcu eu consequat tempor, sem lorem iaculis nunc, eget elementum sem arcu non felis. In nunc erat, blandit eu nisl et, scelerisque viverra metus. Suspendisse potenti. Phasellus id nulla justo. Cras lobortis id est at congue. Nunc interdum ipsum et nibh mollis, vel interdum velit ornare.
    </p>
    <p>
      Cras at ante non nunc scelerisque tristique sed sed sapien. Sed non luctus neque. Aenean hendrerit ligula in nulla elementum, nec auctor tortor mattis. Cras justo dui, sagittis sit amet risus at, pulvinar consequat massa. Morbi sagittis eleifend vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget dictum magna. In luctus ipsum nisl, at consequat purus iaculis consectetur. Phasellus rutrum augue mauris, quis varius felis tincidunt nec.
    </p>
  </div>
</template>

<script>
  import { alignmentProp } from './mixins/blogContentBlock'

  export default {
    name: 'blog-text',
    mixins: [ alignmentProp ]
  }
</script>

<style lang="scss" scoped>
  .text-block {

    &.right {
      grid-column: span 7 / -1;
      grid-row: span 3;
    }

    &.left {
      grid-column: span 6;
      grid-row: span 3;
    }

    p {
      font-size: 16px;
      color: #666;
      line-height: 1.5;
      margin: 1rem 0 2rem;
    }
  }
</style>


