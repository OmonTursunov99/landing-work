<script>
import DefaultHeader from "~/components/layout/default-header/index.vue";

export default {
  name: "default",
  components: { DefaultHeader }
}
</script>

<template>
  <main>
    <default-header/>
    <slot />
  </main>
</template>
