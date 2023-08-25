import {NewsAPI} from "~/api";


export const state = () => ({
  news: [],
  newsItem: {},
  total: null
})

export const mutations = {
  getNews(state, news) {
    state.news = news
  },
  getNewsItem(state, newsItem) {
    state.newsItem = newsItem[0]
  },
  getTotal(state, total) {
    state.total = total
  }
}

export const actions = {
  async getNews({ commit }, currentPage) {
    try {
      let newNews = await NewsAPI.getNewsOnPage(currentPage)
      commit('getNews', newNews.news)
      commit('getTotal', newNews.total)
    } catch (error) {
      console.log(error)
    }
  },
  async getNewsId({commit}, id) {
    try {
      let newsItem = await NewsAPI.getSelectedNews(id)
      commit('getNewsItem', newsItem)
    } catch (error) {
      console.log(error)
    }
  },
  async addNews({commit}, formData) {
    try {
      await NewsAPI.addNews(formData)
    } catch (error) {
      console.log(error)
    }
  }
}

