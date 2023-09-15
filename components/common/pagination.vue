<script>
export default {
  name: "pagination",
  props: {
    page: {
      type: Number,
      default: 1,
    },
    pageSize: {
      type: Number,
      default: 15,
    },
    total: {
      type: Number,
      default: 100,
    }
  },
  computed: {
    mapActions() {
      const length = Math.ceil(this.$props.total / this.$props.pageSize);
      const map = [];
      for (let i = 1; i <= length; i++) {
        map.push({
          page: i,
          active: i === this.$props.page,
        });
      }

      return map;
    }
  }
}
</script>

<template>
  <div class="pagination flex-side gap-2xs">
    <button
      v-for="action in mapActions"
      :key="action"
      :disabled="action.active"
      class="pagination-action"
      :class="{'is-active': action.active}"
      type="button"
    ></button>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/mixins";

.pagination {
  .pagination-action {
    @include btnDefault;

    min-width: 17px;
    height: 17px;
    border: 1px solid var(--clr-black);
    transition: var(--transition);

    &:hover {
      background-color: var(--clr-black);
    }

    &.is-active {
      cursor: not-allowed;
      background-color: var(--clr-black);
    }
  }
}
</style>
