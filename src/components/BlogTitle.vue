<template>
  <h1 class="title">{{ text }}</h1>
</template>

<script>
  export default {
    name: 'blog-title',
    props: {
      text: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .title {
    grid-column: span 4;
    grid-row: span 3;
    margin-top: 0;
    font-size: 55px;
    font-family: 'Playfair Display';

    @media all and (max-width: 650px) {
      font-size: 45px;
    }
  }
</style>


