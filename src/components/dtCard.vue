<template>
  <div class="dt-card">
    <div class="dt-card-title" v-if="$slots.title">
      <slot name="title"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "dtCard"
}
</script>

<style>

</style>
