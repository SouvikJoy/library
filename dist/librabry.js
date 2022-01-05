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
  name: "dtCard"
};

const _hoisted_1 = { class: "dt-card" };
const _hoisted_2 = { class: "dt-card-title" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    vue.createElementVNode("div", _hoisted_2, [
      vue.renderSlot(_ctx.$slots, "title")
    ])
  ]))
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
