import { vMaska } from "maska";

// <input v-model="value" v-maska data-maska="#-#" />

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("maska", vMaska);
});
