<script>
export default {
  name: "package-card",
  props: {
    data: {
      type: Object,
      required: true,
    }
  }
}
</script>

<template>
  <nuxt-link class="package-card flex-side items-end" to="#">
    <p class="package-card-type text-xs">{{ data.type }}</p>
    <div class="package-card-info flex-side column justify-end">
      <strong class="package-card-info-heading heading-4">{{ data.mb }}</strong>
      <p class="package-card-info-limit heading-6">{{ $t("for_days", { day: data.limit }) }}</p>
      <p class="package-card-info-link text-sm">{{ $t("more_details") }}</p>
    </div>
    <div class="package-card-pay flex-side column items-center justify-center ml-auto">
      <div class="flex-side gap-4xs">
        <p class="heading-6">{{ data.price }} </p>
        <p class="heading-6 heading-6-fs-small">{{ $t("sum") }}</p>
      </div>
      <common-custom-button
        size="small"
        fill="secondary"
        :label="$t('to_connect')"
      />
    </div>
  </nuxt-link>
</template>

<style scoped lang="scss">
.package-card {
  border-top: 2px solid var(--clr-primary);
  background-color: var(--clr-white);
  padding: 8px;
  position: relative;

  .package-card-type {
    position: absolute;
    top: 0;
    left: 0;
    padding: 2px 8px;
    background-color: var(--clr-primary);
    color: var(--clr-black);
  }

  .package-card-info {
    padding: 7px 8px;
    color: var(--clr-black);
    .package-card-info-heading {
      transition: var(--transition);
    }

    .package-card-info-limit {}

    .package-card-info-link {
      transition: var(--transition);
      margin-top: 20px;
      color: var(--clr-info);
    }
  }

  .package-card-pay {
    width: 177px;
    height: 134px;
    background-color: var(--clr-blue-1);
    gap: 22px;
    color: var(--clr-black);
    transition: var(--transition);
  }

  &:hover {
    .package-card-info {
      .package-card-info-heading {
        color: var(--clr-primary) !important;
      }
      .package-card-info-link {
        text-decoration: underline;
      }
    }

  }
}
</style>
