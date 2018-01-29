<template>
  <div class="add-block js-add-block">
    <div class="add-block__select">
      <select class="add-block__input" v-model="blockType" required>
        <option disabled selected value="">Type of Block</option>
        <option value="blog-text">Text Block</option>
        <option value="blog-quote">Quote Block</option>
        <option value="blog-image">Image Block</option>
      </select>
    </div>

    <div class="add-block__select">
      <select class="add-block__input" v-model="alignment" required>
        <option disabled selected value="">Alignment</option>
        <option value="left">Left</option>
        <option value="right">Right</option>
      </select>
    </div>

    <button class="add-block__button" @click="addBlock">
      Add
    </button>

    <div>
      <span class="hint">Staggering left and right alignment looks best :)</span>
    </div>

    <div>
      <a class="back-to-top" @click="backToTop" href="#">
        Back to Top <i class="fas fa-angle-up"></i>
      </a>
    </div>
  </div>
</template>

<script>
  import Jump from 'jump.js'

  export default {
    name: 'add-block-bar',
    data() {
      return {
        blockType: "",
        alignment: ""
      }
    },
    methods: {
      addBlock() {
        this.$emit('submitted', this.blockType, this.alignment)
      },
      backToTop() {
        Jump('#app', { duration: 600 })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .add-block {
    grid-column: 1 / -1;
    padding: 2rem 0;
    border-top: 2px dashed rgba(0,0,0,0.08);
    text-align: center;

    @media all and (max-width: 650px) {
      margin-top: 2rem;
    }

    &__select {
      position: relative;
      display: inline-block;

      &::before {
        content: "\25bc";
        position: absolute;
        z-index: 10;
        top: 50%;
        right: 15px;
        font-size: 10px;
        transform: translateY(-45%);
        color: #dadada;
      }
    }

    &__input {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      padding: 1rem 3rem 1rem 1rem;
      border: 0;
      background: #f5f5f5;
      color: #555;
      box-shadow: 0 3px rgba(0,0,0,0.1);
      cursor: pointer;
      transition: background 0.1s ease-in;

      &:hover {
        background: #f2f2f2;
      }
    }

    &__button {
      padding: 1rem 2rem;
      margin-left: 2rem;
      background: #8cdc96;
      color: white;
      border: 0;
      font-weight: bolder;
      border-radius: 4px;
      text-shadow: 0px 1px rgba(0,0,0,0.02);
      box-shadow: 0 3px #72b179;
      cursor: pointer;
      transition: all 0.1s ease-in;

      &:hover {
        transform: scale(0.95);
        background: #82cc8b
      }
    }

    @media all and (max-width: 650px) {
      &__select, &__input, &__button {
        display: block;
        width: 100%;
        margin: 1rem auto;
      }
    }
  }

  .hint {
    display: block;
    margin-top: 2rem;
    font-size: 80%;
    color: #c7c7c7;
  }

  .back-to-top {
    display: block;
    margin-top: 2rem;
    padding-top: 3rem;
    color: #999;
    font-weight: 600;
    border-top: 2px dashed rgba(0,0,0,0.08);
    text-decoration: none;
  }
</style>


