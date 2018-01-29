<template>
  <div id="app">
    <app-nav></app-nav>
    <blog></blog>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppNav from './AppNav'
import AppFooter from './AppFooter'
import Blog from './Blog'

export default {
  name: 'app',
  components: { AppNav, Blog, AppFooter }
}
</script>
