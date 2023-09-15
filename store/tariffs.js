import { defineStore } from "pinia";

export const useTariffsStore = defineStore({
  id: "tariff-store",
  state: () => ({
    populars: [
      {
        id: 1,
        price: 45000,
        colorCode: '#FFF200',
        name: "Hammasi ZOR2",
        content: [
          {
            type: "call",
            msg: "Безлимитные звонки по Узбекистану"
          },
          {
            type: "internet",
            msg: "6 GB на все",
          },
          {
            type: "night",
            msg: "18 GB ночной бонус (01:00-08:00)",
          },
          {
            type: "sms",
            msg: "500 SMS по Узбекистану",
          },
          {
            type: "tv",
            msg: "Beeline TV: Телеканалы, IVI и Amediateka"
          }
        ]
      },
      {
        id: 2,
        price: 25000,
        colorCode: '#4BC0B1',
        name: "Hammasi ZOR2",
        content: [
          {
            type: "call",
            msg: "Безлимитные звонки по Узбекистану"
          },
          {
            type: "internet",
            msg: "6 GB на все",
          },
          {
            type: "night",
            msg: "18 GB ночной бонус (01:00-08:00)",
          },
          {
            type: "sms",
            msg: "500 SMS по Узбекистану",
          },
        ]
      },
      {
        id: 3,
        price: 55000,
        colorCode: '#4BC0B1',
        name: "Hammasi ZOR2",
        content: [
          {
            type: "call",
            msg: "Безлимитные звонки по Узбекистану"
          },
          {
            type: "internet",
            msg: "6 GB на все",
          },
          {
            type: "night",
            msg: "18 GB ночной бонус (01:00-08:00)",
          },
          {
            type: "sms",
            msg: "500 SMS по Узбекистану",
          },
          {
            type: "tv",
            msg: "Beeline TV: Телеканалы, IVI и Amediateka"
          },
          {
            type: "wallet",
            msg: "До 800 000 сум - 0% переводы через Beepul",
          }
        ]
      }
    ]
  }),
  getters: {

  },
  actions: {

  }
})
