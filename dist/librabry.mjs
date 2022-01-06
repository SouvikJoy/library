import { openBlock, createElementBlock, normalizeClass, createElementVNode, renderSlot, createCommentVNode, computed, createBlock, resolveDynamicComponent, withCtx } from 'vue';

var script$3 = {
  name: "dtInput",
};

const _hoisted_1$2 = { type: "text" };

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("input", _hoisted_1$2))
}

script$3.render = render$3;
script$3.__file = "src/components/dtInput.vue";

var script$2 = {
  name: "dtCard",
  props: {
    type: String,
  },
};

const _hoisted_1$1 = { class: "dt-card" };
const _hoisted_2$1 = {
  key: 0,
  class: "dt-card__img"
};
const _hoisted_3$1 = {
  key: 0,
  class: "dt-card__interactions"
};
const _hoisted_4$1 = {
  key: 1,
  class: "dt-card__text"
};
const _hoisted_5$1 = {
  key: 0,
  class: "dt-card__title"
};

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(`dt-card-content type-${this.type}`)
  }, [
    createElementVNode("div", _hoisted_1$1, [
      (_ctx.$slots.img)
        ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
            renderSlot(_ctx.$slots, "img"),
            (_ctx.$slots.interactions)
              ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
                  createElementVNode("span", null, [
                    renderSlot(_ctx.$slots, "interactions")
                  ])
                ]))
              : createCommentVNode("v-if", true)
          ]))
        : createCommentVNode("v-if", true),
      (_ctx.$slots.text)
        ? (openBlock(), createElementBlock("div", _hoisted_4$1, [
            (_ctx.$slots.title)
              ? (openBlock(), createElementBlock("div", _hoisted_5$1, [
                  createElementVNode("h3", null, [
                    renderSlot(_ctx.$slots, "title")
                  ])
                ]))
              : createCommentVNode("v-if", true),
            createElementVNode("p", null, [
              renderSlot(_ctx.$slots, "text")
            ])
          ]))
        : createCommentVNode("v-if", true)
    ])
  ], 2 /* CLASS */))
}

script$2.render = render$2;
script$2.__file = "src/components/dtCard.vue";

var script$1 = {
  name: "dtNavbar",
};

const _hoisted_1 = { class: "dt-navbar-content" };
const _hoisted_2 = { class: "dt-navbar" };
const _hoisted_3 = {
  key: 0,
  class: "dt-navbar__left"
};
const _hoisted_4 = {
  key: 1,
  class: "dt-navbar__center"
};
const _hoisted_5 = { class: "dt-navbar__item" };
const _hoisted_6 = {
  key: 2,
  class: "dt-navbar__right"
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("div", _hoisted_2, [
      (_ctx.$slots.left)
        ? (openBlock(), createElementBlock("div", _hoisted_3, [
            renderSlot(_ctx.$slots, "left")
          ]))
        : createCommentVNode("v-if", true),
      (_ctx.$slots.default)
        ? (openBlock(), createElementBlock("div", _hoisted_4, [
            renderSlot(_ctx.$slots, "default", {}, () => [
              createElementVNode("div", _hoisted_5, [
                renderSlot(_ctx.$slots, "navbar-item")
              ])
            ])
          ]))
        : createCommentVNode("v-if", true),
      (_ctx.$slots.right)
        ? (openBlock(), createElementBlock("div", _hoisted_6, [
            renderSlot(_ctx.$slots, "right")
          ]))
        : createCommentVNode("v-if", true)
    ])
  ]))
}

script$1.render = render$1;
script$1.__file = "src/components/dtNavbar.vue";

var script = {
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

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock(resolveDynamicComponent($props.tag), {
    class: normalizeClass($setup.className)
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3 /* FORWARDED */
  }, 8 /* PROPS */, ["class"]))
}

script.render = render;
script.__file = "src/components/dtContainer.vue";

var components = {
  dtInput: script$3,
  dtCard: script$2,
  dtNavbar: script$1,
  dtContainer: script,
};

const plugin = {
  install(Vue) {
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop];
        Vue.component(component.name, component);
      }
    }
  },
};

export { plugin as default };
