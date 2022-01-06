import { openBlock, createElementBlock, normalizeClass, createElementVNode, renderSlot, createCommentVNode } from 'vue';

var script$2 = {
  name: "dtInput",
};

const _hoisted_1$2 = { type: "text" };

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("input", _hoisted_1$2))
}

script$2.render = render$2;
script$2.__file = "src/components/dtInput.vue";

var script$1 = {
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

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
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

script$1.render = render$1;
script$1.__file = "src/components/dtCard.vue";

var script = {
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

function render(_ctx, _cache, $props, $setup, $data, $options) {
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

script.render = render;
script.__file = "src/components/dtNavbar.vue";

var components = {
  dtInput: script$2,
  dtCard: script$1,
  dtNavbar: script,
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
