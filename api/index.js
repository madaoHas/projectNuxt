import axios from "axios";

const instance = axios.create({
  withCredentials: false,
  baseURL: "http://localhost:3333/"
  // baseURL: process.env.NUXT_APP_URL_BASE
})

export const NewsAPI = {
  getNewsOnPage(currentPage = 1) {
    return instance.get(`/news:`+currentPage)
      .then(response => response.data)

  },
  getSelectedNews(id) {
    return instance.get(`/news/item/id:`+id)
      .then(response => response.data)
  },
  addNews(formData) {
    return instance.post(`/news/add`, formData, {
      headers: {
        'Content-Type': "multipart/form-data"
      }
    })
      .then(response => response.data)
  }
}


