import { openBlock, createElementBlock, normalizeClass, createElementVNode, renderSlot, createCommentVNode } from 'vue';

var script$1 = {
  name: "dtInput",
};

const _hoisted_1$1 = { type: "text" };

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("input", _hoisted_1$1))
}

script$1.render = render$1;
script$1.__file = "src/components/dtInput.vue";

var script = {
  name: "dtCard",
  props: {
    type: String,
  },
};

const _hoisted_1 = { class: "dt-card" };
const _hoisted_2 = {
  key: 0,
  class: "dt-card__img"
};
const _hoisted_3 = {
  key: 0,
  class: "dt-card__interactions"
};
const _hoisted_4 = {
  key: 1,
  class: "dt-card__text"
};
const _hoisted_5 = {
  key: 0,
  class: "dt-card__title"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(`dt-card-content type-${this.type}`)
  }, [
    createElementVNode("div", _hoisted_1, [
      (_ctx.$slots.img)
        ? (openBlock(), createElementBlock("div", _hoisted_2, [
            renderSlot(_ctx.$slots, "img"),
            (_ctx.$slots.interactions)
              ? (openBlock(), createElementBlock("div", _hoisted_3, [
                  createElementVNode("span", null, [
                    renderSlot(_ctx.$slots, "interactions")
                  ])
                ]))
              : createCommentVNode("v-if", true)
          ]))
        : createCommentVNode("v-if", true),
      (_ctx.$slots.text)
        ? (openBlock(), createElementBlock("div", _hoisted_4, [
            (_ctx.$slots.title)
              ? (openBlock(), createElementBlock("div", _hoisted_5, [
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

script.render = render;
script.__file = "src/components/dtCard.vue";

var components = {
  dtInput: script$1,
  dtCard: script,
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
