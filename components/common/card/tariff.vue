<script>
import svgInfinite from "@/public/svg/infinite.svg?component";
import svgPlanet from "@/public/svg/planet.svg?component";
import svgNight from "@/public/svg/night.svg?component";
import svgSms from "@/public/svg/sms.svg?component";
import svgTv from "@/public/svg/tv.svg?component";
import svgWallet from "@/public/svg/wallet.svg?component";
import svgCoreLadder from "@/public/svg/core/ladder.svg";

export default {
  name: "tariff-card",
  components: {
    svgInfinite,
    svgPlanet,
    svgNight,
    svgSms,
    svgTv,
    svgWallet,
    svgCoreLadder,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    mapIcons() {
      return {
        "call": {
          icon: svgInfinite,
          label: "call",
        },
        "internet": {
          icon: svgPlanet,
          label: "internet",
        },
        "night": {
          icon: svgNight,
          label: "night",
        },
        "sms": {
          icon: svgSms,
          label: "sms",
        },
        "tv": {
          icon: svgTv,
          label: "tv",
        },
        "wallet": {
          icon: svgWallet,
          label: "wallet",
        },
      }
    },
    tariffName() {
      const [ heading, main ] = this.$props.data.name.toString().split(" ");

      return { heading, main };
    },
    tariffColorCode() {
      return this.$props.data.colorCode;
    }
  }
}
</script>

<template>
  <div class="tariff-card flex-side column">
    <p class="tariff-card-heading heading-4">{{ tariffName.heading }}</p>
    <p class="tariff-card-main heading-1">{{ tariffName.main }}</p>
    <svg-core-ladder class="tariff-card-icon" :style="{'--fill': data.colorCode}"/>
    <div class="tariff-card-content">
      <div v-for="(ctn, index) in data.content" :key="index" class="tariff-card-content-item flex-side gap-xs">
        <component :is="mapIcons[ctn.type].icon"/>
        <p class="tariff-card-content-item-title text-lg-bold">{{ ctn.msg }}</p>
      </div>
    </div>
    <div class="tariff-card-foot w-full">
      <div class="tariff-card-foot-price flex-side justify-center gap-3xs">
        <p class="heading-2">{{ data.price }}</p>
        <p class="heading-6">{{ $t("sum/month") }}</p>
      </div>
      <div class="tariff-card-foot-actions flex-side gap-2xs">
        <common-custom-button center fill="outline" :label="$t('more_details')"/>
        <common-custom-button center :label="$t('to_connect')"/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tariff-card {
  background-color: var(--clr-white);
  position: relative;
  padding: 46px 24px 24px;
  cursor: pointer;

  .tariff-card-heading {
    position: absolute;
    top: 14px;
    left: 0;
    padding: 1px 10px 1px 23px;
    background-color: v-bind(tariffColorCode);
    color: var(--clr-black);
  }

  .tariff-card-main {
    margin-bottom: 38px;
    transition: var(--transition);
    color: var(--clr-black);
  }

  .tariff-card-icon {
    position: absolute;
    top: 16px;
    right: 24px;

    path {
      fill: v-bind(tariffColorCode);
    }
  }

  .tariff-card-content {
    margin-bottom: 45px;

    .tariff-card-content-item {
      padding: 12px 0;
      margin-bottom: 1px;
      box-shadow: 0 1px 0 0 #00000033;

      &:last-child {
        box-shadow: none;
        margin-bottom: 0;
      }

      .tariff-card-content-item-title {
        color: var(--clr-black);
      }
    }
  }

  .tariff-card-foot {
    border-top: 1px solid #000000;
    padding-top: 12px;
    margin: auto 0 12px;

    .tariff-card-foot-price {
      color: var(--clr-black);
    }

    .tariff-card-foot-actions {

    }
  }

  &:hover {
    .tariff-card-main {
      color: v-bind(tariffColorCode);
    }
  }

}
</style>
