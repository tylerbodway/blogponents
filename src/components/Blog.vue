<template>
  <article class="blog">
    <blog-title :text="blogTitle"></blog-title>
    <template v-for="(block, index) in contentBlocks">
      <component :is="block.type" :alignment="block.alignment" :image="block.image" :alt="block.alt" :key="index"></component>
    </template>
    <add-block-bar @submitted="addBlockPlease"></add-block-bar>
  </article>
</template>

<script>
  import BlogTitle from './BlogTitle'
  import BlogText from './BlogText'
  import BlogQuote from './BlogQuote'
  import BlogImage from './BlogImage'
  import AddBlockBar from './AddBlockBar'
  import Jump from 'jump.js'

  export default {
    name: 'blog',
    components: {
      BlogTitle,
      BlogText,
      BlogQuote,
      BlogImage,
      AddBlockBar
    },
    data() {
      return {
        blogTitle: "One amazing blog title.",
        contentBlocks: [
          { type: 'blog-text', alignment: 'right' },
          { type: 'blog-quote', alignment: 'left', image: 'https://source.unsplash.com/random/340x350', alt: "" },
          { type: 'blog-text', alignment: 'left' },
          { type: 'blog-image', alignment: 'right', image: 'https://source.unsplash.com/random/400x320', alt: "" }
        ]
      }
    },
    methods: {
      addBlockPlease(type, alignment) {
        let newBlock = {
          type: type,
          alignment: alignment
        }
        if (type === "blog-quote") {
          newBlock.image = 'https://source.unsplash.com/random/340x350'
          newBlock.alt = ''
        }
        if (type === "blog-image") {
          newBlock.image = 'https://source.unsplash.com/random/400x320'
          newBlock.alt = ''
        }
        this.contentBlocks.push(newBlock)

        Jump('.js-add-block', { offset: 0, duration: 500 })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .blog {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-flow: dense;
    max-width: 1000px;
    margin: 0 auto;
    padding: 8rem 30px 2rem;

    @media all and (max-width: 650px) {
      display: block;
    }

    @media all and (max-width: 520px) {
      padding-top: 2rem;
    }
  }
</style>


