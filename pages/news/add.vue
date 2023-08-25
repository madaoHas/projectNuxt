<template>
  <section :class="$style.container">
    <h1>Новая статья</h1>
    <form id="form1" @submit.prevent="handleSubmit" enctype='multipart/form-data' method="POST" action="/static/img">
      <b-field label="Фото статьи *">
        <input ref="file" @change="changeImg()" type="file" name="img" required />
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
  </section>
</template>

<script>
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
    methods: {
      handleSubmit: function() {
        const formElement = document.getElementById('form1');
        const formData = new FormData(formElement);
        this.$store.dispatch('addNews', formData)
        this.$router.push('/')
      },
      changeImg: function () {
        this.form.img = this.$refs.file.files[0]
      }}
  }
</script>

<style module>
  .container {
    width: 70%;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .container h1 {
    font-weight: bold;
    font-size: xx-large;
    margin-bottom: 20px;
    text-align: center;
  }
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
  @media (min-width: 320px) and (max-width: 768px) {
    .container {
      width: 90%;
    }
  }
</style>
