<template>
  <section :class="$style.news">
    <img alt="pic" :src=news.img>
    <div :class="$style.description">
      <h3>{{news.title}}</h3>
      <div>{{news.text}}</div>
    </div>
    <div :class="$style.linkNews">
      <NuxtLink :to="`news/item/${news.id}`">
        <b-button type="is-primary" expanded>Подробнее</b-button>
      </NuxtLink>
    </div>
  </section>
</template>

<script>
  export default {
    props: ["news"]
  }
</script>

<style module>
  .news {
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0;
    clip-path: inset( 0 0 0 round 10px);
  }
  .news img {
    height: 200px;
  }
  .description {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .description h3 {
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .description div {
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .linkNews {
      height: 40px;
  }

</style>
