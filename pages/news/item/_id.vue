<template>
  <section :class="$style.container">
    <img :src=news.img alt="pic" />
    <div :class="$style.description">
      <h3>{{news.title}}</h3>
      <div>{{news.fullText}}</div>
    </div>
  </section>
</template>

<script>
  export default {
    async asyncData({ params, redirect }) {
      return {
        id: params.id,
        redirect: redirect
      }
    },
    computed: {
      news() {
        return this.$store.state.newsItem
      }
    },
    created() {
      this.$store.dispatch('getNewsId', this.id)
    }
  }
</script>

<style module>
  .container {
    box-sizing: border-box;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 35px;
    border: 1px solid #919191;
    border-radius: 20px;
    margin: auto;
    margin-top: 20px;
  }
  .description h3 {
    font-weight: bold;
  }
  .container img {

  }

  @media (min-width: 320px) and (max-width: 768px) {
    .container {
      box-sizing: border-box;
      width: 90%;
      display: flex;
      flex-direction: column;
      padding: 10px;
      gap: 20px;
      border: none;
    }
  }
</style>
