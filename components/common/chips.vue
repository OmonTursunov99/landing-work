<script>
export default {
  name: "chips",
  props: {
    label: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    chipsAttr() {
      return {
        'chips': true,
        'chips-un-active': !this.$props.active,
        'chips-active': this.$props.active,
        'text-lg-bold': true,
      };
    },
  }
}
</script>

<template>
  <button :class="chipsAttr" type="button" :disabled="active">
    {{ label }}
  </button>
</template>

<style lang="scss">
@import "@/assets/styles/mixins";

.chips {
  @include btnDefault;
  padding: 16px 32px;
  border: 1px solid var(--clr-black);
  transition: var(--transition);

  &.chips-un-active {
    color: var(--clr-black);
  }

  &.chips-active {
    background-color: var(--clr-black);
    color: var(--clr-white);
  }

  &:hover {
    background-color: var(--clr-black);
    color: var(--clr-white);
  }

  &:disabled {
    cursor: not-allowed;
  }
}
</style>
