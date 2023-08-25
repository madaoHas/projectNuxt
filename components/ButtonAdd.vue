<template>
  <NuxtLink :to="`/add`" :class="$style.button">
    <b-button type="is-primary">Добавить статью</b-button>
  </NuxtLink>
</template>

<script>
export default {

}
</script>

<style module>
  .button {
    width: 200px;
  }
</style>
