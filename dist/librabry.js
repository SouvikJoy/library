'use strict';

var vue = require('vue');

var script$5 = {
  name: "dtInput",
};

const _hoisted_1$2 = { type: "text" };

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("input", _hoisted_1$2))
}

script$5.render = render$5;
script$5.__file = "src/components/dtInput.vue";

var script$4 = {
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

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(`dt-card-content type-${this.type}`)
  }, [
    vue.createElementVNode("div", _hoisted_1$1, [
      (_ctx.$slots.img)
        ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$1, [
            vue.renderSlot(_ctx.$slots, "img"),
            (_ctx.$slots.interactions)
              ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3$1, [
                  vue.createElementVNode("span", null, [
                    vue.renderSlot(_ctx.$slots, "interactions")
                  ])
                ]))
              : vue.createCommentVNode("v-if", true)
          ]))
        : vue.createCommentVNode("v-if", true),
      (_ctx.$slots.text)
        ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_4$1, [
            (_ctx.$slots.title)
              ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_5$1, [
                  vue.createElementVNode("h3", null, [
                    vue.renderSlot(_ctx.$slots, "title")
                  ])
                ]))
              : vue.createCommentVNode("v-if", true),
            vue.createElementVNode("p", null, [
              vue.renderSlot(_ctx.$slots, "text")
            ])
          ]))
        : vue.createCommentVNode("v-if", true)
    ])
  ], 2 /* CLASS */))
}

script$4.render = render$4;
script$4.__file = "src/components/dtCard.vue";

var script$3 = {
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

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    vue.createElementVNode("div", _hoisted_2, [
      (_ctx.$slots.left)
        ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3, [
            vue.renderSlot(_ctx.$slots, "left")
          ]))
        : vue.createCommentVNode("v-if", true),
      (_ctx.$slots.default)
        ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_4, [
            vue.renderSlot(_ctx.$slots, "default", {}, () => [
              vue.createElementVNode("div", _hoisted_5, [
                vue.renderSlot(_ctx.$slots, "navbar-item")
              ])
            ])
          ]))
        : vue.createCommentVNode("v-if", true),
      (_ctx.$slots.right)
        ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_6, [
            vue.renderSlot(_ctx.$slots, "right")
          ]))
        : vue.createCommentVNode("v-if", true)
    ])
  ]))
}

script$3.render = render$3;
script$3.__file = "src/components/dtNavbar.vue";

var script$2 = {
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
    const className = vue.computed(() => {
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

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.tag), {
    class: vue.normalizeClass($setup.className)
  }, {
    default: vue.withCtx(() => [
      vue.renderSlot(_ctx.$slots, "default")
    ]),
    _: 3 /* FORWARDED */
  }, 8 /* PROPS */, ["class"]))
}

script$2.render = render$2;
script$2.__file = "src/components/dtContainer.vue";

var script$1 = {
  name: "dtCol",
  props: {
    tag: {
      type: String,
      default: "div",
    },
    col: {
      type: String,
    },
    sm: {
      type: String,
    },
    md: {
      type: String,
    },
    lg: {
      type: String,
    },
    xl: {
      type: String,
    },
    offset: {
      type: String,
    },
    offsetSm: {
      type: String,
    },
    offsetMd: {
      type: String,
    },
    offsetLg: {
      type: String,
    },
    offsetXl: {
      type: String,
    },
    auto: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const className = vue.computed(() => {
      return [
        props.col ? "col-" + props.col : "",
        props.sm ? "col-sm-" + props.sm : "",
        props.md ? "col-md-" + props.md : "",
        props.lg ? "col-lg-" + props.lg : "",
        props.xl ? "col-xl-" + props.xl : "",
        !props.col && !props.sm && !props.md && !props.lg && !props.xl
          ? "col"
          : "",
        props.offset ? "offset-" + props.offset : "",
        props.offsetSm ? "offset-sm-" + props.offsetSm : "",
        props.offsetMd ? "offset-md-" + props.offsetMd : "",
        props.offsetLg ? "offset-lg-" + props.offsetLg : "",
        props.offsetXl ? "offset-xl-" + props.offsetXl : "",
        props.auto ? "col-auto" : "",
      ];
    });
    return {
      className,
      props,
    };
  },
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.tag), {
    class: vue.normalizeClass($setup.className)
  }, {
    default: vue.withCtx(() => [
      vue.renderSlot(_ctx.$slots, "default")
    ]),
    _: 3 /* FORWARDED */
  }, 8 /* PROPS */, ["class"]))
}

script$1.render = render$1;
script$1.__file = "src/components/dtCol.vue";

var script = {
  name: "dtRow",
  props: {
    tag: {
      type: String,
      default: "div",
    },
    start: {
      type: Boolean,
      default: false,
    },
    end: {
      type: Boolean,
      default: false,
    },
    center: {
      type: Boolean,
      default: false,
    },
    between: {
      type: Boolean,
      default: false,
    },
    around: {
      type: Boolean,
      default: false,
    },
    cols: {
      type: [String, Array],
    },
  },
  setup(props) {
    const className = vue.computed(() => {
      return [
        "row",
        props.cols ? `${spreadProps(props.cols)}` : "",
        props.start && "justify-content-start",
        props.end && "justify-content-end",
        props.center && "justify-content-center",
        props.between && "justify-content-between",
        props.around && "justify-content-around",
      ];
    });
    const spreadProps = (props) => {
      if (typeof props === "string") {
        return `row-cols-${props}`;
      }
      return props.map((prop) => `row-cols-${prop}`.trim()).join(" ");
    };
    return {
      className,
      props,
    };
  },
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.tag), {
    class: vue.normalizeClass($setup.className)
  }, {
    default: vue.withCtx(() => [
      vue.renderSlot(_ctx.$slots, "default")
    ]),
    _: 3 /* FORWARDED */
  }, 8 /* PROPS */, ["class"]))
}

script.render = render;
script.__file = "src/components/dtRow.vue";

var components = {
  dtInput: script$5,
  dtCard: script$4,
  dtNavbar: script$3,
  dtContainer: script$2,
  dtCol: script$1,
  dtRow: script,
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

module.exports = plugin;
