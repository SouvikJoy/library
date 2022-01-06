<template>
  <nav class="dt-navbar-content">
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
  </nav>
</template>

<script>
export default {
  name: "dtNavbar",
};
</script>

<style></style>
