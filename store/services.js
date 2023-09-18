import {defineStore} from "pinia";

export const useServicesStore = defineStore({
  id: 'services-store',
  state: () => ({
    services: [
      {
        id: 1,
        heading: 'Платежная система Beepul',
        description: "Пополняйте свой мобильный счет через Beepul и получайте бонусы",
        colorCode: "rgba(247, 148, 29, 0.2)",
        buttonLabel: "Подробнее",
        imagePath: "/images/services1.png"
      },
      {
        id: 2,
        heading: 'Beeline TV',
        description: "Смотрите любимые фильмы, сериалы и ТВ каналы без расхода интернет-трафика!",
        colorCode: "rgba(248, 230, 77, 0.2)",
        buttonLabel: "Подробнее",
        imagePath: "/images/services2.png"
      },
      {
        id: 3,
        heading: 'Beeline Music & Radio',
        description: "Наслаждайтесь прослушиванием любимой музыки без расхода интернет-трафика!",
        colorCode: "rgba(239, 91, 161, 0.2)",
        buttonLabel: "Подробнее",
      },
      {
        id: 4,
        heading: 'Beeline VISA',
        description: "Beeline VISA — это карта без физического носителя, предназначенная для платежей в интернете.",
        colorCode: "rgba(95, 187, 70, 0.2)",
        buttonLabel: "Подробнее",
      },
      {
        id: 5,
        heading: 'Делитесь общением',
        description: "У близких закончились мегабайты? Поделитесь с ними своим интернет-трафиком, чтобы они всегда были онлайн.",
        colorCode: "rgba(75, 192, 177, 0.2)",
        buttonLabel: "Подробнее",
      },
      {
        id: 6,
        heading: 'Beeline Пресса',
        description: "Это значит, что при чтении новостей, журналов и статей через сервис у вас не расходуется интернет трафик!",
        colorCode: "rgba(105, 180, 246, 0.2)",
        buttonLabel: "Подробнее",
      },
    ]
  }),
  getters: {

  },
  actions: {

  },
})
