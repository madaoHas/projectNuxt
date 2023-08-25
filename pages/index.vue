<template>
  <section class="section" :class="$style.container">
    <ButtonAdd />
    <NewsList
      :news="news"
      :total="total"
      :current="current"
      :rangeBefore="rangeBefore"
      :rangeAfter="rangeAfter"
      :perPage="perPage"
    />
  </section>
</template>

<script>
import ButtonAdd from "~/components/ButtonAdd";
import NewsList from "~/components/NewsList";

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
    ButtonAdd,
    NewsList
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
}

</script>

<style module>
  .container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
</style>
