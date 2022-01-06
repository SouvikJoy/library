<template>
  <div class="dt-navbar-content" ref="el" style="color: var(--dt-primary)">
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
import { ref } from "vue";
import { useCssVar } from "@vueuse/core";
export default {
  name: "dtNavbar",
  props: {
    bgColor: {
      type: String,
    },
  },
  setup() {
    const el = ref(null);
    const color = useCssVar("--dt-primary", el);

    return {
      color,
    };
  },
};
</script>

<style></style>
