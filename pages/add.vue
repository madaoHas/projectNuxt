<template>
  <section :class="$style.container">
    <h1>Новая статья</h1>
    <FormAdd
      :title="form.title"
      :text="form.text"
      :full-text="form.fullText"
      :img="form.img"
    />
  </section>
</template>

<script>
import FormAdd from "~/components/FormAdd";
  export default {
    name: 'NewsAddForm',
    data() {
      return {
        form: {
          title: "",
          img: '',
          text: "",
          fullText: "",
        },
      };
    },
    components: {
      FormAdd
    },
  }
</script>

<style module>
  .container {
    width: 70%;
    margin: 20px auto;
  }
  .container h1 {
    font-weight: bold;
    font-size: xx-large;
    margin-bottom: 20px;
    text-align: center;
  }
  @media (min-width: 320px) and (max-width: 768px) {
    .container {
      width: 90%;
    }
  }
</style>
