<script>
import svgLupa from "@/public/svg/lupa.svg?component";
import svgMapSubtract from "@/public/svg/map/subtract.svg?component";

export default {
  name: "default-header",
  components: {
    svgLupa,
    svgMapSubtract,
  },
  data() {
    return {
      mapLinks: [
        { label: this.$t("rates") },
        { label: this.$t("internet_packages") },
        { label: this.$t("services") },
        { label: this.$t("roaming") },
        { label: this.$t("beeline_club") },
        { label: this.$t("press_center") },
        { label: this.$t("help") },
      ],
      mapLang: [
        { value: "ru", label: this.$t("ru") },
        { value: "uz", label: this.$t("uz") },
      ],
      lang: "UZB",
    };
  },
}
</script>

<template>
  <header>
    <div class="default-header flex-side">
      <img class="default-header-logo" src="/svg/logo.svg" alt=""/>
      <div class="default-header-content w-full">
        <div class="default-header-content-head w-full flex-side">
          <div class="default-header-content-head-action flex-side gap-md">
            <button class="default-header-content-head-action-btn text-sm" type="button" @click="() => { }" disabled>
              {{ $t("private_individuals") }}
            </button>
            <button class="default-header-content-head-action-btn text-sm" type="button" @click="() => { }">
              {{ $t("legal_entities") }}
            </button>
          </div>
          <div class="flex-side gap-md ml-auto">
            <div class="flex-side gap-2xs">
              <svg-map-subtract/>
              <p class="text-xs">{{ $t("select_location") }}</p>
            </div>
            <common-theme-schema/>
          </div>
        </div>
        <div class="default-header-content-actions flex-side">
          <nav class="mr-md">
            <ul class="flex-side gap-2xl">
              <li v-for="link in mapLinks" :key="link.label">
                <nuxt-link class="default-header-content-actions-link text-sm-bold text-uppercase" to="#">
                  {{ link.label }}
                </nuxt-link>
              </li>
            </ul>
          </nav>
          <common-form-dropdown :label="$t('more')"/>
          <common-lang-selector class="mr-4xl ml-auto"  />
          <div class="flex-side gap-md">
            <common-custom-button icon icon-left :label="$t('search')" fill="outline">
              <template #icon>
                <svg-lupa/>
              </template>
            </common-custom-button>
            <common-custom-button :label="$t('personal_account')"/>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/mixins";

.default-header {
  .default-header-logo {
    padding-left: 68px;
    padding-right: 42px;

  }
  .default-header-content {
    .default-header-content-head {
      border-bottom: 1px solid rgba(var(--clr-black-rgb), 0.1);
      padding-right: 46px;
      .default-header-content-head-action {
        padding: 6px 0 5px;
        .default-header-content-head-action-btn {
          color: var(--clr-black);
          @include btnDefault;

          &:disabled {
            position: relative;
            &:before {
              content: "";
              position: absolute;
              bottom: -7px;
              left: 0;
              width: 100%;
              height: 2px;
              background-color: var(--clr-primary);
            }
          }
        }
      }
      .default-header-content-head-location {
        @include svgColor(var(--clr-black));
        p {
          color: var(--clr-black);
        }
      }
    }
    .default-header-content-actions {
      padding: 8px 46px 8px 0;
      nav {
        ul {
          li {
            .default-header-content-actions-link {
              color: var(--clr-black);
              transition: var(--transition);
              text-transform: uppercase;

              &:hover {
                color: var(--clr-primary);
              }

              &:active {
                color: rgba(var(--clr-black-rgb), 0.2);
              }
            }
          }
        }
      }
    }
  }
}
</style>
