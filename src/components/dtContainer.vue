<template>
  <component :is="tag" :class="className">
    <slot></slot>
  </component>
</template>

<script>
import { computed } from "vue";
export default {
  name: "dtContainer",
  props: {
    tag: {
      type: String,
      default: "div",
    },
    sm: {
      type: Boolean,
      default: false,
    },
    md: {
      type: Boolean,
      default: false,
    },
    lg: {
      type: Boolean,
      default: false,
    },
    xl: {
      type: Boolean,
      default: false,
    },
    fluid: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const className = computed(() => {
      return [
        props.fluid ? "dt-container-fluid" : "",
        props.sm ? "dt-container-sm" : "",
        props.md ? "dt-container-md" : "",
        props.lg ? "dt-container-lg" : "",
        props.xl ? "dt-container-xl" : "",
        !props.fluid && !props.sm && !props.md && !props.lg && !props.xl
          ? "dt-container"
          : "",
      ];
    });
    return {
      className,
      props,
    };
  },
};
</script>
