<script>
export default {
  name: "default-footer-links-wrapper",
  data() {
    return {
      mapMobileConnection: [
        { to: "#", label: this.$t("rates") },
        { to: "#", label: this.$t("services") },
        { to: "#", label: this.$t("payment_for_services") },
        { to: "#", label: this.$t("sales") },
        { to: "#", label: this.$t("roaming") },
      ],
      mapFixedLine: [
        { to: "#", label: this.$t("beeline_calling_cards") },
        { to: "#", label: this.$t("telephone_codes") },
        { to: "#", label: this.$t("home_phone_installation") },
        { to: "#", label: this.$t("wired_internet") },
      ],
      mapApplicationsAndServices: [
        { to: "#", label: this.$t("beeline_tv") },
        { to: "#", label: this.$t("beeline_music_radio") },
        { to: "#", label: this.$t("beepul") },
        { to: "#", label: this.$t("beeline_club_program", {version: "2.0"}) },
        { to: "#", label: this.$t("data_center") },
        { to: "#", label: this.$t("information_and_entertainment") },
      ],
      mapAboutCompany: [
        { to: "#", label: this.$t("about_us") },
        { to: "#", label: this.$t("compliance") },
        { to: "#", label: this.$t("mission_and_approach") },
        { to: "#", label: this.$t("juristic_documents") },
        { to: "#", label: this.$t("vacancies") },
        { to: "#", label: this.$t("internship") },
        { to: "#", label: this.$t("tenders") },
        { to: "#", label: this.$t("offices") },
        { to: "#", label: this.$t("management") },
        { to: "#", label: this.$t("how_to_become_a_dealer") },
        { to: "#", label: this.$t("contacts") },
      ]
    };
  },
}
</script>

<template>
  <footer class="default-footer">
    <div class="default-footer-links">
      <div class="container">
        <div class="default-footer-links-wrapper">
          <div class="default-footer-links-wrapper-contacts flex-side column gap-md">
            <strong class="default-footer-links-wrapper-contacts-heading heading-5">{{ $t("ask_question") }}</strong>
            <div class="default-footer-links-wrapper-contacts-card flex-side column gap-4xs">
              <a class="default-footer-links-wrapper-contacts-card-number heading-5" href="tel:+0611">0661</a>
              <p class="default-footer-links-wrapper-contacts-card-title text-xs">{{ $t("from_beeline_mobile") }}</p>
            </div>
            <div class="default-footer-links-wrapper-contacts-card flex-side column gap-4xs">
              <a class="default-footer-links-wrapper-contacts-card-number heading-5" href="tel:+998901850055">(90) 185-00-55 </a>
              <p class="default-footer-links-wrapper-contacts-card-title text-xs">{{ $t("from_any_numbers") }}</p>
            </div>
          </div>
          <div class="default-footer-links-wrapper-navigations flex-side column gap-md">
            <p class="default-footer-links-wrapper-navigations-heading text-base-bold">{{ $t("mobile_connection") }}</p>
            <nav class="default-footer-links-wrapper-navigations-nav">
              <ul class="default-footer-links-wrapper-navigations-nav-unordered flex-side column gap-4xs">
                <li v-for="(link, index) in mapMobileConnection" :key="index" class="default-footer-links-wrapper-navigations-nav-unordered-list">
                  <nuxt-link class="default-footer-links-wrapper-navigations-nav-unordered-list-link text-sm" :to="link.to">{{ link.label }}</nuxt-link>
                </li>
              </ul>
            </nav>
          </div>
          <div class="default-footer-links-wrapper-navigations flex-side column gap-md">
            <p class="default-footer-links-wrapper-navigations-heading text-base-bold">{{ $t("fixed_line") }}</p>
            <nav class="default-footer-links-wrapper-navigations-nav">
              <ul class="default-footer-links-wrapper-navigations-nav-unordered flex-side column gap-4xs">
                <li v-for="(link, index) in mapFixedLine" :key="index" class="default-footer-links-wrapper-navigations-nav-unordered-list">
                  <nuxt-link class="default-footer-links-wrapper-navigations-nav-unordered-list-link text-sm" :to="link.to">{{ link.label }}</nuxt-link>
                </li>
              </ul>
            </nav>
          </div>
          <div class="default-footer-links-wrapper-navigations flex-side column gap-md">
            <p class="default-footer-links-wrapper-navigations-heading text-base-bold">{{ $t("applications_and_services") }}</p>
            <nav class="default-footer-links-wrapper-navigations-nav">
              <ul class="default-footer-links-wrapper-navigations-nav-unordered flex-side column gap-4xs">
                <li v-for="(link, index) in mapApplicationsAndServices" :key="index" class="default-footer-links-wrapper-navigations-nav-unordered-list">
                  <nuxt-link class="default-footer-links-wrapper-navigations-nav-unordered-list-link text-sm" :to="link.to">{{ link.label }}</nuxt-link>
                </li>
              </ul>
            </nav>
          </div>
          <div class="default-footer-links-wrapper-navigations flex-side column gap-md">
            <p class="default-footer-links-wrapper-navigations-heading text-base-bold">{{ $t("about_company") }}</p>
            <nav class="default-footer-links-wrapper-navigations-nav">
              <ul class="default-footer-links-wrapper-navigations-nav-unordered flex-side column gap-4xs">
                <li v-for="(link, index) in mapAboutCompany" :key="index" class="default-footer-links-wrapper-navigations-nav-unordered-list">
                  <nuxt-link class="default-footer-links-wrapper-navigations-nav-unordered-list-link text-sm" :to="link.to">{{ link.label }}</nuxt-link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.default-footer {
  .default-footer-links {
    .default-footer-links-wrapper {
      padding: 48px 0;
      display: grid;
      gap: 20px;
      grid-template-columns: 3fr 2fr 2fr 2fr 3fr;
      .default-footer-links-wrapper-contacts {
        .default-footer-links-wrapper-contacts-heading {
          color: var(--clr-black);
        }
        .default-footer-links-wrapper-contacts-card {
          .default-footer-links-wrapper-contacts-card-number {
            color: var(--clr-black);
            transition: var(--transition);

            &:hover {
              color: var(--clr-primary);
            }
          }
          .default-footer-links-wrapper-contacts-card-title {
            color: var(--clr-black);
          }
        }
      }
      .default-footer-links-wrapper-navigations {
        .default-footer-links-wrapper-navigations-heading {
          color: var(--clr-black);
        }
        .default-footer-links-wrapper-navigations-nav {
          .default-footer-links-wrapper-navigations-nav-unordered {
            .default-footer-links-wrapper-navigations-nav-unordered-list {
              .default-footer-links-wrapper-navigations-nav-unordered-list-link {
                color: var(--clr-black);
              }
            }
          }
        }
      }
    }
  }
}
</style>
