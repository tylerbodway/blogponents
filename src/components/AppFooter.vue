<template>
  <footer class="footer">
    <p>
      Made with <i class="far fa-heart"></i> by
      <a href="https://github.com/tylerbodway">@tylerbodway</a>.
      Thanks for the inspiration
      <a href="https://github.com/devanflaherty">@devanflaherty</a>.
    </p>
  </footer>
</template>

<script>
  export default {
    name: 'app-footer'
  }
</script>

<style lang="scss" scoped>
  .footer {
    padding: 3rem 30px;
    background-color: #f7f7f7;
    text-align: center;

    p {
      color: #999;
      line-height: 1.5;
    }

    a {
      color: inherit;
      font-weight: bolder;
      text-decoration: none;

      &:hover {
        border-bottom: 1px solid rgba(0,0,0,0.3);
      }
    }
  }
</style>


