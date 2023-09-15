<script>
import svgSun from "@/public/svg/sun.svg?component";
import svgMoon from "@/public/svg/moon.svg?component";

export default {
  name: "theme-schema",
  components: {
    svgSun,
    svgMoon,
  },
  data() {
    return {
      isDark: false,
    }
  },
  methods: {
    handler() {
      this.isDark = !this.isDark;
      const html = document.querySelector('html');
      const theme = html.getAttribute('theme');

      if ( !theme ) {
        html.setAttribute('theme', 'dark');
        return;
      }
      const setTheme = theme === 'light' ? 'dark' : 'light';
      html.setAttribute('theme', setTheme);
    }
  }
}
</script>

<template>
  <div class="theme-schema" @click="handler">
    <svg-sun/>
    <div class="theme-schema-controller">
      <div class="theme-schema-controller-dod" :class="{'is-dark': isDark}">
      </div>
    </div>
    <svg-moon/>
  </div>
</template>

<style lang="scss">
.theme-schema {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;

  .theme-schema-controller {
    width: 44px;
    height: 16px;
    position: relative;
    background-color: rgba(var(--clr-black-rgb), 0.3);
    border-radius: 21px;

    .theme-schema-controller-dod {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      width: 22px;
      height: 22px;
      background-color: var(--clr-primary);
      border-radius: 50%;
      transition: var(--transition);

      &.is-dark {
        left: calc(100% - 22px);
      }
    }
  }
}
</style>
