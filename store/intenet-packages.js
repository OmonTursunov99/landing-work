import { defineStore } from "pinia";

export const useInternetPackagesStore = defineStore({
  id: 'internet-packages-store',
  state: () => ({
    internetPackages: [
      { id: 1, type: "Интернет-пакет", mb: "7 GB", limit: 7, price: 25000 },
      { id: 2, type: "Интернет-пакет", mb: "3 GB", limit: 7, price: 17000 },
      { id: 3, type: "Интернет-пакет", mb: "1.5 GB", limit: 7, price: 10000 },
      { id: 4, type: "Интернет-пакет", mb: "7 GB", limit: 7, price: 25000 },
      { id: 5, type: "Интернет-пакет", mb: "3 GB", limit: 7, price: 17000 },
      { id: 6, type: "Интернет-пакет", mb: "1.5 GB", limit: 7, price: 10000 },
    ]
  }),
  getters: {},
  actions: {}
})
