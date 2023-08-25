<template>
  <section>
    <div :class="$style.containerNews">
      <div v-for="item in news">
        <NewsItem :news="item" :class="$style.news" />
      </div>
    </div>
    <hr>
    <b-pagination
      :total="total"
      v-model="currentPage"
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
  props: ["news", "total", "current", "rangeBefore", "rangeAfter", "perPage"],
  data() {
    return {
      currentPage: this.current
    }
  },
  components: {
    NewsItem
  },
  methods: {
    changePage() {
      this.$store.dispatch('getNews', this.currentPage)
    }
  }
}
</script>

<style module>
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
