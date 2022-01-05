import { openBlock, createElementBlock, renderSlot, createCommentVNode } from 'vue';

var script$1 = {
  name: 'dtInput'
};

const _hoisted_1$1 = { type: "text" };

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("input", _hoisted_1$1))
}

script$1.render = render$1;
script$1.__file = "src/components/dtInput.vue";

var script = {
  name: "dtCard"
};

const _hoisted_1 = { class: "dt-card" };
const _hoisted_2 = {
  key: 0,
  class: "dt-card-title"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1, [
    (_ctx.$slots.title)
      ? (openBlock(), createElementBlock("div", _hoisted_2, [
          renderSlot(_ctx.$slots, "title")
        ]))
      : createCommentVNode("v-if", true)
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

export { plugin as default };
