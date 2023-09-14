<script>
import svgDownPolygon from "@/public/svg/down-polygon.svg?component";
import { keyBy } from "lodash";

export default {
  name: "lang-selector",
  components: {
    svgDownPolygon,
  },
  data() {
    return {
      isOpen: false,
      mapLang: [
        { value: "ru", label: this.$t("ru") },
        { value: "uz", label: this.$t("uz") },
        { value: "en", label: this.$t("en") },
      ],
      lang: "uz",
    };
  },
  computed: {
    mapLangIndexingByValue() {
      return keyBy(this.mapLang, 'value');
    },
    mapLangFiltered() {
      return this.mapLang.filter(l => l.value !== this.lang);
    },
    selectedLang() {
      if (!this.lang) {
        return this.$t("uz");
      }
      return this.mapLangIndexingByValue[this.lang].label;
    }
  },
  methods: {
    handler() {
      this.isOpen = !this.isOpen;
    },
    eventHandler(event) {
      const target = event.target;
      if ( !target.closest('.lang-selector-head') && !target.closest('.lang-selector-options') ) {
        this.isOpen = false;
      }
    },
    select(value) {
      this.lang = value;
      this.isOpen = false;
    }
  },
  mounted() {
    window.addEventListener('click', this.eventHandler);
  },
  unmounted() {
    window.removeEventListener('click', this.eventHandler);
  }
}
</script>

<template>
  <div class="lang-selector">
    <button class="lang-selector-head flex-side gap-3xl" type="button" :class="{'is-open': isOpen}" @click="handler">
      <span class="text-xs-bold">{{ selectedLang }}</span>
      <svg-down-polygon class="lang-selector-head-icon"/>
    </button>
    <transition>
      <div v-show="isOpen" class="lang-selector-options">
        <button v-for="lang in mapLangFiltered" :key="lang.value" class="lang-selector-options-action text-xs-bold w-full" type="button" @click="select(lang.value)">{{ lang.label }}</button>
      </div>
    </transition>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/mixins";

.lang-selector {
  position: relative;

  .lang-selector-head {
    @include btnDefault;
    @include svgColor(var(--clr-black));

    padding: 5.5px 0;
    border-bottom: 1px solid rgba(var(--clr-black-rgb), 0.1);
    color: var(--clr-black);
    transition: var(--transition);

    & > * {
      z-index: 9;
    }

    .lang-selector-head-icon {
      transition: var(--transition);
    }

    &.is-open {
      .lang-selector-head-icon {
        transform: rotateZ(180deg);
      }
    }

    &:hover {
      border-color: var(--clr-primary);
    }
  }

  .lang-selector-options {
    position: absolute;
    top: 0;
    left: -8px;
    width: calc(100% + 16px);
    padding: 28px 0 0;
    background-color: var(--clr-white);
    box-shadow: 0 12px 14px 0 rgba(var(--clr-black-rgb), 0.1);
    //height: 100%;
    .lang-selector-options-action {
      @include btnDefault;
      padding: 5.5px 8px;
      text-align: left;
      &:hover {
        background-color: var(--clr-gray-3);
      }
    }
  }
}
</style>
