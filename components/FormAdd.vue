<template>
  <form id="form1" @submit.prevent="handleSubmit" enctype='multipart/form-data' method="POST">
    <b-field label="Фото статьи *">
      <input ref="file" type="file" name="img" required />
    </b-field>
    <b-field label="Заголовок *">
      <b-input v-model="form.title" type="text" name="title" required></b-input>
    </b-field>

    <b-field label="Описание статьи *">
      <b-input maxlength="200" type="textarea" v-model="form.text" name="text" required></b-input>
    </b-field>
    <b-field label="Статья *">
      <b-input maxlength="500" type="textarea" v-model="form.fullText" name="fullText" required></b-input>
    </b-field>
    <b-field>
      <button type="submit" :class="$style.button">
        Добавить статью
      </button>
    </b-field>
  </form>
</template>
<script>
export default {
  props: ["title", "text", "fullText", "img"],
  data() {
    return {
      form: {
        title: this.title,
        text: this.text,
        fullText: this.fullText,
        img: this.img
      }
    }
  },
  methods: {
    handleSubmit: function() {
      const formElement = document.getElementById('form1');
      const formData = new FormData(formElement);
      this.$store.dispatch('addNews', formData)
      this.$router.push('/')
    }
  }
}
</script>

<style module>
  .button {
    width: 150px !important;
    border-radius: 5px;
    background-color: #7957d5 !important;
    border: none;
    color: white !important;
    padding: 10px !important;
    text-align: center;
    text-decoration: none;
    display: flex;
    justify-content: center;
    height: 44px;
    font-size: 14px;
    align-items: center;
  }
</style>
