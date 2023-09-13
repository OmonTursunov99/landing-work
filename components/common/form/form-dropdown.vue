<script>
import svgDownPolygon from "@/public/svg/down-polygon.svg?component"

export default {
  name: "form-dropdown",
  components: {
    svgDownPolygon,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <div class="form-dropdown">
    <button class="form-dropdown-head flex-side items-start" type="button">
      <span class="text-sm-bold text-uppercase">{{ label }}</span>
      <svg-down-polygon class="form-dropdown-head-icon"/>
    </button>
    <div class="form-dropdown-lists">

    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/mixins";

.form-dropdown {
  .form-dropdown-head {
    @include btnDefault;
    @include svgColor(var(--clr-black));

    color: var(--clr-black);
    transition: var(--transition);

    .form-dropdown-head-icon {
      margin-top: 4px;
      margin-left: 6px;
    }

    &:hover {
      color: var(--clr-primary);
    }
  }
}
</style>
