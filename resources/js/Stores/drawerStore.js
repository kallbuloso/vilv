import { defineStore } from 'pinia'

export const useDrawerStore = defineStore('drawerStore', {
  state: () => ({
    _isOpen: true // default value
  }),
  getters: {
    isOpen: (state) => state._isOpen
  },
  actions: {
    toggleDrawer() {
      this._isOpen = !this._isOpen
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'drawerStore',
        storage: localStorage
      }
    ]
  }
})
