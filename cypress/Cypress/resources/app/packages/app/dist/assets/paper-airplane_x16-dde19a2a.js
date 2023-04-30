import { d as defineComponent, o as openBlock, U as createElementBlock, s as renderSlot, V as normalizeClass, B as createBaseVNode } from "./index-e70bedc5.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    bg: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("code", {
        class: normalizeClass(["font-medium rounded-4px mx-4px px-8px pb-0 text-14px leading-24px inline-block", { "bg-gray-50": !__props.bg }])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const _hoisted_1 = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M15 8L1 1L3 8L1 15L15 8Z",
  fill: "#D0D2E0",
  class: "icon-light"
}, null, -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M3 8L1 15L15 8L1 1L3 8ZM3 8H6",
  stroke: "#1B1E2E",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon-dark"
}, null, -1);
const _hoisted_4 = [
  _hoisted_2,
  _hoisted_3
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_4);
}
const SendIcon = { name: "cy-paper-airplane_x16", render };
export {
  SendIcon as S,
  _sfc_main as _
};
