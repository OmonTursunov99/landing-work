<script>
import svgDownPolygon from "@/public/svg/down-polygon.svg?component";

export default {
  name: "form-select",
  components: {
    svgDownPolygon,
  },
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    fields: {
      type: Array,
      default() {
        return [];
      },
    }
  },
}
</script>

<template>
  <div class="form-select">
    <button class="form-select-head flex-side gap-3xl" type="button">
      <span class="form-select-head-label text-xs-bold">{{ modelValue }}</span>
      <svg-down-polygon class="form-select-head-icon"/>
    </button>
    <div class="form-select-options">
      <div>

      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/mixins";

.form-select {
  .form-select-head {
    @include btnDefault;
    @include svgColor(var(--clr-black));

    padding: 5.5px 0;
    border-bottom: 1px solid rgba(var(--clr-black-rgb), 0.1);
    color: var(--clr-black);
    transition: var(--transition);

    &:hover {
      border-color: var(--clr-primary);
    }
  }
}
</style>
