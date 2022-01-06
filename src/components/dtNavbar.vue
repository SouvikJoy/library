<template>
  <div :class="navClass">
    <div class="dt-navbar">
      <div class="dt-navbar__left" v-if="$slots.left">
        <slot name="left"></slot>
      </div>
      <div class="dt-navbar__center" v-if="$slots.default">
        <slot>
          <div class="dt-navbar__item">
            <slot name="navbar-item"></slot>
          </div>
        </slot>
      </div>
      <div class="dt-navbar__right" v-if="$slots.right">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  name: "dtNavbar",
  props: {
    navClass: {
      type: String,
    },
    setup(props) {
      const navClass = computed(() => {
        return [
          props.success ? "dt-navbar-content dt-navbar-bg" : "",
          !props.success ? "dt-navbar-content" : "",
        ];
      });

      return {
        navClass,
        props,
      };
    },
  },
};
</script>

<style></style>
