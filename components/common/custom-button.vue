<script>
const mapTypes = [ "button", "reset", "submit" ];
const mapSizes = [ "small", "medium", "large" ];
const mapFill = [ "primary", "secondary", "tertiary", "outline" ];
import svgLoading from "@/public/svg/loading.svg?component";

export default {
  name: "custom-button",
  components: {
    svgLoading,
  },
  props: {
    type: {
      type: String,
      default: "button",
      required: false,
      validator(type) {
        return mapTypes.includes(type);
      },
    },
    label: {
      type: String,
      required: false,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    iconPath: {
      type: String,
      required: false,
    },
    icon: {
      type: Boolean,
      default: false,
    },
    iconLeft: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "medium",
      required: false,
      validator(size) {
        return mapSizes.includes(size);
      },
    },
    fill: {
      type: String,
      default: "primary",
      required: false,
      validator(fill) {
        return mapFill.includes(fill);
      },
    },
    center: {
      type: Boolean,
      default: false,
    }
  },
  emits: [ 'handler' ],
  methods: {
    handler() {
      this.$emit('handler');
    }
  },
  computed: {
    classAttr() {
      return {
        'custom-button': true,
        'custom-button-disabled': this.$props.disabled,
        'custom-button-center': this.$props.center,
        'custom-button-loading': this.$props.loading,
        'custom-button-icon': !!this.$props.icon,
        'custom-button-icon-left': this.$props.iconLeft && !!this.$props.icon,
        'custom-button-icon-right': !this.$props.iconLeft && !!this.$props.icon,
        [`custom-button-size-${ this.$props.size }`]: true,
        [`custom-button-fill-${ this.$props.fill }`]: true,
      }
    },
    attrs() {
      return {
        class: this.classAttr,
        disabled: this.$props.disabled || this.$props.loading,
        type: this.$props.type,
        title: this.$props.label,
      };
    },
  },
}
</script>

<template>
  <button v-bind="attrs" @click="handler">
    {{ label }}
    <template v-if="icon">
      <svgLoading v-if="loading"/>
      <slot v-else name="icon"></slot>
    </template>
  </button>
</template>

<style lang="scss">
@import "@/assets/styles/mixins";

.custom-button {
  cursor: pointer;
  padding: 0 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: var(--transition);

  &.custom-button-center {
    justify-content: center;
    width: 100%;
  }

  &.custom-button-size-large {
    font-size: 16px;
    line-height: 22px;
    height: var(--custom-button-height, 56px);
  }

  &.custom-button-size-medium {
    font-size: 14px;
    line-height: 18px;
    height: var(--custom-button-height, 48px);
  }

  &.custom-button-size-small {
    font-size: 14px;
    line-height: 18px;
    height: var(--custom-button-height, 34px);
  }

  &.custom-button-icon {
    svg {
      & > * {
        transition: 0.25s ease-in-out;
      }
    }
  }

  &.custom-button-loading {
    cursor: wait;

    svg {
      animation: spinnerAnimation infinite 1s linear;
    }

    @keyframes spinnerAnimation {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }

  &:disabled {
    &:not(&.custom-button-loading) {
      cursor: not-allowed;
    }
  }

  &.custom-button-icon-left {
    flex-direction: row-reverse;
  }

  &.custom-button-fill-primary {
    background-color: var(--clr-primary);
    border: none;
    color: var(--clr-black);

    &.custom-button-icon {
      @include svgColor(var(--clr-black));
    }

    &.custom-button-loading {
      background-color: rgba(var(--clr-primary-rgb), 0.7);
    }

    &:hover {
      &:not(&:disabled) {
        background-color: rgba(var(--clr-primary-rgb), 0.8);
      }
    }

    &:active {
      &:not(&:disabled) {
        background-color: rgba(var(--clr-primary-rgb), 0.7);
      }
    }

    &:disabled {
      &:not(&.custom-button-loading) {
        background-color: rgba(var(--clr-black-rgb), 0.1);
        color: rgba(var(--clr-black-rgb), 0.5);

        &.custom-button-icon {
          @include svgColor(rgba(var(--clr-black-rgb), 0.5));
        }
      }
    }
  }

  &.custom-button-fill-outline {
    background-color: transparent;
    border: 1px solid var(--clr-black);
    color: var(--clr-black);

    &.custom-button-icon {
      @include svgColor(var(--clr-black));
    }

    &.custom-button-loading {
      &:disabled {
        border-color: rgba(var(--clr-black-rgb), 0.5);
        color: rgba(var(--clr-black-rgb), 0.5);
        @include svgColor(rgba(var(--clr-black-rgb), 0.5));
      }
    }

    &:hover {
      &:not(&:disabled) {
        background-color: var(--clr-black);
        color: var(--clr-white);

        &.custom-button-icon {
          @include svgColor(var(--clr-white));
        }
      }
    }

    &:active {
      &:not(&:disabled) {
        background-color: transparent;
        border-color: rgba(var(--clr-black-rgb), 0.5);
        color: rgba(var(--clr-black-rgb), 0.5);

        &.custom-button-icon {
          @include svgColor(rgba(var(--clr-black-rgb), 0.5));
        }
      }
    }

    &:disabled {
      &:not(&.custom-button-loading) {
        background-color: transparent;
        border-color: rgba(var(--clr-black-rgb), 0.3);
        color: rgba(var(--clr-black-rgb), 0.3);

        &.custom-button-icon {
          @include svgColor(rgba(var(--clr-black-rgb), 0.3));
        }
      }
    }
  }

  &.custom-button-fill-secondary {
    background-color: var(--clr-black);
    color: var(--clr-white);
    border: none;

    &.custom-button-icon {
      @include svgColor(var(--clr-white));
    }

    &.custom-button-loading {
      &:disabled {
        background-color: rgba(var(--clr-black-rgb), 0.5);
        color: var(--clr-white);
        @include svgColor(var(--clr-white));
      }
    }

    &:hover {
      &:not(&:disabled) {
        background-color: rgba(var(--clr-black-rgb), 0.8);
        color: var(--clr-white);

        &.custom-button-icon {
          @include svgColor(var(--clr-white));
        }
      }
    }

    &:active {
      &:not(&:disabled) {
        background-color: rgba(var(--clr-black-rgb), 0.5);
        color: var(--clr-white);

        &.custom-button-icon {
          @include svgColor(var(--clr-white));
        }
      }
    }

    &:disabled {
      &:not(&.custom-button-loading) {
        background-color: rgba(var(--clr-black-rgb), 0.1);
        color: rgba(var(--clr-black-rgb), 0.5);

        &.custom-button-icon {
          @include svgColor(rgba(var(--clr-black-rgb), 0.5));
        }
      }
    }
  }
}
</style>
