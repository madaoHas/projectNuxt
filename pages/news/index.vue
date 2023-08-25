<template>
  <section class="section" :class="$style.container">
    <NuxtLink :to="`news/add`">
      <b-button type="is-primary">Добавить статью</b-button>
    </NuxtLink>
    <div :class="$style.containerNews">
      <div v-for="item in news">
        <NewsItem :news="item" :class="$style.news" />
      </div>
    </div>
    <hr>
    <b-pagination
      :total="total"
      v-model="current"
      @change="changePage"
      :range-before="rangeBefore"
      :range-after="rangeAfter"
      :per-page="perPage"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
      order="is-centered"
      >
    </b-pagination>
  </section>
</template>

<script>
import NewsItem from "~/components/NewsItem";

export default {
  name: 'HomePage',
   data() {
    return {
      current: 1,
      perPage: 6,
      rangeBefore: 2,
      rangeAfter: 2,
      prevIcon: 'chevron-left',
      nextIcon: 'chevron-right',
    }
  },
  components: {
    NewsItem
  },
  computed: {
    news () {
      return this.$store.state.news;
    },
    total() {
      return this.$store.state.total
    }
  },
  created() {
    this.$store.dispatch('getNews', this.current)
  },
  methods: {
    changePage() {
      this.$store.dispatch('getNews', this.current)
    }
  }
}

</script>

<style module>
  .container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .containerNews {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  .containerNews > div {
    width: 31%
  }
  .news {
    flex: 1 0 25%;
    border: 1px solid #D9D9D9;
    box-sizing: border-box;
    border-radius: 10px;
  }

  @media (min-width: 500px) and (max-width: 768px) {
    .containerNews > div {
      width: 45%
    }
  }

  @media (min-width: 320px) and (max-width: 500px) {
    .containerNews {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .containerNews > div {
      width: 100%
    }
    .news {
      width: 100%;
    }
  }
</style>
