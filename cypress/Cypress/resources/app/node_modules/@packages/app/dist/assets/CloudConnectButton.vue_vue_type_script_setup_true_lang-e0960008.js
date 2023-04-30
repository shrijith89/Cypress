import { d as defineComponent, A as useLoginConnectStore, u as useI18n, o as openBlock, c as createBlock, w as withCtx, f as createTextVNode, t as toDisplayString, e as unref, V as normalizeClass, D as ConnectIcon, dD as CypressIcon, h as _sfc_main$1 } from "./index-e70bedc5.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    class: null,
    utmMedium: null,
    utmContent: null
  },
  setup(__props) {
    const props = __props;
    const { openLoginConnectModal, user } = useLoginConnectStore();
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        class: normalizeClass(props.class),
        "prefix-icon": unref(user).isLoggedIn ? unref(ConnectIcon) : unref(CypressIcon),
        "prefix-icon-class": "icon-dark-white icon-light-transparent",
        onClick: _cache[0] || (_cache[0] = ($event) => unref(openLoginConnectModal)({ utmMedium: __props.utmMedium, utmContent: __props.utmContent }))
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(unref(user).isLoggedIn ? unref(t)("runs.connect.buttonProject") : unref(t)("runs.connect.buttonUser")), 1)
        ]),
        _: 1
      }, 8, ["class", "prefix-icon"]);
    };
  }
});
export {
  _sfc_main as _
};
