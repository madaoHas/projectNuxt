import axios from "axios";


const instance = axios.create({
  withCredentials: false,
  baseURL: process.env.baseUrl
})

export const NewsAPI = {
  getNewsOnPage(currentPage) {
    return instance.get(`/news/`+currentPage)
      .then(response => response.data)
  },
  getSelectedNews(id) {
    return instance.get(`/news/item/`+id)
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


