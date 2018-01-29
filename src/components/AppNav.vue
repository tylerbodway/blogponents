<template>
  <nav class="nav">
    <div class="nav__container">
      <h1 class="nav__title">Blogponents</h1>
      <ul class="nav__list">
        <li class="nav__list-item has-dropdown">
          <a class="nav__link" href="#" @click.prevent>What is this?</a>
          <div class="nav__dropdown">
            <p>
              This project was my own experimentation while
              trying to learn both CSS Grid Layout, as well
              as setting up Vue.js projects
            </p>
            <p>
              My goal was to come up with repeatable
              componentized content blocks, that could be easily
              rendered based on external CMS content.
            </p>
            <p>
              A beautiful, modern blog layout, boiled down to it's
              essential blocks to help content
              writers add/update with as little settings as possible.
            </p>
            <p>
              The only two settings are: block type, and alignment.
              Vue will render the components and CSS Grid will put
              them all together.
            </p>
          </div>
        </li>
        <li class="nav__list-item">
          <a class="nav__link" href="#" @click="goToFooter">Credits</a>
        </li>
        <li class="nav__list-item">
          <a class="nav__link" href="https://github.com/tylerbodway/blogponents">Source</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  import Jump from 'jump.js'

  export default {
    name: 'app-nav',
    methods: {
      goToFooter() {
        Jump('.footer', { duration: 600 })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .nav {
    position: fixed;
    z-index: 100;
    width: 100%;
    background-color: rgba(255,255,255,0.97);
    border-bottom: 1px solid rgba(0,0,0,0.05);

    @media all and (max-width: 520px) {
      position: relative;
      text-align: center;
    }

    &__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1000px;
      margin: 0 auto;
      padding: 0.5rem 0;

      @media all and (max-width: 520px) {
        display: block;
      }
    }

    &__title {
      margin: 0;
      font-family: 'Playfair Display';
      font-size: 20px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 2px;

      @media all and (max-width: 520px) {
        margin: 1rem 0;
      }
    }

    &__list {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }

    &__list-item {
      position: relative;
      display: inline-block;
      color: #666;
      padding: 1rem;

      @media all and (max-width: 520px) {
        display: block;
      }

      &:not(:first-child)::before {
        content: "•";
        position: absolute;
        top: 38%;
        left: -5px;
        font-size: 60%;
        line-height: 1;
        opacity: 0.4;

        @media all and (max-width: 520px) {
          display: none;
        }
      }
    }

    &__link {
      color: #666;
      text-decoration: none;
    }

    &__dropdown {
      position: absolute;
      z-index: 101;
      top: 90%;
      left: 50%;
      display: none;
      width: 70vw;
      max-width: 400px;
      padding: 1.5rem 2rem;
      background: white;
      text-align: left;
      border: 1px solid rgba(0,0,0,0.2);
      box-shadow: 0px 4px 8px rgba(0,0,0,0.2);
      transform-origin: center;
      transform: translateX(-50%);


      p {
        margin: 0 0 1rem;
        line-height: 1.4;

        &:last-child { margin-bottom: 0; }
      }
    }

    .has-dropdown:hover .nav__dropdown,
    .nav__dropdown:hover {
      display: block;
    }
  }
</style>


