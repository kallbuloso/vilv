import { defineStore } from 'pinia'

export const useThemeStore = defineStore('themeStore', {
  state: () => ({
    darkMode: false
  }),
  actions: {
    toggleTheme() {
      this.darkMode = !this.darkMode
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'themeStore',
        storage: localStorage
      }
    ]
  }
})
