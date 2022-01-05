'use strict';

var vue = require('vue');

var script$1 = {
  name: 'dtInput'
};

const _hoisted_1$1 = { type: "text" };

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("input", _hoisted_1$1))
}

script$1.render = render$1;
script$1.__file = "src/components/dtInput.vue";

var script = {
  name: "dtCard",
  props: {
    type: String
  }
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
  return (vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(`dt-card-content type-${this.type}`)
  }, [
    vue.createElementVNode("div", _hoisted_1, [
      (_ctx.$slots.img)
        ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, [
            vue.renderSlot(_ctx.$slots, "img"),
            (_ctx.$slots.interactions)
              ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3, [
                  vue.createElementVNode("span", null, [
                    vue.renderSlot(_ctx.$slots, "interactions")
                  ])
                ]))
              : vue.createCommentVNode("v-if", true)
          ]))
        : vue.createCommentVNode("v-if", true),
      (_ctx.$slots.text)
        ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_4, [
            (_ctx.$slots.title)
              ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_5, [
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

script.render = render;
script.__file = "src/components/dtCard.vue";

var components = {
    dtInput: script$1,
    dtCard: script
};

const plugin = {
    install(Vue) {
        for (const prop in components) {
            if (components.hasOwnProperty(prop)) {
                const component = components[prop];
                Vue.component(component.name, component);
            }
        }
    }
};

module.exports = plugin;
