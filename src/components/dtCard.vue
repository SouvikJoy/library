<template>
  <div :class="`dt-card-content type-${this.type}`">
    <div class="dt-card">
      <div class="dt-card__img" v-if="$slots.img">
        <slot name="img"></slot>
        <div class="dt-card__interactions" v-if="$slots.interactions">
          <slot name="interactions"></slot>
        </div>
      </div>
      <div class="dt-card__text" v-if="$slots.text">
        <slot name="text"></slot>
        <div v-if="$slots.title">
          <slot name="title"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dtCard",
  props: {
    type: String
  }
}
</script>

<style>

</style>
