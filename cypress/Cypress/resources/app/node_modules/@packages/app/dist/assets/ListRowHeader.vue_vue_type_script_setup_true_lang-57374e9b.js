import { d as defineComponent, c6 as useSlots, o as openBlock, U as createElementBlock, B as createBaseVNode, s as renderSlot, c as createBlock, N as resolveDynamicComponent, V as normalizeClass, t as toDisplayString, e as unref, i as createCommentVNode } from "./index-e70bedc5.js";
const _hoisted_1 = { class: "rounded flex text-left w-full py-14px items-center" };
const _hoisted_2 = { class: "flex h-40px px-24px items-center" };
const _hoisted_3 = { class: "flex-grow h-auto border-gray-100 border-l-1px px-16px" };
const _hoisted_4 = { class: "font-normal text-sm text-gray-700 select-none" };
const _hoisted_5 = {
  key: 0,
  class: "flex px-16px items-center"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    description: { default: void 0 },
    icon: { default: void 0 },
    gray: { type: Boolean, default: false },
    bigHeader: { type: Boolean, default: false }
  },
  setup(__props) {
    const slots = useSlots();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          renderSlot(_ctx.$slots, "icon", {}, () => [
            (openBlock(), createBlock(resolveDynamicComponent(__props.icon), { class: "h-24px w-24px" }))
          ])
        ]),
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("h2", {
            class: normalizeClass(["text-indigo-500 whitespace-nowrap", { "text-size-18px leading-24px": __props.bigHeader }])
          }, [
            renderSlot(_ctx.$slots, "header")
          ], 2),
          createBaseVNode("p", _hoisted_4, [
            renderSlot(_ctx.$slots, "description", {}, () => [
              createBaseVNode("span", null, toDisplayString(__props.description), 1)
            ])
          ])
        ]),
        unref(slots).right ? (openBlock(), createElementBlock("div", _hoisted_5, [
          renderSlot(_ctx.$slots, "right")
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
export {
  _sfc_main as _
};
