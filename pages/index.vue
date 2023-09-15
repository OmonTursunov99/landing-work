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
import gsap from 'gsap'

export default {
  name: "page-home",
  components: {
    Swiper,
    SwiperSlide,
    svgArrowLeft,
    svgArrowRight,
  },
  data() {
    return {
      internetPackagesStore: useInternetPackagesStore(),
      tariffsStore: useTariffsStore(),
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
        navigation: true,
        loop: true,
        modules: [ Navigation, Autoplay, Pagination ],
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
    onBeforeEnter(el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    onEnter(el, done) {
      gsap.to(el, {
        opacity: 1,
        height: '1.6em',
        delay: el.dataset.index * 0.15,
        onComplete: done
      })
    },

    onLeave(el, done) {
      gsap.to(el, {
        opacity: 0,
        height: 0,
        delay: el.dataset.index * 0.15,
        onComplete: done
      })
    },
  },
  computed: {
    catalogButtonLabel() {
      return `${this.$t("all")} ${this.$t(this.catalogValue).toString().toLowerCase()}`;
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
      <swiper v-bind="swiperInfoOptions">
        <swiper-slide>
          <common-card-content
            heading="Зона покрытия и офисы"
            description="Ознакомьтесь с адресами офисов и картой покрытия"
            image-path="/images/office-zone.png"
            :style="{
              '--content-card-description-space': 'auto',
              '--content-card-min-height': '273px',
              '--content-card-color': 'var(--clr-white)',
            }"
          />
        </swiper-slide>
        <swiper-slide>
          <common-card-content
            loop-text="Пополнить баланс"
            image-path="/images/replenish-balance.png"
            :style="{
              '--content-card-min-height': '227px',
            }"
          />
        </swiper-slide>
        <swiper-slide>
          <common-card-content
            heading="Подобрать номер"
            description="Предлагаем вам быстро и удобно подобрать красивый номер."
            :style="{
              '--content-card-background': `rgba(var(--clr-primary-rgb), 0.2)`,
              '--content-card-description-space': '36px',
            }"
          />
        </swiper-slide>
        <swiper-slide>
          <common-card-content
            heading="Конструк-тор тарифов"
            description="Теперь ты решаешь, каким будет твой тариф!"
            :style="{
              '--content-card-background': `rgba(var(--clr-pik-rgb), 0.2)`,
              '--content-card-description-space': '80px',
            }"
          />
        </swiper-slide>
        <swiper-slide>
          <common-card-content
            loop-text="Замена сим карты"
            image-path="/images/replacing-sim-card.png"
            :style="{
              '--content-card-min-height': '247px',
              '--content-card-background': `rgba(var(--clr-green-rgb), 0.2)`,
            }"
          />
        </swiper-slide>
        <swiper-slide>
          <common-card-content
            heading="eSIM"
            description="Подключите услугу «eSIM» бесплатно!"
            :style="{
              '--content-card-background': `rgba(var(--clr-blue-rgb), 0.2)`,
              '--content-card-description-space': '58px',
            }"
          />
        </swiper-slide>
      </swiper>
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
              <common-card-package v-for="item in internetPackagesStore.$state.internetPackages" :key="item.id" :data="item"/>
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
  </div>
</template>

<style lang="scss">
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
    padding: 16px 16px 39px;
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
}
</style>

