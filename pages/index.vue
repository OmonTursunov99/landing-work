<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay, Pagination, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import svgArrowLeft from "@/public/svg/arrow-left.svg?component";
import svgArrowRight from "@/public/svg/arrow-right.svg?component"
import { useInternetPackagesStore } from "~/store/intenet-packages";
import { useTariffsStore } from "~/store/tariffs";
import Flicking from "@egjs/vue3-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";
import { vMaska } from "maska";
import { useServicesStore } from "@/store/services";

const pluginsSlideContent = [ new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: true }) ];

export default {
  name: "page-home",
  components: {
    Swiper,
    SwiperSlide,
    svgArrowLeft,
    svgArrowRight,
    Flicking: Flicking,
  },
  data() {
    return {
      internetPackagesStore: useInternetPackagesStore(),
      tariffsStore: useTariffsStore(),
      servicesStore: useServicesStore(),
      swiperInfoOptions: {
        autoplay: { delay: 1000, disableOnInteraction: false, pauseOnMouseEnter: true },
        slidesPerView: 7,
        spaceBetween: 16,
        loop: true,
        freeMode: true,
        modules: [ FreeMode, Autoplay ],
      },
      swiperIntroOptions: {
        class: [ 'page-home-intro-swiper' ],
        loop: true,
        modules: [ Navigation, Autoplay ],
        autoplay: { delay: 10000, disableOnInteraction: false },
        pagination: { clickable: true },
      },
      mapInternetPackage: [
        { key: 'internet_packages', label: this.$t("internet_packages") },
        { key: 'roaming_packages', label: this.$t("roaming_packages") },
        { key: 'juma_offers', label: this.$t("juma_offers") },
      ],
      mapTariff: [
        { key: 'popular', label: this.$t("popular") },
        { key: 'for_communication', label: this.$t("for_communication") },
        { key: 'for_internet', label: this.$t("for_internet") },
        { key: 'for_traveling', label: this.$t("for_traveling") },
        { key: 'all_in-one', label: this.$t("all_in_one") },
      ],
      catalogValue: 'tariff', // internet_packages | tariff
      internetPackageValue: 'internet_packages',
      tariffValue: 'popular',
      mapTextSlides: [
        this.$t("beeline_tv"),
        this.$t("beeline_visa"),
        this.$t("beepul"),
        this.$t("sim_card_delivery"),
        this.$t("router"),
        this.$t("beeline_tv"),
        this.$t("beeline_visa"),
      ],
      mapContent: [
        {
          heading: "Зона покрытия и офисы",
          description: "Ознакомьтесь с адресами офисов и картой покрытия",
          imagePath: "/images/office-zone.png",
          style: {
            '--content-card-description-space': 'auto',
            '--content-card-min-height': '273px',
            '--content-card-color': 'var(--clr-white)',
          }
        },
        {
          loopText: "Пополнить баланс",
          imagePath: "/images/replenish-balance.png",
          style: {
            '--content-card-min-height': '227px',
          }
        },
        {
          heading: "Подобрать номер",
          description: "Предлагаем вам быстро и удобно подобрать красивый номер.",
          style: {
            '--content-card-background': `rgba(var(--clr-primary-rgb), 0.2)`,
            '--content-card-description-space': '36px',
          }
        },
        {
          heading: "Конструк-тор тарифов",
          description: "Теперь ты решаешь, каким будет твой тариф!",
          style: {
            '--content-card-background': `rgba(var(--clr-pik-rgb), 0.2)`,
            '--content-card-description-space': '80px',
          }
        },
        {
          loopText: "Замена сим карты",
          imagePath: "/images/replacing-sim-card.png",
          style: {
            '--content-card-min-height': '247px',
            '--content-card-background': `rgba(var(--clr-green-rgb), 0.2)`,
          }
        },
        {
          heading: "eSIM",
          description: "Подключите услугу «eSIM» бесплатно!",
          style: {
            '--content-card-background': `rgba(var(--clr-blue-rgb), 0.2)`,
            '--content-card-description-space': '58px',
          }
        },
        {
          heading: "Зона покрытия и офисы",
          description: "Ознакомьтесь с адресами офисов и картой покрытия",
          imagePath: "/images/office-zone.png",
          style: {
            '--content-card-description-space': 'auto',
            '--content-card-min-height': '273px',
            '--content-card-color': 'var(--clr-white)',
          }
        },
        {
          loopText: "Пополнить баланс",
          imagePath: "/images/replenish-balance.png",
          style: {
            '--content-card-min-height': '227px',
          }
        },
        {
          heading: "Подобрать номер",
          description: "Предлагаем вам быстро и удобно подобрать красивый номер.",
          style: {
            '--content-card-background': `rgba(var(--clr-primary-rgb), 0.2)`,
            '--content-card-description-space': '36px',
          }
        },
        {
          heading: "Конструк-тор тарифов",
          description: "Теперь ты решаешь, каким будет твой тариф!",
          style: {
            '--content-card-background': `rgba(var(--clr-pik-rgb), 0.2)`,
            '--content-card-description-space': '80px',
          }
        },
        {
          loopText: "Замена сим карты",
          imagePath: "/images/replacing-sim-card.png",
          style: {
            '--content-card-min-height': '247px',
            '--content-card-background': `rgba(var(--clr-green-rgb), 0.2)`,
          }
        },
        {
          heading: "eSIM",
          description: "Подключите услугу «eSIM» бесплатно!",
          style: {
            '--content-card-background': `rgba(var(--clr-blue-rgb), 0.2)`,
            '--content-card-description-space': '58px',
          }
        },
      ],
      pluginsSlideContent,
      optionsSlideContent: {
        circular: true,
        renderOnlyVisible: true
      },
      mapServices: [
        { key: "popular_service", label: this.$t("popular_service") },
        { key: "digital", label: this.$t("digital") },
        { key: "popular_service", label: this.$t("popular_service") },
        { key: "digital", label: this.$t("digital") },
        { key: "popular_service", label: this.$t("popular_service") },
        { key: "digital", label: this.$t("digital") },
        { key: "popular_service", label: this.$t("popular_service") },
        { key: "digital", label: this.$t("digital") },
        { key: "popular_service", label: this.$t("popular_service") },
        { key: "digital", label: this.$t("digital") },
        { key: "popular_service", label: this.$t("popular_service") },
        { key: "digital", label: this.$t("digital") },
      ],
      servicesValue: 'popular_service'
    };
  },
  methods: {
    changeCatalogValue(key) {
      this.catalogValue = key;
    },
    changeInternetPackageValue(key) {
      this.internetPackageValue = key;
    },
    changeTariffValue(key) {
      this.tariffValue = key;
    },
  },
  computed: {
    catalogButtonLabel() {
      return `${ this.$t("all") } ${ this.$t(this.catalogValue).toString().toLowerCase() }`;
    }
  }
}
</script>

<template>
  <div class="page-home">
    <div class="page-home-intro">
      <button class="page-home-intro-action is-prev" type="button">
        <svg-arrow-left/>
      </button>
      <button class="page-home-intro-action is-next" type="button">
        <svg-arrow-left/>
      </button>
      <swiper v-bind="swiperIntroOptions">
        <swiper-slide v-for="count in 3" :key="count">
          <div class="page-home-intro-swiper-content">
            <video class="page-home-intro-swiper-video" :src="`/public/videos/slide-${count}.mp4`" autoplay loop/>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="page-home-info">
      <flicking class="page-home-info-slider" :options="optionsSlideContent" :plugins="pluginsSlideContent">
        <div v-for="(content, index) in mapContent" :key="index" style="width: 200px">
          <common-card-content v-bind="content" transparent-background/>
        </div>
      </flicking>
    </div>
    <div class="page-home-catalog">
      <div class="page-home-catalog-head">
        <div class="container">
          <div class="flex-side column gap-2xl">
            <div class="flex-side gap-md">
              <button
                class="page-home-catalog-head-action heading-4"
                type="button"
                :class="{'is-active': catalogValue === 'tariff'}"
                @click="changeCatalogValue('tariff')"
              >
                Тарифы
              </button>
              <span class="heading-4">и</span>
              <button
                class="page-home-catalog-head-action heading-4"
                type="button"
                :class="{'is-active': catalogValue === 'internet_packages'}"
                @click="changeCatalogValue('internet_packages')"
              >
                интернет-пакеты
              </button>
            </div>
            <div class="flex-side gap-md">
              <template v-if="catalogValue === 'tariff'">
                <common-chips
                  v-for="chips in mapTariff"
                  :key="chips.key"
                  :label="chips.label"
                  :active="chips.key === tariffValue"
                  @click="changeTariffValue(chips.key)"
                />
              </template>
              <template v-if="catalogValue === 'internet_packages'">
                <common-chips
                  v-for="chips in mapInternetPackage"
                  :key="chips.key"
                  :label="chips.label"
                  :active="chips.key === internetPackageValue"
                  @click="changeInternetPackageValue(chips.key)"
                />
              </template>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="page-home-catalog-items flex-side column gap-3xl">
          <TransitionGroup>
            <div v-if="catalogValue === 'tariff'" class="page-home-catalog-items-grid">
              <common-card-tariff v-for="item in tariffsStore.$state.populars" :key="item.id" :data="item"/>
            </div>
            <div v-if="catalogValue === 'internet_packages'" class="page-home-catalog-items-grid">
              <common-card-package v-for="item in internetPackagesStore.$state.internetPackages" :key="item.id"
                :data="item"/>
            </div>
          </TransitionGroup>
          <div class="flex-side justify-between w-full">
            <common-custom-button
              :label="catalogButtonLabel"
              size="large"
              fill="outline"
            />
            <common-pagination/>
            <div class="flex-side gap-xs">
              <button class="page-home-catalog-items-action" type="button">
                <svg-arrow-left/>
              </button>
              <button class="page-home-catalog-items-action" type="button">
                <svg-arrow-right/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-home-text-slide flex-side column gap-md">
      <div class="page-home-text-slide-wrapper no-scroll flex-side gap-2xl">
        <template v-for="text in mapTextSlides" :key="text">
          <p class="heading-1">{{ text }}</p>
          <div class="page-home-text-slide-wrapper-dod"/>
        </template>
      </div>
      <div class="page-home-text-slide-wrapper no-scroll flex-side gap-2xl">
        <template v-for="text in mapTextSlides" :key="text">
          <p class="heading-1">{{ text }}</p>
          <div class="page-home-text-slide-wrapper-dod"/>
        </template>
      </div>
    </div>
    <div class="container">
      <div class="grid column-2 gap-xl">
        <div class="page-home-create-tariff flex-side column">
          <strong
            class="page-home-create-tariff-heading heading-4">{{ $t("do_not_know_which_tariff_to_choose") }}</strong>
          <p
            class="page-home-create-tariff-title heading-6">{{ $t("we_will_ask_you_only_questions", { count: 4 }) }}</p>
          <em class="page-home-create-tariff-description text-sm">{{ $t("create_tariff_description") }}</em>
          <common-custom-button :label="$t('choose_a_suitable_tariff')" fill="secondary"/>
          <img class="page-home-create-tariff-image" src="/svg/create-tariff.svg" alt=""/>
        </div>
        <form class="page-home-up-balance-online flex-side column gap-md">
          <img class="page-home-up-balance-online-image" src="/svg/online-pay.svg" alt=""/>
          <strong class="page-home-up-balance-online-heading heading-5">{{ $t("up_balance_online") }}</strong>
          <div class="page-home-up-balance-online-control">
            <label class="page-home-up-balance-online-control-label text-base">+998</label>
            <input
              class="page-home-up-balance-online-control-input text-base"
              type="text"
              :placeholder="$t('phone_number')"
              v-maska
              data-maska="#-#"
              required
            />
          </div>
          <div class="page-home-up-balance-online-control">
            <input
              class="page-home-up-balance-online-control-input is-right text-base"
              :placeholder="$t('summa')"
              required
              type="text"
            />
            <label class="page-home-up-balance-online-control-label is-right text-base">{{ $t("sum") }}</label>
          </div>
          <div class="flex-side gap-2xl mt-auto">
            <common-custom-button :label="$t('top_up')" type="submit"/>
            <div class="flex-side gap-2xs">
              <img src="/svg/card/uzcard.svg" alt=""/>
              <img src="/svg/card/humo.svg" alt=""/>
              <img src="/svg/card/visa.svg" alt=""/>
              <img src="/svg/card/mastercard.svg" alt=""/>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="container">
      <div class="page-home-folk-services">
        <button
          class="page-home-folk-services-action heading-4 flex-side gap-2xs"
          type="button"
        >
          {{ $t("fold_services") }}
          <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L9 9L2 16" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div class="page-home-folk-services-chips no-scroll flex-side gap-md">
          <common-chips
            v-for="chips in mapServices"
            :key="chips.key"
            :label="$t(chips.label)"
            :active="servicesValue === chips.key"
          />
        </div>
        <div class="page-home-folk-services-grid">
          <common-card-content
            v-for="service in servicesStore.$state.services"
            :key="service.id"
            :heading="service.heading"
            :button-label="service.buttonLabel"
            :description="service.description"
            :image-path="service.imagePath"
            :style="{
               '--content-card-background': service.colorCode,
               '--content-padding': '32px'
            }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/mixins";

.page-home {
  .page-home-intro {
    height: auto;
    position: relative;

    .page-home-intro-action {
      @include btnDefault;

      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background-color: var(--clr-black);
      padding: 18px 16px;
      z-index: 9;

      &.is-prev {
        left: 46px;
      }

      &.is-next {
        right: 46px;

        svg {
          transform: rotate(180deg);
        }
      }

      svg {
        path {
          stroke: var(--clr-arrow-icon);
        }
      }
    }

    .page-home-intro-swiper {
      .swiper-slide {
        .page-home-intro-swiper-content {
          position: relative;
          width: 100%;
          height: calc(100dvh - 94px);
          max-height: 682px;

          &:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: transparent;
          }

          .page-home-intro-swiper-video {
            width: 100%;
          }
        }
      }

      .swiper-button-prev,
      .swiper-button-next {
        display: none;
      }

      .swiper-pagination-bullet {
        width: 81px;
        height: 4px;
        background-color: var(--clr-black);
        border-radius: 0;
        opacity: 1;

        &.swiper-pagination-bullet-active {
          //background-color: var(--clr-primary);
          position: relative;

          &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            background-color: var(--clr-primary);
            height: 4px;
            animation: bulletActive linear 11s infinite;
            transition: var(--transition);
          }

          @keyframes bulletActive {
            0% {
              width: 0;
            }
            100% {
              width: 100%;
            }
          }
        }
      }
    }
  }

  .page-home-info {
    padding: 16px 0 39px;

    .page-home-info-slider {
      .flicking-camera {
        display: flex;
        align-items: flex-start;
        gap: 16px;
      }
    }
  }

  .page-home-catalog {
    background-color: var(--clr-gray-2);

    .page-home-catalog-head {
      background-color: var(--clr-gray-1);
      padding: 26px 0 24px;
      border-top: 2px solid var(--clr-black);

      .page-home-catalog-head-action {
        @include btnDefault;
        padding: 16px;
        text-decoration: dashed underline;
        transition: var(--transition);

        &.is-active {
          background-color: var(--clr-black);
          color: var(--clr-white);
          text-decoration: none;
        }
      }
    }

    .page-home-catalog-items {
      padding: 32px 0;

      .page-home-catalog-items-grid {
        width: 100%;
        display: grid;
        gap: 20px;
        grid-template-columns: repeat(3, 1fr);
      }

      .page-home-catalog-items-action {
        @include btnDefault;
        min-width: 56px;
        height: 56px;
        border: 1px solid var(--clr-black);
        transition: var(--transition);

        svg {
          path {
            transition: var(--transition);
            stroke: var(--clr-black);
          }
        }

        &:hover {
          background-color: var(--clr-black);

          svg {
            path {
              stroke: var(--clr-white);
            }
          }
        }

        &:active {
          background-color: transparent;
          border-color: rgba(var(--clr-black-rgb), 0.5);

          svg {
            path {
              stroke: rgba(var(--clr-black-rgb), 0.5);
            }
          }
        }
      }
    }
  }

  .page-home-text-slide {
    padding: 48px 0;

    .page-home-text-slide-wrapper {
      overflow-x: auto;
      width: 100vw;

      p {
        color: rgba(var(--clr-black-rgb), 0.3);
        white-space: nowrap;
      }

      .page-home-text-slide-wrapper-dod {
        min-width: 13px;
        height: 13px;
        border-radius: 50%;
        background-color: var(--clr-black);
      }
    }
  }

  .page-home-create-tariff {
    padding: 32px;
    background-color: var(--clr-gray-2);
    position: relative;

    .page-home-create-tariff-heading {
      color: var(--clr-black);
    }

    .page-home-create-tariff-title {
      max-width: 344px;
      margin-bottom: 10px;
      margin-top: 24px;
      color: var(--clr-black);
    }

    .page-home-create-tariff-description {
      font-style: normal;
      max-width: 344px;
      margin-bottom: 50px;
      display: block;
      color: rgba(var(--clr-black-rgb), 0.5);
    }

    .page-home-create-tariff-image {
      position: absolute;
      bottom: 0;
      right: 11px;
    }
  }

  .page-home-up-balance-online {
    padding: 32px;
    background-color: var(--clr-gray-1);
    position: relative;

    .page-home-up-balance-online-image {
      position: absolute;
      right: 38px;
      bottom: 36px;
    }

    .page-home-up-balance-online-heading {
      margin-bottom: 6px;
      display: block;
    }

    .page-home-up-balance-online-control {
      width: 100%;
      max-width: 350px;
      height: 44px;
      position: relative;

      .page-home-up-balance-online-control-label {
        position: absolute;
        top: 2px;
        left: 2px;
        bottom: 2px;
        padding: 9px 16px;
        background-color: rgba(var(--clr-black-rgb), 0.1);
        color: rgba(var(--clr-black-rgb), 0.5);
        z-index: 2;

        &.is-right {
          left: initial;
          right: 2px;
        }
      }

      .page-home-up-balance-online-control-input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 44px;
        z-index: 1;
        border: none;
        outline: none;
        padding: 11px 11px 11px 78px;

        &.is-right {
          padding: 11px 68px 11px 11px;
        }

        &::placeholder {
          color: rgba(var(--clr-black-rgb), 0.5);
        }
      }
    }
  }

  .page-home-folk-services {
    padding: 48px 0;

    .page-home-folk-services-action {
      @include btnDefault;
      transition: var(--transition);
      &:hover {
        text-decoration: underline dashed;
      }
    }

    .page-home-folk-services-chips {
      overflow: hidden;
      margin-top: 24px;
      margin-bottom: 32px;
    }

    .page-home-folk-services-grid {
      width: 100%;
      display: grid;
      grid-template-areas:
        'left centerTop centerTop rightTop'
        'left centerLeft centerRight rightBottom';
      gap: 20px;

      & > * {
        &:nth-child(1) {
          grid-area: left;
        }

        &:nth-child(2) {
          grid-area: centerTop;
        }

        &:nth-child(3) {
          grid-area: centerLeft;
        }

        &:nth-child(4) {
          grid-area: centerRight;
        }

        &:nth-child(5) {
          grid-area: rightTop;
        }

        &:nth-child(6) {
          grid-area: rightBottom;
        }
      }
    }
  }
}
</style>

<style lang="scss">
@import url("node_modules/@egjs/vue3-flicking/dist/flicking.css");
@import url("node_modules/@egjs/vue3-flicking/dist/flicking-inline.css");

.page-home {
  .page-home-info {
    .page-home-info-slider {
      .flicking-camera {
        display: flex;
        align-items: flex-start;
        gap: 16px;
      }
    }
  }
}
</style>
