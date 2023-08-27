import axios from "axios";


const instance = axios.create({
  withCredentials: false,
  baseURL: process.env.baseUrl
})

export const NewsAPI = {
  getNewsOnPage(currentPage) {
    return instance.get(`/:`+currentPage)
      .then(response => response.data)
  },
  getSelectedNews(id) {
    return instance.get(`/item/id:`+id)
      .then(response => response.data)
  },
  addNews(formData) {
    return instance.post(`/add`, formData, {
      headers: {
        'Content-Type': "multipart/form-data"
      }
    })
      .then(response => response.data)
  }
}


