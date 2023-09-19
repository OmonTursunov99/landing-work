<script>
export default {
  name: "content-card",
  props: {
    tag: {
      type: String,
      default: 'div',
      required: false,
    },
    to: {
      type: Object,
      default() {
        return {};
      },
      required: false,
    },
    heading: {
      type: [ String, undefined ],
      default: undefined,
      required: false,
    },
    description: {
      type: [ String, undefined ],
      default: undefined,
      required: false,
    },
    loopText: {
      type: [ String, undefined ],
      default: undefined,
      required: false,
    },
    imagePath: {
      type: [ String, undefined ],
      default: undefined,
      required: false,
    },
    buttonLabel: {
      type: String,
      default: "",
      required: false,
    },
    transparentBackground: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<template>
  <component :is="tag" class="content-card" :class="{'transparent-background': transparentBackground}">
    <img v-if="!!imagePath" class="content-card-image" :src="imagePath" alt=""/>
    <p v-if="!!heading" class="content-card-heading heading-5">{{ heading }}</p>
    <p v-if="!!description" class="content-card-description text-sm" :class="{'has-padding-bottom': !!buttonLabel}">{{ description }}</p>
    <div v-if="!!loopText" class="content-card-bottom flex-side gap-xs">
      <p class="text-sm">{{ loopText }}</p>
      <div class="content-card-bottom-dod"></div>
      <p class="text-sm">{{ loopText }}</p>
    </div>
    <div v-if="!!buttonLabel" class="mt-auto content-card-action">
      <common-custom-button  :label="buttonLabel" fill="outline" />
    </div>
  </component>
</template>

<style lang="scss">
.content-card {
  --content-card-gap: 0;
  --content-card-background: transparent;
  --content-card-description-space: 12px;
  --content-card-min-height: 0;
  --content-card-color: var(--clr-black);
  --content-padding: 12px;

  user-select: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: var(--content-card-min-height);
  padding: var(--content-padding);
  gap: var(--content-card-gap);
  background-color: var(--content-card-background);
  color: var(--content-card-color);
  position: relative;
  cursor: pointer;
  overflow: hidden;
  transition: var(--transition);

  &.transparent-background {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: transparent;
      z-index: 9;
    }
  }

  .content-card-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition);
  }

  .content-card-heading {
    z-index: 1;
    font-family: var(--fort-druk-wide);
  }

  .content-card-description {
    z-index: 1;
    margin-top: var(--content-card-description-space);

    &.has-padding-bottom {
      padding-bottom: 21px;
    }
  }

  .content-card-bottom {
    z-index: 1;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    //height: 26px;
    background-color: var(--clr-black);
    color: var(--clr-white);
    white-space: nowrap;
    padding: 4px 7px;

    .content-card-bottom-dod {
      background-color: var(--clr-white);
      min-width: 5px;
      height: 5px;
      border-radius: 50%;
    }
  }

  .content-card-action {
    z-index: 1;
  }
}
</style>
