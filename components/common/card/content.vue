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
    }
  }
}
</script>

<template>
  <component :is="tag" class="content-card">
    <img v-if="!!imagePath" class="content-card-image" :src="imagePath" alt=""/>
    <p v-if="!!heading" class="content-card-heading heading-5">{{ heading }}</p>
    <p v-if="!!description" class="content-card-description text-sm">{{ description }}</p>
    <div v-if="!!loopText" class="content-card-bottom flex-side gap-xs">
      <p class="text-sm">{{ loopText }}</p>
      <div class="content-card-bottom-dod"></div>
      <p class="text-sm">{{ loopText }}</p>
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

  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: var(--content-card-min-height);
  padding: 12px;
  gap: var(--content-card-gap);
  background-color: var(--content-card-background);
  color: var(--content-card-color);
  position: relative;
  cursor: pointer;
  overflow: hidden;
  transition: var(--transition);

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
  }

  &:hover {
    box-shadow: 0 8px 12px 0 var(--clt-shadow);

    .content-card-image {
      transform: scale(1.2);
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

  //.content-card-bottom {
  //  display: flex;
  //  position: absolute;
  //  bottom: 0;
  //  left: 0;
  //  width: 100%;
  //  height: 26px;
  //  margin: auto;
  //  background-color: var(--clr-black);
  //  overflow: hidden;
  //  z-index: 1;
  //
  //  .content-card-bottom-title {
  //    display: flex;
  //    position: absolute;
  //    top: 0;
  //    left: 0;
  //    align-items: center;
  //    justify-content: flex-start;
  //    width: 100%;
  //    height: 100%;
  //    white-space: nowrap;
  //    //transform: scale(2);
  //    //transition: all 1s ease;
  //
  //    & > div {
  //      display: flex;
  //      //animation: scrollText 3s infinite linear;
  //    }
  //
  //    p {
  //      margin: 0;
  //      color: var(--clr-white);
  //      transition: var(--transition);
  //    }
  //  }
  //}
  //
  //div:hover {
  //  animation-play-state: paused;
  //}
  //
  //@keyframes scrollText {
  //  from {
  //    transform: translateX(0%);
  //  }
  //  to {
  //    transform: translateX(50%);
  //  }
  //}
}
</style>
