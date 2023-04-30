import { _ as _export_sfc, o as openBlock, U as createElementBlock, d as defineComponent, B as createBaseVNode, s as renderSlot, V as normalizeClass, a0 as Fragment, a1 as renderList, C as createVNode, c7 as __unplugin_components_1, w as withCtx, u as useI18n, g as gql, a as computed, e as unref, t as toDisplayString, i as createCommentVNode, c8 as h, c9 as getComponentAttributes, ca as cyStatusRunningSimpleX4, cb as cyStatusRunningSimpleX8, cc as cyStatusRunningOutlineX12, cd as cyStatusRunningOutlineX16, ce as cyStatusRunningOutlineX24, cf as cyStatusPassedSimpleX4, cg as cyStatusPassedSimpleX8, ch as cyStatusPassedSimpleX12, ci as cyStatusPassedSolidX16, cj as cyStatusPassedSolidX24, ck as cyStatusFailedSimpleX4, cl as cyStatusFailedSimpleX8, cm as cyStatusFailedSimpleX12, cn as cyStatusFailedSolidX16, co as cyStatusFailedSolidX24, cp as cyStatusQueuedSimpleX4, cq as cyStatusQueuedSimpleX8, cr as cyStatusQueuedOutlineX12, cs as cyStatusQueuedOutlineX16, ct as cyStatusQueuedOutlineX24, cu as cyStatusPlaceholderSimpleX4, cv as cyStatusPlaceholderSimpleX8, cw as cyStatusPlaceholderSolidX12, cx as cyStatusPlaceholderSolidX16, cy as cyStatusPlaceholderSolidX24, cz as cyStatusCancelledSimpleX4, cA as cyStatusCancelledSimpleX8, cB as cyStatusCancelledSolidX12, cC as cyStatusCancelledSolidX16, cD as cyStatusCancelledSolidX24, cE as cyStatusErroredSimpleX4, cF as cyStatusErroredSimpleX8, cG as cyStatusErroredSolidX12, cH as cyStatusErroredSolidX16, cI as cyStatusErroredSolidX24, cJ as cyStatusSkippedSimpleX4, cK as cyStatusSkippedSimpleX8, cL as cyStatusSkippedOutlineX12, cM as cyStatusSkippedOutlineX16, cN as cyStatusSkippedOutlineX24, cO as cyStatusPendingSimpleX4, cP as cyStatusPendingSimpleX8, cQ as cyStatusPendingOutlineX12, cR as cyStatusPendingOutlineX16, cS as cyStatusPendingOutlineX24, cT as ICON_COLOR_PROP_NAMES, k as ref, cU as useIntervalFn, l as watchEffect, ac as useI18n$1, f as createTextVNode, L as _sfc_main$E, c as createBlock, cV as _sfc_main$F, cW as lo, aJ as pushScopeId, aK as popScopeId, cX as G2, cY as DebugTestingProgress_SpecsDocument, m as watch, ai as normalizeStyle, cZ as TransitionGroup, N as resolveDynamicComponent, P as _sfc_main$G, c_ as Y2, c$ as R2, ad as I, d0 as J, d1 as K, d2 as Y, d3 as s1, d4 as t1, d5 as o1, d6 as a1, d7 as i1, d8 as K2, d9 as q0, da as R0, db as X0, dc as N0, dd as so, de as io, df as b1, aO as TransitionQuickFade, dg as O1, b$ as _sfc_main$H, dh as L1, bJ as createSlots, h as _sfc_main$J, di as $, b as useMutation, dj as SwitchTestingTypeAndRelaunchDocument, dk as SetTestsForDebugDocument, b7 as ErrorOutlineIcon, x as _sfc_main$K, r as resolveComponent, F as getUrlWithParams, dl as getUtmSource, dm as f1, dn as useVModel, v as mergeProps, dp as Transition, dq as P0, j as useQuery, n as nanoid, q as lodashExports, dr as DebugEmptyViewDocument, ds as DebugEmptyView_SetPreferencesDocument, dt as DebugEmptyView_RecordEventDocument, H as _sfc_main$M, W as WarningIcon, du as useSubscription$1, dv as DebugProgress_SpecsDocument, bo as useToggle, dw as DebugRunNavigation_MoveToRunDocument, A as useLoginConnectStore, c3 as _sfc_main$N, ae as useOnline, dx as useRelevantRun, dy as Debug_SpecsChangeDocument, dz as DebugDocument } from "./index-e70bedc5.js";
import { a as __unplugin_components_0, C as CommitIcon, _ as _sfc_main$I, u as useCohorts } from "./SpecNameDisplay.vue_vue_type_script_setup_true_lang-dd63d3dd.js";
import { d as dayjs, _ as __unplugin_components_0$1, u as useDurationFormat, D as DashboardCheckmark, a as utc, L as LockedProject } from "./locked-project_x48-1bbddeb3.js";
import { _ as _sfc_main$D, a as __unplugin_components_0$2 } from "./ResultCounts.vue_vue_type_script_setup_true_lang-6c66543f.js";
import { u as useSubscription } from "./graphql-daaba448.js";
import { p as posixify, _ as __unplugin_components_0$3 } from "./box-open_x48-750e8182.js";
import { _ as _sfc_main$L } from "./CloudConnectButton.vue_vue_type_script_setup_true_lang-e0960008.js";
const _sfc_main$C = {};
const _hoisted_1$w = { class: "rounded-full font-semibold bg-gray-100 h-2px ml-8px w-2px" };
function _sfc_render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$w);
}
const DebugLoadingDivider = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["render", _sfc_render$3]]);
const _hoisted_1$v = /* @__PURE__ */ createBaseVNode("div", { class: "rounded-full bg-gray-50 h-16px w-full" }, null, -1);
const _hoisted_2$m = [
  _hoisted_1$v
];
const _hoisted_3$k = { class: "ml-10px" };
const _hoisted_4$f = /* @__PURE__ */ createBaseVNode("div", { class: "rounded-full bg-gray-50 h-16px w-full" }, null, -1);
const _hoisted_5$c = [
  _hoisted_4$f
];
const _sfc_main$B = /* @__PURE__ */ defineComponent({
  props: {
    widthClass: null,
    dotClass: null,
    rows: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_i_cy_dot_solid_x4 = __unplugin_components_0;
      const _component_i_cy_chevron_right_x16 = __unplugin_components_1;
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", {
          class: normalizeClass(["border-t border-l border-r rounded-t-md bg-gray-50 border-0 border-gray-100 p-16px", __props.widthClass])
        }, [
          renderSlot(_ctx.$slots, "header")
        ], 2),
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.rows, (row, i) => {
          return openBlock(), createElementBlock("div", {
            key: i,
            class: normalizeClass(["bg-white border flex border-b-0 border-gray-100 p-16px items-center overflow-hidden last:border-b last:rounded-b-md", __props.widthClass])
          }, [
            createBaseVNode("div", null, [
              createVNode(_component_i_cy_dot_solid_x4, {
                class: normalizeClass(__props.dotClass)
              }, null, 8, ["class"])
            ]),
            createBaseVNode("div", {
              class: normalizeClass(["ml-10px", row[0]])
            }, _hoisted_2$m, 2),
            createBaseVNode("div", _hoisted_3$k, [
              createVNode(_component_i_cy_chevron_right_x16, { class: "icon-dark-gray-200" })
            ]),
            createBaseVNode("div", {
              class: normalizeClass(["ml-10px", row[1]])
            }, _hoisted_5$c, 2)
          ], 2);
        }), 128))
      ], 64);
    };
  }
});
const _hoisted_1$u = {
  "data-cy": "debug-loading",
  class: "p-30px"
};
const _hoisted_2$l = { class: "flex items-center" };
const _hoisted_3$j = /* @__PURE__ */ createBaseVNode("div", { class: "rounded-full bg-gray-50 h-16px w-344px" }, null, -1);
const _hoisted_4$e = /* @__PURE__ */ createBaseVNode("div", { class: "rounded-full bg-gray-50 h-8px ml-8px w-120px" }, null, -1);
const _hoisted_5$b = { class: "flex mt-15px items-center" };
const _hoisted_6$9 = /* @__PURE__ */ createBaseVNode("div", { class: "rounded-full bg-gray-50 h-16px w-72px" }, null, -1);
const _hoisted_7$8 = /* @__PURE__ */ createBaseVNode("div", { class: "rounded-full bg-gray-50 h-16px ml-8px w-160px" }, null, -1);
const _hoisted_8$5 = /* @__PURE__ */ createBaseVNode("div", { class: "rounded-full bg-gray-50 h-16px ml-8px w-72px" }, null, -1);
const _hoisted_9$3 = /* @__PURE__ */ createBaseVNode("div", { class: "rounded-full bg-gray-50 h-8px ml-8px w-80px" }, null, -1);
const _hoisted_10$3 = { class: "mt-24px" };
const _hoisted_11$3 = { class: "flex items center justify-between" };
const _hoisted_12$3 = { class: "flex items-center" };
const _hoisted_13$3 = /* @__PURE__ */ createBaseVNode("div", { class: "rounded-full bg-gray-100 h-16px ml-8px w-200px" }, null, -1);
const _hoisted_14$3 = { class: "flex mt-20px items-center" };
const _hoisted_15$2 = /* @__PURE__ */ createBaseVNode("div", { class: "rounded-full bg-gray-100 h-8px w-180px" }, null, -1);
const _hoisted_16$2 = /* @__PURE__ */ createBaseVNode("div", { class: "rounded-full bg-gray-100 h-8px ml-8px w-99px" }, null, -1);
const _hoisted_17$1 = /* @__PURE__ */ createBaseVNode("div", { class: "rounded-full bg-gray-100 h-8px ml-8px w-99px" }, null, -1);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("div", { class: "mt-12px" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "rounded-full bg-gray-100 h-20px w-120px" })
], -1);
const _hoisted_19 = { class: "mt-24px" };
const _hoisted_20 = { class: "flex items center justify-between" };
const _hoisted_21 = { class: "flex items-center" };
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("div", { class: "rounded-full bg-gray-100 h-16px ml-8px w-200px" }, null, -1);
const _hoisted_23 = { class: "flex mt-20px items-center" };
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("div", { class: "rounded-full bg-gray-100 h-8px w-180px" }, null, -1);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("div", { class: "rounded-full bg-gray-100 h-8px ml-8px w-99px" }, null, -1);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("div", { class: "rounded-full bg-gray-100 h-8px ml-8px w-99px" }, null, -1);
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("div", { class: "mt-12px" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "rounded-full bg-gray-100 h-20px w-120px" })
], -1);
const _sfc_main$A = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_i_cy_dot_solid_x4 = __unplugin_components_0;
      return openBlock(), createElementBlock("div", _hoisted_1$u, [
        createBaseVNode("div", null, [
          createBaseVNode("div", _hoisted_2$l, [
            _hoisted_3$j,
            createVNode(DebugLoadingDivider),
            _hoisted_4$e
          ]),
          createBaseVNode("div", _hoisted_5$b, [
            _hoisted_6$9,
            _hoisted_7$8,
            _hoisted_8$5,
            (openBlock(), createElementBlock(Fragment, null, renderList(4, (n) => {
              return openBlock(), createElementBlock(Fragment, { key: n }, [
                createVNode(DebugLoadingDivider),
                _hoisted_9$3
              ], 64);
            }), 64))
          ])
        ]),
        createBaseVNode("div", _hoisted_10$3, [
          createVNode(_sfc_main$B, {
            "width-class": "w-full",
            "dot-class": "icon-light-gray-50",
            rows: [["w-200px", "w-200px"], ["w-200px", "w-200px"], ["w-200px", "w-200px"]]
          }, {
            header: withCtx(() => [
              createBaseVNode("div", _hoisted_11$3, [
                createBaseVNode("div", null, [
                  createBaseVNode("div", _hoisted_12$3, [
                    createVNode(_component_i_cy_dot_solid_x4, { class: "icon-light-gray-100" }),
                    _hoisted_13$3
                  ]),
                  createBaseVNode("div", _hoisted_14$3, [
                    _hoisted_15$2,
                    createVNode(DebugLoadingDivider),
                    _hoisted_16$2,
                    createVNode(DebugLoadingDivider),
                    _hoisted_17$1
                  ])
                ]),
                _hoisted_18
              ])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_19, [
          createVNode(_sfc_main$B, {
            "width-class": "w-full",
            "dot-class": "icon-light-gray-50",
            rows: [["w-200px", "w-200px"], ["w-200px", "w-200px"]]
          }, {
            header: withCtx(() => [
              createBaseVNode("div", _hoisted_20, [
                createBaseVNode("div", null, [
                  createBaseVNode("div", _hoisted_21, [
                    createVNode(_component_i_cy_dot_solid_x4, { class: "icon-light-gray-100" }),
                    _hoisted_22
                  ]),
                  createBaseVNode("div", _hoisted_23, [
                    _hoisted_24,
                    createVNode(DebugLoadingDivider),
                    _hoisted_25,
                    createVNode(DebugLoadingDivider),
                    _hoisted_26
                  ])
                ]),
                _hoisted_27
              ])
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
});
const _hoisted_1$t = {
  class: "flex gap-8px items-center",
  "data-cy": "debug-results-holder"
};
const _hoisted_2$k = {
  key: 0,
  "data-cy": "debug-flaky-badge",
  class: "border rounded flex flex-row gap-8px items-center h-6 bg-orange-50 border-orange-200 text-sm text-orange-600 px-2 gap-x-1 border-1"
};
const _hoisted_3$i = {
  "data-cy": "total-flaky-tests",
  class: "font-medium pr-1 opacity-70"
};
const _hoisted_4$d = /* @__PURE__ */ createBaseVNode("div", { class: "w-px my-6px h-6 border-orange-200 border" }, null, -1);
const _hoisted_5$a = { class: "font-semibold pl-1" };
const _sfc_main$z = /* @__PURE__ */ defineComponent({
  props: {
    gql: null
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    gql`
fragment DebugResults on CloudRun {
  id
  totalPassed
  totalFailed
  totalPending
  totalSkipped
  totalFlakyTests
}
`;
    const results = computed(() => {
      return props.gql;
    });
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock("div", _hoisted_1$t, [
        createVNode(_sfc_main$D, {
          "total-passed": unref(results).totalPassed,
          "total-failed": unref(results).totalFailed,
          "total-skipped": unref(results).totalSkipped,
          "total-pending": unref(results).totalPending,
          order: ["PASSED", "FAILED", "SKIPPED", "PENDING"]
        }, null, 8, ["total-passed", "total-failed", "total-skipped", "total-pending"]),
        ((_a = unref(results)) == null ? void 0 : _a.totalFlakyTests) ? (openBlock(), createElementBlock("div", _hoisted_2$k, [
          createBaseVNode("span", _hoisted_3$i, toDisplayString(unref(results).totalFlakyTests), 1),
          _hoisted_4$d,
          createBaseVNode("span", _hoisted_5$a, toDisplayString(unref(t)("specPage.flaky.badgeLabel")), 1)
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const Pe = {
  running: {
    color: "indigo-400",
    use: "Runs, specs, groups, test results",
    variants: ["outline"],
    secondaryColor: "gray-100"
  },
  passed: {
    color: "jade-400",
    use: "Runs, specs, groups, test results",
    link: "https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Passed",
    variants: ["outline", "simple", "solid"]
  },
  failed: {
    color: "red-400",
    use: "Runs, specs, groups, test results",
    link: "https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Failed",
    variants: ["outline", "simple", "solid"]
  },
  unclaimed: {
    color: "gray-100",
    use: "Specs",
    variants: ["outline"]
  },
  placeholder: {
    color: "gray-300",
    use: "Placeholder",
    variants: ["solid"]
  },
  cancelled: {
    color: "gray-300",
    use: "Runs, specs, groups, test results",
    variants: ["outline", "solid"]
  },
  noTests: {
    color: "orange-400",
    use: "Runs, specs, groups",
    variants: ["outline", "solid"]
  },
  errored: {
    color: "orange-400",
    use: "Runs, specs, groups, test results",
    variants: ["outline", "solid"]
  },
  timedOut: {
    color: "orange-400",
    use: "Runs, specs, groups, test results",
    variants: ["outline", "solid"]
  },
  overLimit: {
    color: "orange-400",
    use: "Runs, specs, groups",
    link: "https://docs.cypress.io/faq/questions/dashboard-faq#What-happens-once-I-reach-the-test-results-limit",
    variants: ["outline", "solid"]
  },
  skipped: {
    color: "gray-400",
    use: "Test results",
    link: "https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Skipped",
    variants: ["outline"]
  },
  pending: {
    color: "gray-300",
    use: "Test results",
    link: "https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Pending",
    variants: ["outline"]
  }
}, ie = Pe, ke = ({
  body: e,
  compiledClasses: i,
  size: s,
  class: ee,
  interactiveColorsOnGroup: se,
  ...u
}) => {
  const S = Object.keys(u).reduce((I2, a) => (!ICON_COLOR_PROP_NAMES.includes(a) && a !== "name" && (I2[a] = u[a]), I2), {}), z = {
    width: s,
    height: s,
    viewBox: `0 0 ${s} ${s}`,
    fill: "none",
    innerHTML: e,
    ...S
  };
  return i.length && (z.class = i.join(" ")), z;
}, _ = ({
  status: e,
  statuses: i,
  size: s,
  ...ee
}) => {
  const se = e ? i[e] : i.placeholder, u = e ? ie[e] : ie.placeholder, { data: S, name: z } = se[`size${s}Icon`], I2 = ["inline-block"], { compiledClasses: a } = getComponentAttributes({
    name: z,
    strokeColor: u.color,
    size: s,
    availableSizes: [s],
    fillColor: u.secondaryColor
  });
  return ke({
    compiledClasses: [...a, ...I2],
    size: s,
    body: S,
    ...ee
  });
}, Fe = {
  running: {
    size4Icon: cyStatusRunningSimpleX4,
    size8Icon: cyStatusRunningSimpleX8,
    size12Icon: cyStatusRunningOutlineX12,
    size16Icon: cyStatusRunningOutlineX16,
    size24Icon: cyStatusRunningOutlineX24
  },
  passed: {
    size4Icon: cyStatusPassedSimpleX4,
    size8Icon: cyStatusPassedSimpleX8,
    size12Icon: cyStatusPassedSimpleX12,
    size16Icon: cyStatusPassedSolidX16,
    size24Icon: cyStatusPassedSolidX24
  },
  failed: {
    size4Icon: cyStatusFailedSimpleX4,
    size8Icon: cyStatusFailedSimpleX8,
    size12Icon: cyStatusFailedSimpleX12,
    size16Icon: cyStatusFailedSolidX16,
    size24Icon: cyStatusFailedSolidX24
  },
  unclaimed: {
    size4Icon: cyStatusQueuedSimpleX4,
    size8Icon: cyStatusQueuedSimpleX8,
    size12Icon: cyStatusQueuedOutlineX12,
    size16Icon: cyStatusQueuedOutlineX16,
    size24Icon: cyStatusQueuedOutlineX24
  },
  placeholder: {
    size4Icon: cyStatusPlaceholderSimpleX4,
    size8Icon: cyStatusPlaceholderSimpleX8,
    size12Icon: cyStatusPlaceholderSolidX12,
    size16Icon: cyStatusPlaceholderSolidX16,
    size24Icon: cyStatusPlaceholderSolidX24
  },
  cancelled: {
    size4Icon: cyStatusCancelledSimpleX4,
    size8Icon: cyStatusCancelledSimpleX8,
    size12Icon: cyStatusCancelledSolidX12,
    size16Icon: cyStatusCancelledSolidX16,
    size24Icon: cyStatusCancelledSolidX24
  },
  noTests: {
    size4Icon: cyStatusErroredSimpleX4,
    size8Icon: cyStatusErroredSimpleX8,
    size12Icon: cyStatusErroredSolidX12,
    size16Icon: cyStatusErroredSolidX16,
    size24Icon: cyStatusErroredSolidX24
  },
  errored: {
    size4Icon: cyStatusErroredSimpleX4,
    size8Icon: cyStatusErroredSimpleX8,
    size12Icon: cyStatusErroredSolidX12,
    size16Icon: cyStatusErroredSolidX16,
    size24Icon: cyStatusErroredSolidX24
  },
  timedOut: {
    size4Icon: cyStatusErroredSimpleX4,
    size8Icon: cyStatusErroredSimpleX8,
    size12Icon: cyStatusErroredSolidX12,
    size16Icon: cyStatusErroredSolidX16,
    size24Icon: cyStatusErroredSolidX24
  },
  overLimit: {
    size4Icon: cyStatusErroredSimpleX4,
    size8Icon: cyStatusErroredSimpleX8,
    size12Icon: cyStatusErroredSolidX12,
    size16Icon: cyStatusErroredSolidX16,
    size24Icon: cyStatusErroredSolidX24
  },
  skipped: {
    size4Icon: cyStatusSkippedSimpleX4,
    size8Icon: cyStatusSkippedSimpleX8,
    size12Icon: cyStatusSkippedOutlineX12,
    size16Icon: cyStatusSkippedOutlineX16,
    size24Icon: cyStatusSkippedOutlineX24
  },
  pending: {
    size4Icon: cyStatusPendingSimpleX4,
    size8Icon: cyStatusPendingSimpleX8,
    size12Icon: cyStatusPendingOutlineX12,
    size16Icon: cyStatusPendingOutlineX16,
    size24Icon: cyStatusPendingOutlineX24
  }
}, Ee = ({
  size: e = "24",
  status: i = "placeholder",
  ...s
}) => h("svg", _({ size: e, status: i, ...s, statuses: Fe }));
const _hoisted_1$s = ["data-cy"];
const _sfc_main$y = /* @__PURE__ */ defineComponent({
  props: {
    status: null,
    value: null
  },
  setup(__props) {
    const props = __props;
    const ICON_MAP = {
      PASSED: { textColor: "text-jade-400", type: "passed" },
      FAILED: { textColor: "text-red-400", type: "failed" },
      CANCELLED: { textColor: "text-gray-500", type: "cancelled" },
      ERRORED: { textColor: "text-orange-400", type: "errored" },
      RUNNING: { textColor: "text-indigo-500", type: "running" },
      NOTESTS: { textColor: "text-indigo-500", type: "noTests" },
      OVERLIMIT: { textColor: "text-indigo-500", type: "overLimit" },
      TIMEDOUT: { textColor: "text-indigo-500", type: "timedOut" }
    };
    const runNumberColor = computed(() => {
      if (props.status) {
        return ICON_MAP[props.status].textColor;
      }
      return "";
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "border rounded flex flex-row font-semibold bg-gray-50 border-gray-200 h-6 text-sm px-2 gap-x-1 items-center justify-center",
        "data-cy": `debug-runNumber-${props.status}`
      }, [
        createVNode(unref(Ee), {
          size: "16",
          status: unref(ICON_MAP)[props.status].type
        }, null, 8, ["status"]),
        createBaseVNode("span", {
          class: normalizeClass(unref(runNumberColor))
        }, toDisplayString(`#${props.value}`), 3)
      ], 8, _hoisted_1$s);
    };
  }
});
const formatDuration = (duration) => {
  return dayjs.duration(duration).format("HH[h] mm[m] ss[s]").replace(/^0+h /, "");
};
const formatCreatedAt = (createdAt) => {
  return dayjs(new Date(createdAt)).fromNow();
};
function useRunDateTimeInterval(maybeValuesRef) {
  const relativeCreatedAt = ref();
  const totalDuration = ref();
  const run = computed(() => unref(maybeValuesRef));
  const timeInterval = useIntervalFn(() => {
    totalDuration.value = formatDuration(dayjs().diff(dayjs(new Date(run.value.createdAt))));
    relativeCreatedAt.value = formatCreatedAt(run.value.createdAt);
  }, 1e3, {
    immediate: false,
    immediateCallback: true
  });
  watchEffect(() => {
    if (run.value.status === "RUNNING") {
      timeInterval.resume();
    } else {
      timeInterval.pause();
      totalDuration.value = formatDuration(run.value.totalDuration ?? 0);
      relativeCreatedAt.value = formatCreatedAt(run.value.createdAt);
    }
  });
  return {
    relativeCreatedAt,
    totalDuration
  };
}
const _withScopeId = (n) => (pushScopeId("data-v-5335f137"), n = n(), popScopeId(), n);
const _hoisted_1$r = {
  "data-cy": "debug",
  class: "flex flex-col gap-16px"
};
const _hoisted_2$j = {
  "data-cy": "debug-header",
  class: "flex flex-col w-full gap-y-2 overflow-hidden"
};
const _hoisted_3$h = { "data-cy": "header-top" };
const _hoisted_4$c = {
  key: 1,
  class: "border rounded border-gray-100 h-6 text-sm inline-block"
};
const _hoisted_5$9 = {
  class: "font-normal mx-px px-2 text-orange-500 items-center",
  "data-cy": "debug-commitsAhead"
};
const _hoisted_6$8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", {
  class: "text-lg text-gray-400 w-16px inline",
  "aria-hidden": "true"
}, " • ", -1));
const _hoisted_7$7 = { class: "font-normal text-sm text-indigo-500 inline" };
const _hoisted_8$4 = {
  "data-cy": "metadata",
  class: "flex flex-wrap font-normal text-sm text-gray-700 gap-x-2 items-center whitespace-nowrap children:flex children:items-center"
};
const _hoisted_9$2 = { class: "flex flex-row text-sm gap-x-2 items-center justify-center" };
const _hoisted_10$2 = {
  key: 0,
  "data-cy": "debug-header-branch"
};
const _hoisted_11$2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Branch Name:", -1));
const _hoisted_12$2 = {
  key: 1,
  "data-cy": "debug-header-commitHash"
};
const _hoisted_13$2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Commit Hash:", -1));
const _hoisted_14$2 = {
  key: 2,
  "data-cy": "debug-header-author"
};
const _hoisted_15$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Commit Author:", -1));
const _hoisted_16$1 = {
  key: 3,
  "data-cy": "debug-header-createdAt"
};
const _hoisted_17 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Run Total Duration:", -1));
const _sfc_main$x = /* @__PURE__ */ defineComponent({
  props: {
    gql: null,
    commitsAhead: null
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n$1();
    gql`
fragment DebugPageHeader on CloudRun {
  id
  runNumber
  createdAt
  status
  totalDuration
  commitInfo {
    sha
  }
  url
  ...RunResults
  commitInfo {
    authorName
    authorEmail
    summary
    branch
  }
}
`;
    const debug = computed(() => props.gql);
    const { relativeCreatedAt, totalDuration } = useRunDateTimeInterval(debug);
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
      const _component_i_cy_tech_branch_h_x16 = __unplugin_components_0$1;
      return openBlock(), createElementBlock("div", _hoisted_1$r, [
        createBaseVNode("div", _hoisted_2$j, [
          createBaseVNode("ul", _hoisted_3$h, [
            ((_b = (_a = unref(debug)) == null ? void 0 : _a.commitInfo) == null ? void 0 : _b.summary) ? (openBlock(), createElementBlock("li", {
              key: 0,
              class: normalizeClass(["font-medium text-lg text-gray-900 inline", { "mr-8px": props.commitsAhead }]),
              "data-cy": "debug-test-summary"
            }, toDisplayString(unref(debug).commitInfo.summary), 3)) : createCommentVNode("", true),
            props.commitsAhead ? (openBlock(), createElementBlock("li", _hoisted_4$c, [
              createBaseVNode("span", _hoisted_5$9, toDisplayString(unref(t)("debugPage.header.commitsAhead", props.commitsAhead)), 1)
            ])) : createCommentVNode("", true),
            _hoisted_6$8,
            createBaseVNode("li", _hoisted_7$7, [
              createVNode(_sfc_main$E, {
                "data-cy": "debug-header-dashboard-link",
                href: unref(debug).url || "#"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("debugPage.header.runUrl")), 1)
                ]),
                _: 1
              }, 8, ["href"])
            ])
          ]),
          createBaseVNode("ul", _hoisted_8$4, [
            createBaseVNode("li", _hoisted_9$2, [
              unref(debug).runNumber && unref(debug).status ? (openBlock(), createBlock(_sfc_main$y, {
                key: 0,
                status: unref(debug).status,
                value: unref(debug).runNumber
              }, null, 8, ["status", "value"])) : createCommentVNode("", true),
              createVNode(_sfc_main$z, {
                gql: props.gql,
                "data-cy": "debug-results"
              }, null, 8, ["gql"])
            ]),
            ((_d = (_c = unref(debug)) == null ? void 0 : _c.commitInfo) == null ? void 0 : _d.branch) ? (openBlock(), createElementBlock("li", _hoisted_10$2, [
              createVNode(_component_i_cy_tech_branch_h_x16, { class: "mr-1 mr-8px icon-dark-gray-300" }),
              _hoisted_11$2,
              createTextVNode(" " + toDisplayString(unref(debug).commitInfo.branch), 1)
            ])) : createCommentVNode("", true),
            ((_e = unref(debug).commitInfo) == null ? void 0 : _e.sha) ? (openBlock(), createElementBlock("li", _hoisted_12$2, [
              createVNode(unref(CommitIcon), { class: "h-16px fill-white mr-11px w-16px" }),
              _hoisted_13$2,
              createTextVNode(" " + toDisplayString((_g = (_f = unref(debug).commitInfo) == null ? void 0 : _f.sha) == null ? void 0 : _g.substring(0, 7)), 1)
            ])) : createCommentVNode("", true),
            ((_i = (_h = unref(debug)) == null ? void 0 : _h.commitInfo) == null ? void 0 : _i.authorName) ? (openBlock(), createElementBlock("li", _hoisted_14$2, [
              createVNode(_sfc_main$F, {
                class: "h-16px mr-8px w-16px",
                email: (_k = (_j = unref(debug)) == null ? void 0 : _j.commitInfo) == null ? void 0 : _k.authorEmail,
                "data-cy": "debug-header-avatar"
              }, null, 8, ["email"]),
              _hoisted_15$1,
              createTextVNode(" " + toDisplayString(unref(debug).commitInfo.authorName), 1)
            ])) : createCommentVNode("", true),
            unref(debug).createdAt ? (openBlock(), createElementBlock("li", _hoisted_16$1, [
              createVNode(unref(lo), {
                size: "16",
                class: "mr-9px",
                "stroke-color": "gray-500",
                "fill-color": "gray-50"
              }),
              _hoisted_17,
              createTextVNode(" " + toDisplayString(unref(totalDuration)) + " (" + toDisplayString(unref(relativeCreatedAt)) + ") ", 1)
            ])) : createCommentVNode("", true)
          ])
        ])
      ]);
    };
  }
});
const DebugPageHeader_vue_vue_type_style_index_0_scoped_5335f137_lang = "";
const DebugPageHeader = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["__scopeId", "data-v-5335f137"]]);
const _hoisted_1$q = {
  "data-cy": "debug-pending-splash",
  class: "flex p-12"
};
const _hoisted_2$i = { class: "flex flex-col w-full items-center justify-center" };
const _hoisted_3$g = {
  "data-cy": "title",
  class: "font-medium text-lg text-gray-900"
};
const _hoisted_4$b = {
  key: 0,
  "data-cy": "splash-subtitle",
  class: "font-normal mt-4px text-md text-gray-600"
};
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  props: {
    isCompletionScheduled: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n$1();
    const title = computed(() => {
      if (props.isCompletionScheduled) {
        return t("debugPage.pending.titleCompletionScheduled");
      }
      return t("debugPage.pending.title");
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$q, [
        createBaseVNode("div", _hoisted_2$i, [
          createVNode(unref(G2), { class: "mb-16px" }),
          createBaseVNode("span", _hoisted_3$g, toDisplayString(unref(title)), 1),
          !__props.isCompletionScheduled ? (openBlock(), createElementBlock("div", _hoisted_4$b, toDisplayString(unref(t)("debugPage.pending.failuresHere")), 1)) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
const _hoisted_1$p = {
  "data-cy": "debug-pending-counts",
  class: "text-gray-600"
};
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  props: {
    specs: null
  },
  setup(__props) {
    gql`
fragment DebugPendingRunCounts on CloudRun {
  id
  totalSpecs: totalInstanceCount
  completedSpecs: completedInstanceCount
}
`;
    const { t } = useI18n$1();
    return (_ctx, _cache) => {
      var _a, _b, _c;
      return openBlock(), createElementBlock("span", _hoisted_1$p, toDisplayString(unref(t)("debugPage.specCounts.whenRunning", { n: ((_a = __props.specs) == null ? void 0 : _a.totalSpecs) || 0, completed: ((_b = __props.specs) == null ? void 0 : _b.completedSpecs) || 0, total: ((_c = __props.specs) == null ? void 0 : _c.totalSpecs) || 0 })), 1);
    };
  }
});
const _hoisted_1$o = {
  "data-cy": "debug-testing-progress",
  class: "border rounded border-gray-100 relative overflow-hidden"
};
const _hoisted_2$h = { class: "flex text-md py-14px px-16px text-gray-900" };
const _hoisted_3$f = {
  "data-cy": "title",
  class: "font-medium"
};
const _hoisted_4$a = { key: 0 };
const _hoisted_5$8 = { key: 1 };
const _hoisted_6$7 = { key: 2 };
const _hoisted_7$6 = { class: "font-normal before-dot" };
const _hoisted_8$3 = { class: "bg-gray-50 h-4px w-full bottom-0 absolute" };
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  props: {
    runId: null
  },
  setup(__props) {
    const props = __props;
    gql`
subscription DebugTestingProgress_Specs($id: ID!) {
  relevantRunSpecChange(runId: $id) {
    id
    ...DebugPendingRunCounts
      scheduledToCompleteAt
  }
}
`;
    const { t } = useI18n$1();
    const specs = useSubscription({ query: DebugTestingProgress_SpecsDocument, variables: { id: props.runId } });
    const run = computed(() => {
      var _a;
      return (_a = specs.data.value) == null ? void 0 : _a.relevantRunSpecChange;
    });
    const specCompletion = computed(() => {
      if (run.value && run.value.totalSpecs && run.value.completedSpecs) {
        return run.value.completedSpecs / run.value.totalSpecs * 100;
      }
      return 0;
    });
    const timeRemaining = ref();
    const scheduledCompletionExpired = ref(false);
    const remainingInterval = useIntervalFn(() => {
      var _a;
      const scheduledToCompleteAt = (_a = run.value) == null ? void 0 : _a.scheduledToCompleteAt;
      if (scheduledToCompleteAt) {
        const durationRemaining = dayjs(scheduledToCompleteAt).diff(dayjs());
        timeRemaining.value = dayjs.duration(durationRemaining).format("H[h] m[m] s[s]").replace(/^0h /, "").replace(/^0m /, "");
        if (durationRemaining <= 0) {
          scheduledCompletionExpired.value = true;
          timeRemaining.value = void 0;
          remainingInterval.pause();
        }
      }
    }, 1e3, {
      immediate: false,
      immediateCallback: true
    });
    watch([() => {
      var _a;
      return (_a = run.value) == null ? void 0 : _a.scheduledToCompleteAt;
    }], ([scheduledToCompleteAt]) => {
      scheduledCompletionExpired.value = false;
      if (scheduledToCompleteAt) {
        remainingInterval.resume();
      } else {
        remainingInterval.pause();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$o, [
        createBaseVNode("div", _hoisted_2$h, [
          createBaseVNode("div", _hoisted_3$f, [
            timeRemaining.value ? (openBlock(), createElementBlock("span", _hoisted_4$a, toDisplayString(unref(t)("debugPage.pending.scheduledTime", { time: timeRemaining.value })), 1)) : scheduledCompletionExpired.value ? (openBlock(), createElementBlock("span", _hoisted_5$8, toDisplayString(unref(t)("debugPage.pending.scheduledCompletionExpired")), 1)) : (openBlock(), createElementBlock("span", _hoisted_6$7, toDisplayString(unref(t)("debugPage.pending.title")), 1))
          ]),
          createBaseVNode("div", _hoisted_7$6, [
            createVNode(_sfc_main$v, { specs: unref(run) }, null, 8, ["specs"])
          ])
        ]),
        createBaseVNode("div", _hoisted_8$3, [
          createBaseVNode("div", {
            "data-cy": "progress",
            class: "bg-indigo-600 h-4px transition-all duration-500",
            style: normalizeStyle({ width: unref(specCompletion) + "%" })
          }, null, 4)
        ])
      ]);
    };
  }
});
const DebugTestingProgress_vue_vue_type_style_index_0_scoped_b52cb29a_lang = "";
const DebugTestingProgress = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__scopeId", "data-v-b52cb29a"]]);
const _sfc_main$t = {};
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createBlock(TransitionGroup, {
    "enter-active-class": "transition duration-200 ease-out",
    "enter-from-class": "translate-y-1 opacity-0",
    "enter-to-class": "translate-y-0 opacity-100",
    "leave-active-class": "transition duration-150 ease-in",
    "leave-from-class": "translate-y-0 opacity-100",
    "leave-to-class": "translate-y-1 opacity-0"
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  });
}
const TransitionGroupQuickFade = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$2]]);
const _hoisted_1$n = {
  class: "font-normal text-sm inline-flex",
  "data-cy": "tooltip-content"
};
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  props: {
    icon: null,
    popperText: null,
    url: null
  },
  setup(__props) {
    const props = __props;
    const ICON_MAP = {
      "TERMINAL_LOG": Y2,
      "IMAGE_SCREENSHOT": R2,
      "PLAY": I
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$G, {
        placement: "bottom",
        "data-cy": `artifact-for-${__props.icon}`,
        distance: 8
      }, {
        popper: withCtx(() => [
          createBaseVNode("span", _hoisted_1$n, toDisplayString(__props.popperText), 1)
        ]),
        default: withCtx(() => [
          createVNode(_sfc_main$E, {
            class: "flex h-24px w-24px justify-center items-center hocus:rounded-md group hocus:border-1px hocus:border-indigo-500",
            "data-cy": `${__props.icon}-button`,
            href: props.url || "#",
            "use-default-hocus": true,
            "aria-label": __props.popperText
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(ICON_MAP[__props.icon]), {
                "stroke-color": "gray-600",
                "fill-color": "gray-100",
                "hocus-stroke-color": "indigo-500",
                "hocus-fill-color": "indigo-100",
                "interactive-colors-on-group": ""
              }))
            ]),
            _: 1
          }, 8, ["data-cy", "href", "aria-label"])
        ]),
        _: 1
      }, 8, ["data-cy"]);
    };
  }
});
const _hoisted_1$m = {
  "data-cy": "layered-browser-icons",
  class: "flex mr-8px pl-8px"
};
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  props: {
    browsers: null
  },
  setup(__props) {
    const props = __props;
    const results = computed(() => {
      if (props.browsers) {
        return props.browsers.map((browserType) => {
          return {
            icon: BROWSER_MAP[browserType],
            name: `browser-icon-${browserType.toLowerCase().replaceAll(" ", "_")}`
          };
        });
      }
      return [];
    });
    const BROWSER_MAP = {
      "CHROME": J,
      "CHROME BETA": K,
      "CHROME-CANARY": Y,
      "SAFARI": s1,
      "FIREFOX": t1,
      "EDGE": o1,
      "WEBKIT": a1,
      "ELECTRON": i1
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("ul", _hoisted_1$m, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(results), (result, i) => {
          return openBlock(), createElementBlock("li", {
            key: i,
            class: normalizeClass(["rounded-full rounded flex h-5 -ml-8px w-5 items-center justify-center", unref(results).length > 1 ? "bg-gray-50" : ""])
          }, [
            (openBlock(), createBlock(resolveDynamicComponent(result.icon), {
              "data-cy": result.name,
              size: "16"
            }, null, 8, ["data-cy"]))
          ], 2);
        }), 128))
      ]);
    };
  }
});
const _hoisted_1$l = {
  "data-cy": "stats-metadata",
  class: "flex flex-wrap font-normal text-sm w-full text-gray-700 gap-x-2 items-center whitespace-nowrap stats-metadata-class children:flex children:items-center"
};
const _hoisted_2$g = { key: 0 };
const _hoisted_3$e = ["data-cy"];
const _hoisted_4$9 = {
  key: 0,
  class: "flex inline-flex items-center"
};
const _hoisted_5$7 = { class: "sr-only" };
const _hoisted_6$6 = {
  key: 1,
  class: "flex inline-flex items-center"
};
const _hoisted_7$5 = { class: "sr-only" };
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  props: {
    order: null,
    specDuration: null,
    testing: null,
    groups: null,
    groupName: null
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    gql`
  fragment StatsMetadata_Groups on CloudRunGroup {
    id
    groupName
    browser {
      id
      formattedName
      formattedNameWithVersion
    }
    os {
      id
      name
      nameWithVersion
    }
  }
`;
    const OS_MAP = {
      "LINUX": q0,
      "MAC": R0,
      "WINDOWS": X0,
      "GROUP": N0
    };
    const TESTING_MAP = {
      "e2e": so,
      "component": io
    };
    const TESTING_TITLE_MAP = {
      "e2e": "E2E",
      "component": "Component"
    };
    const results = computed(() => {
      if (props.order) {
        return props.order.map((status) => ORDER_MAP.value[status]);
      }
      return [];
    });
    const arrMapping = computed(() => {
      const acc = { browsers: [], oses: [], firstBrowser: "", firstOs: "" };
      const uniqueBrowsers = /* @__PURE__ */ new Set();
      const uniqueOSes = /* @__PURE__ */ new Set();
      if (props.groups) {
        props.groups.forEach((group, index) => {
          const browserName = group.browser.formattedName.toUpperCase();
          const osName = group.os.name.toUpperCase();
          uniqueBrowsers.add(browserName);
          uniqueOSes.add(osName);
          if (index === 0) {
            acc.firstBrowser = group.browser.formattedNameWithVersion;
            acc.firstOs = group.os.nameWithVersion;
          }
        });
      }
      acc.browsers = Array.from(uniqueBrowsers).sort();
      acc.oses = Array.from(uniqueOSes);
      return acc;
    });
    const ORDER_MAP = computed(() => {
      return {
        "DURATION": {
          value: props.specDuration,
          icon: lo,
          name: "spec-duration"
        },
        "OS": {
          value: arrMapping.value.firstOs,
          icon: OS_MAP[arrMapping.value.oses[0]],
          name: "operating-system"
        },
        "BROWSER": {
          value: arrMapping.value.firstBrowser,
          icon: arrMapping.value.browsers,
          name: "browser"
        },
        "TESTING": {
          value: TESTING_TITLE_MAP[props.testing],
          icon: TESTING_MAP[props.testing],
          name: "testing-type"
        },
        "GROUPS": {
          value: t("debugPage.stats.groups", props.groups.length),
          icon: K2,
          name: "group-server"
        },
        "G_OS": {
          value: t("debugPage.stats.operatingSystems", arrMapping.value.oses.length),
          icon: OS_MAP["GROUP"],
          name: "operating-system-groups"
        },
        "G_BROWSERS": {
          value: t("debugPage.stats.browsers", arrMapping.value.browsers.length),
          icon: arrMapping.value.browsers,
          name: "browser-groups"
        },
        "GROUP_NAME": {
          value: props.groupName,
          icon: K2,
          name: "group_name"
        }
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("ul", _hoisted_1$l, [
        _ctx.$slots.prefix ? (openBlock(), createElementBlock("li", _hoisted_2$g, [
          renderSlot(_ctx.$slots, "prefix", {}, void 0, true)
        ])) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(results), (result, i) => {
          return openBlock(), createElementBlock("li", {
            key: i,
            "data-cy": `metaData-Results-${result.name}`,
            class: "py-1"
          }, [
            result.value && (result.name === "browser" || result.name === "browser-groups") ? (openBlock(), createElementBlock("span", _hoisted_4$9, [
              createVNode(_sfc_main$r, {
                browsers: result.icon,
                "data-cy": `${result.name} ${result.value}`
              }, null, 8, ["browsers", "data-cy"]),
              createBaseVNode("span", _hoisted_5$7, toDisplayString(result.name), 1),
              createTextVNode(" " + toDisplayString(result.value), 1)
            ])) : result.value ? (openBlock(), createElementBlock("span", _hoisted_6$6, [
              (openBlock(), createBlock(resolveDynamicComponent(result.icon), {
                class: "mr-8px text-gray-500",
                "stroke-color": "gray-500",
                "fill-color": "gray-100",
                "data-cy": `${result.name} ${result.value}`
              }, null, 8, ["data-cy"])),
              createBaseVNode("span", _hoisted_7$5, toDisplayString(result.name), 1),
              createTextVNode(" " + toDisplayString(result.value), 1)
            ])) : createCommentVNode("", true)
          ], 8, _hoisted_3$e);
        }), 128))
      ]);
    };
  }
});
const StatsMetadata_vue_vue_type_style_index_0_scoped_9f766025_lang = "";
const StatsMetaData = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__scopeId", "data-v-9f766025"]]);
const getDebugArtifacts = (instance, t) => {
  const debugArtifacts = [];
  if ((instance == null ? void 0 : instance.hasStdout) && instance.stdoutUrl) {
    debugArtifacts.push({ icon: "TERMINAL_LOG", text: t("debugPage.artifacts.stdout"), url: instance.stdoutUrl });
  }
  if ((instance == null ? void 0 : instance.hasScreenshots) && instance.screenshotsUrl) {
    debugArtifacts.push({ icon: "IMAGE_SCREENSHOT", text: t("debugPage.artifacts.screenshots"), url: instance.screenshotsUrl });
  }
  if ((instance == null ? void 0 : instance.hasVideo) && instance.videoUrl) {
    debugArtifacts.push({ icon: "PLAY", text: t("debugPage.artifacts.video"), url: instance.videoUrl });
  }
  return debugArtifacts;
};
const _hoisted_1$k = {
  class: "flex flex-start flex-row font-normal border-b-gray-100 h-12 text-base text-gray-700 gap-x-2.5 items-center non-italic",
  "data-cy": "test-failed-metadata"
};
const _hoisted_2$f = {
  "data-cy": "debug-artifacts",
  class: "flex flex-grow space-x-4.5 opacity-0 px-18px justify-end grouped-row-artifacts"
};
const _hoisted_3$d = ["data-cy"];
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  props: {
    failedTests: null,
    groups: null
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const debugArtifacts = computed(() => {
      return props.failedTests.reduce((acc, curr) => {
        var _a;
        acc[((_a = curr.instance) == null ? void 0 : _a.groupId) ?? ""] = getDebugArtifacts(curr.instance, t);
        return acc;
      }, {});
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(TransitionGroupQuickFade, null, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(props.groups, (group, j) => {
            return openBlock(), createElementBlock("div", {
              key: j,
              class: "flex flex-col flex-start w-full pl-16px justify-center grouped-row-class hover:bg-gray-50",
              "data-cy": "grouped-row"
            }, [
              createBaseVNode("div", _hoisted_1$k, [
                createVNode(StatsMetaData, {
                  order: ["GROUP_NAME", "OS", "BROWSER"],
                  groups: [group],
                  "group-name": group.groupName
                }, null, 8, ["groups", "group-name"]),
                createBaseVNode("div", _hoisted_2$f, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(debugArtifacts)[group.id], (artifact, l) => {
                    return openBlock(), createElementBlock("div", {
                      key: l,
                      "data-cy": `artifact-${artifact.icon}`
                    }, [
                      createVNode(_sfc_main$s, {
                        icon: artifact.icon,
                        "popper-text": artifact.text,
                        url: artifact.url
                      }, null, 8, ["icon", "popper-text", "url"])
                    ], 8, _hoisted_3$d);
                  }), 128))
                ])
              ])
            ]);
          }), 128))
        ]),
        _: 1
      });
    };
  }
});
const GroupedDebugFailedTest_vue_vue_type_style_index_0_scoped_a2de76b4_lang = "";
const GroupedDebugFailedTestVue = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-a2de76b4"]]);
const _hoisted_1$j = {
  "data-cy": "test-row",
  class: "flex flex-row font-normal h-12 text-base text-gray-700 items-center non-italic"
};
const _hoisted_2$e = ["data-cy"];
const _hoisted_3$c = { class: "sr-only" };
const _hoisted_4$8 = { "data-cy": "tooltip-content" };
const _hoisted_5$6 = {
  key: 0,
  "data-cy": "debug-artifacts",
  class: "flex flex-grow opacity-0 px-18px gap-16px justify-end test-row-artifacts"
};
const _hoisted_6$5 = ["data-cy"];
const _hoisted_7$4 = {
  key: 0,
  "data-cy": "debug-failed-test-groups",
  class: "divide-y rounded border-gray-100 border-1"
};
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  props: {
    failedTestsResult: null,
    groups: null,
    expandable: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const failedTestData = computed(() => {
      const runInstance = props.failedTestsResult[0].instance;
      const titleParts = props.failedTestsResult[0].titleParts;
      let isFirstMiddleAdded = false;
      const mappedTitleParts = titleParts.map((titlePart, index, parts) => {
        if (index === 0) {
          return {
            text: titlePart,
            type: "SHOW_FULL"
          };
        }
        if (index === parts.length - 1) {
          return [
            {
              text: titlePart.slice(0, titlePart.length - 15),
              type: "LAST-PART-START"
            },
            {
              text: titlePart.slice(titlePart.length - 15),
              type: "LAST-PART-END"
            }
          ];
        }
        if (index === parts.length - 2 && parts.length >= 3) {
          return {
            text: titlePart,
            type: "SHOW_FULL"
          };
        }
        if (!isFirstMiddleAdded && parts.length > 3) {
          isFirstMiddleAdded = true;
          return [
            {
              text: "...",
              type: "ELLIPSIS"
            },
            {
              text: titlePart,
              type: "MIDDLE"
            }
          ];
        }
        return { text: titlePart, type: "MIDDLE" };
      }).flat();
      const debugArtifacts = getDebugArtifacts(runInstance, t);
      return {
        debugArtifacts,
        mappedTitleParts
      };
    });
    const middlePartText = computed(() => {
      return failedTestData.value.mappedTitleParts.filter((item) => item.type === "MIDDLE").map((item) => item.text).join(" > ");
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$j, [
          createVNode(unref(Ee), {
            size: "16",
            status: "failed",
            "data-cy": "failed-icon",
            class: "min-w-16px isolate"
          }),
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(failedTestData).mappedTitleParts, ({ text, type }, index) => {
            return openBlock(), createElementBlock(Fragment, {
              key: `${text}-${index}`
            }, [
              index !== 0 && type !== "LAST-PART-END" ? (openBlock(), createBlock(unref(b1), {
                key: 0,
                "data-cy": `titleParts-${index}-chevron`,
                size: "8",
                "stroke-color": "gray-200",
                "fill-color": "gray-200",
                class: normalizeClass(["shrink-0", type === "MIDDLE" ? "hidden lg:block" : type === "ELLIPSIS" ? "lg:hidden" : ""])
              }, null, 8, ["data-cy", "class"])) : createCommentVNode("", true),
              createBaseVNode("span", {
                "data-cy": `titleParts-${index}-title`,
                class: normalizeClass(type === "ELLIPSIS" ? "px-2.5 shrink-0 lg:hidden" : type === "MIDDLE" ? "truncate px-2.5 hidden lg:block" : type === "LAST-PART-END" ? "shrink-0 whitespace-pre" : type === "LAST-PART-START" ? "pl-2.5 truncate whitespace-pre" : "px-2.5 truncate")
              }, [
                type === "ELLIPSIS" ? (openBlock(), createBlock(_sfc_main$G, { key: 0 }, {
                  popper: withCtx(() => [
                    createBaseVNode("span", _hoisted_4$8, toDisplayString(unref(middlePartText)), 1)
                  ]),
                  default: withCtx(() => [
                    createBaseVNode("button", null, toDisplayString(text), 1),
                    createBaseVNode("span", _hoisted_3$c, toDisplayString(unref(middlePartText)), 1)
                  ]),
                  _: 2
                }, 1024)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(text), 1)
                ], 64))
              ], 10, _hoisted_2$e)
            ], 64);
          }), 128)),
          !props.expandable ? (openBlock(), createElementBlock("div", _hoisted_5$6, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(failedTestData).debugArtifacts, (result, i) => {
              return openBlock(), createElementBlock("div", {
                key: i,
                "data-cy": `artifact--${result.icon}`
              }, [
                createVNode(_sfc_main$s, {
                  icon: result.icon,
                  "popper-text": result.text,
                  url: result.url
                }, null, 8, ["icon", "popper-text", "url"])
              ], 8, _hoisted_6$5);
            }), 128))
          ])) : createCommentVNode("", true)
        ]),
        createVNode(TransitionQuickFade, null, {
          default: withCtx(() => [
            props.expandable ? (openBlock(), createElementBlock("div", _hoisted_7$4, [
              createVNode(GroupedDebugFailedTestVue, {
                "failed-tests": props.failedTestsResult,
                groups: props.groups
              }, null, 8, ["failed-tests", "groups"])
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ], 64);
    };
  }
});
const DebugFailedTest_vue_vue_type_style_index_0_scoped_5c172f21_lang = "";
const DebugFailedTest = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-5c172f21"]]);
const _hoisted_1$i = {
  "data-cy": "debug-spec-col",
  class: "flex flex-col grid gap-24px self-stretch"
};
const _hoisted_2$d = {
  "data-cy": "debug-spec-item",
  class: "rounded flex flex-col border-gray-100 border-t-1px border-x-1px w-full overflow-hidden items-start box-border"
};
const _hoisted_3$b = {
  "data-cy": "debug-spec-header",
  class: "rounded-t flex flex-row bg-gray-50 border-b-1px border-b-gray-100 w-full py-12px items-center"
};
const _hoisted_4$7 = {
  "data-cy": "spec-contents",
  class: "flex w-full grid px-18px gap-y-8px items-center"
};
const _hoisted_5$5 = { class: "flex-grow flex w-full gap-x-2 truncate items-center" };
const _hoisted_6$4 = ["aria-label", "onClick"];
const _hoisted_7$3 = {
  class: "text-center text-sm max-w-240px",
  "data-cy": "open-in-ide-tooltip"
};
const _hoisted_8$2 = ["aria-label"];
const _hoisted_9$1 = {
  class: "text-center text-sm max-w-240px",
  "data-cy": "open-in-ide-disabled-tooltip"
};
const _hoisted_10$1 = {
  "data-cy": "spec-path",
  class: "flex-grow text-base non-italic truncate"
};
const _hoisted_11$1 = { class: "font-normal text-gray-600" };
const _hoisted_12$1 = { class: "inline-flex items-center" };
const _hoisted_13$1 = { "data-cy": "spec-header-metadata" };
const _hoisted_14$1 = { class: "mr-16px" };
const _hoisted_15 = {
  class: "flex flex-col text-sm max-w-350px items-center",
  "data-cy": "run-all-failures-tooltip"
};
const _hoisted_16 = { class: "text-center" };
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  props: {
    spec: null,
    testResults: null,
    groups: null,
    testingType: null,
    foundLocally: { type: Boolean },
    matchesCurrentTestingType: { type: Boolean }
  },
  emits: ["switchTestingType"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const { t } = useI18n();
    const durationFormatter = (val) => {
      return unref(useDurationFormat(val ?? 0));
    };
    const debugResultsCalc = (value, formatter) => {
      if (!value) {
        return "";
      }
      const formattedMin = formatter ? formatter(value.min) : value.min;
      const formattedMax = formatter ? formatter(value.max) : value.max;
      if (formattedMin === formattedMax) {
        return formattedMin;
      }
      return `${formattedMin}-${formattedMax}`;
    };
    const specData = computed(() => {
      return {
        path: props.spec.path,
        fileName: props.spec.fileName,
        fileExtension: props.spec.fileExtension,
        failedTests: props.testResults,
        testsPassed: debugResultsCalc(props.spec.testsPassed),
        testsFailed: debugResultsCalc(props.spec.testsFailed),
        testsPending: debugResultsCalc(props.spec.testsPending),
        specDuration: debugResultsCalc(props.spec.specDuration, durationFormatter),
        groups: props.groups,
        testingType: props.testingType,
        fullPath: props.spec.fullPath
      };
    });
    const groupsPerTest = computed(() => {
      return Object.keys(props.testResults).reduce((acc, currThumbprint) => {
        acc[currThumbprint] = props.testResults[currThumbprint].map((test) => {
          var _a;
          return props.groups[((_a = test.instance) == null ? void 0 : _a.groupId) || ""];
        });
        return acc;
      }, {});
    });
    const runAllFailuresState = computed(() => {
      if (!props.matchesCurrentTestingType) {
        return {
          disabled: true,
          message: t("debugPage.runFailures.switchTestingTypeInfo", { n: Object.keys(props.testResults).length, testingType: props.testingType }),
          cta: {
            message: t("debugPage.runFailures.switchTestingTypeAction", { testingType: props.testingType }),
            action: () => emits("switchTestingType", props.testingType)
          }
        };
      }
      if (!props.foundLocally) {
        return {
          disabled: true,
          message: t("debugPage.runFailures.notFoundLocally")
        };
      }
      return { disabled: false };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$i, [
        createBaseVNode("div", _hoisted_2$d, [
          createBaseVNode("div", _hoisted_3$b, [
            createBaseVNode("div", _hoisted_4$7, [
              createBaseVNode("div", _hoisted_5$5, [
                __props.foundLocally ? (openBlock(), createBlock(_sfc_main$G, {
                  key: 0,
                  placement: "bottom",
                  color: "dark",
                  distance: 8
                }, {
                  popper: withCtx(() => [
                    createBaseVNode("div", _hoisted_7$3, toDisplayString(unref(t)("debugPage.openFile.openInIDE")), 1)
                  ]),
                  default: withCtx(() => [
                    createVNode(_sfc_main$H, {
                      "file-path": unref(specData).fullPath
                    }, {
                      default: withCtx(({ onClick }) => [
                        createBaseVNode("button", {
                          class: "rounded-md border-1px border-gray-100 p-4px group hocus:border-indigo-200",
                          "aria-label": unref(t)("debugPage.openFile.openInIDE"),
                          onClick
                        }, [
                          createVNode(unref(O1), {
                            "stroke-color": "gray-500",
                            "fill-color": "gray-100",
                            "hocus-stroke-color": "indigo-400",
                            "hocus-fill-color": "indigo-200",
                            size: "16",
                            "interactive-colors-on-group": "",
                            class: "min-w-16px"
                          })
                        ], 8, _hoisted_6$4)
                      ]),
                      _: 1
                    }, 8, ["file-path"])
                  ]),
                  _: 1
                })) : (openBlock(), createBlock(_sfc_main$G, {
                  key: 1,
                  placement: "bottom",
                  color: "dark",
                  distance: 8
                }, {
                  popper: withCtx(() => [
                    createBaseVNode("div", _hoisted_9$1, toDisplayString(unref(t)("debugPage.openFile.notFoundLocally")), 1)
                  ]),
                  default: withCtx(() => [
                    createBaseVNode("button", {
                      "aria-disabled": "",
                      "aria-label": unref(t)("debugPage.openFile.notFoundLocally"),
                      class: "rounded-md border-1px border-gray-100 p-4px"
                    }, [
                      createVNode(unref(L1), {
                        "stroke-color": "gray-500",
                        "fill-color": "gray-100",
                        size: "16",
                        class: "min-w-16px"
                      })
                    ], 8, _hoisted_8$2)
                  ]),
                  _: 1
                })),
                createBaseVNode("div", _hoisted_10$1, [
                  createBaseVNode("span", _hoisted_11$1, toDisplayString(unref(specData).path), 1),
                  createBaseVNode("span", _hoisted_12$1, [
                    createVNode(_sfc_main$I, {
                      "spec-file-name": unref(specData).fileName,
                      "spec-file-extension": unref(specData).fileExtension
                    }, null, 8, ["spec-file-name", "spec-file-extension"])
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_13$1, [
                createVNode(TransitionQuickFade, { mode: "out-in" }, {
                  default: withCtx(() => [
                    Object.keys(unref(specData).groups).length === 1 ? (openBlock(), createBlock(StatsMetaData, {
                      key: "single",
                      order: ["DURATION", "OS", "BROWSER", "TESTING"],
                      "spec-duration": unref(specData).specDuration,
                      testing: unref(specData).testingType,
                      groups: Object.values(unref(specData).groups)
                    }, {
                      prefix: withCtx(() => [
                        createVNode(_sfc_main$D, {
                          "data-cy": "debugHeader-results",
                          "total-failed": unref(specData).testsFailed,
                          "total-passed": unref(specData).testsPassed,
                          "total-pending": unref(specData).testsPending,
                          order: ["FAILED", "PASSED", "PENDING"]
                        }, null, 8, ["total-failed", "total-passed", "total-pending"])
                      ]),
                      _: 1
                    }, 8, ["spec-duration", "testing", "groups"])) : Object.keys(unref(specData).groups).length > 1 ? (openBlock(), createBlock(StatsMetaData, {
                      key: "multiple",
                      order: ["DURATION", "GROUPS", "G_OS", "G_BROWSERS", "TESTING"],
                      "spec-duration": unref(specData).specDuration,
                      testing: unref(specData).testingType,
                      groups: Object.values(unref(specData).groups)
                    }, {
                      prefix: withCtx(() => [
                        createVNode(_sfc_main$D, {
                          "data-cy": "debugHeader-results",
                          "total-failed": unref(specData).testsFailed,
                          "total-passed": unref(specData).testsPassed,
                          "total-pending": unref(specData).testsPending,
                          order: ["FAILED", "PASSED", "PENDING"]
                        }, null, 8, ["total-failed", "total-passed", "total-pending"])
                      ]),
                      _: 1
                    }, 8, ["spec-duration", "testing", "groups"])) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_14$1, [
              createVNode(_sfc_main$G, {
                placement: "bottom",
                color: "dark",
                "is-interactive": !!unref(runAllFailuresState).cta,
                disabled: !unref(runAllFailuresState).disabled,
                distance: 8
              }, createSlots({
                default: withCtx(() => [
                  createVNode(_sfc_main$J, {
                    "data-cy": "run-failures",
                    variant: "white",
                    class: "gap-x-10px inline-flex whitespace-nowrap justify-center items-center isolate",
                    disabled: unref(runAllFailuresState).disabled,
                    to: { path: "/specs/runner", query: { file: unref(posixify)(unref(specData).fullPath), mode: "debug" } }
                  }, {
                    prefix: withCtx(() => [
                      createVNode(unref($), {
                        "data-cy": "icon-refresh",
                        "stroke-color": "indigo-500"
                      })
                    ]),
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("debugPage.runFailures.btn")), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled", "to"])
                ]),
                _: 2
              }, [
                unref(runAllFailuresState).disabled ? {
                  name: "popper",
                  fn: withCtx(() => {
                    var _a;
                    return [
                      createBaseVNode("div", _hoisted_15, [
                        createBaseVNode("span", _hoisted_16, toDisplayString(unref(runAllFailuresState).message), 1),
                        unref(runAllFailuresState).cta ? (openBlock(), createBlock(_sfc_main$J, {
                          key: 0,
                          variant: "text",
                          class: "rounded-md font-medium bg-gray-800 my-12px",
                          onClick: (_a = unref(runAllFailuresState).cta) == null ? void 0 : _a.action
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(runAllFailuresState).cta.message), 1)
                          ]),
                          _: 1
                        }, 8, ["onClick"])) : createCommentVNode("", true)
                      ])
                    ];
                  })
                } : void 0
              ]), 1032, ["is-interactive", "disabled"])
            ])
          ]),
          createVNode(TransitionGroupQuickFade, null, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(unref(specData).failedTests), (thumbprint) => {
                return openBlock(), createElementBlock("div", {
                  key: `test-${thumbprint}`,
                  "data-cy": "test-group",
                  class: normalizeClass(["flex flex-col flex-start border-b-gray-100 border-b-1px w-full pr-16px pl-16px justify-center", Object.keys(unref(specData).groups).length > 1 ? "pb-16px" : "hover:bg-gray-50 focus-within:bg-gray-50"])
                }, [
                  unref(specData).failedTests[thumbprint].length >= 1 ? (openBlock(), createBlock(DebugFailedTest, {
                    key: 0,
                    "failed-tests-result": unref(specData).failedTests[thumbprint],
                    groups: unref(groupsPerTest)[thumbprint],
                    expandable: Object.keys(unref(specData).groups).length > 1
                  }, null, 8, ["failed-tests-result", "groups", "expandable"])) : createCommentVNode("", true)
                ], 2);
              }), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
});
const _hoisted_1$h = {
  "data-cy": "debug-spec-list",
  class: "flex flex-col gap-24px self-stretch"
};
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  props: {
    specs: null
  },
  setup(__props) {
    const props = __props;
    gql`
fragment DebugSpecListSpec on CloudSpecRun {
  id
  path
  basename
  extension
  shortPath
  groupIds
  specDuration {
    min
    max
  }
  status
  testsPassed {
    min
    max
  }
  testsFailed {
    min
    max
  }
  testsPending {
    min
    max
  }
}
`;
    gql`
fragment DebugSpecListTests on CloudTestResult {
  id
  specId
  title(depth: 2)
  titleParts
  duration
  isFlaky
  testUrl
  thumbprint
  instance {
    id
    status
    groupId
    totalPassed
    totalFailed
    totalPending
    totalSkipped
    totalRunning
    hasStdout
    stdoutUrl
    hasScreenshots
    screenshotsUrl
    hasVideo
    videoUrl
  }
}
`;
    gql`
fragment DebugSpecListGroups on CloudRunGroup {
  id
  testingType
  groupName
  os {
    id
    name
    nameWithVersion
  }
  browser {
    id
    formattedName
    formattedNameWithVersion
  }
}
`;
    gql`
  mutation SetTestsForDebug($testsBySpec: [TestsBySpecInput!]!) {
    setTestsForRun (testsBySpec: $testsBySpec)
  }
`;
    const switchTestingTypeMutation = useMutation(SwitchTestingTypeAndRelaunchDocument);
    const setTestsForDebug = useMutation(SetTestsForDebugDocument);
    const specs = computed(() => {
      return props.specs.map((specItem) => {
        const fileName = specItem.spec.basename;
        const fileExtension = specItem.spec.extension;
        const fileNameWithoutExtension = fileName.replace(fileExtension, "");
        return {
          spec: {
            ...specItem.spec,
            id: specItem.spec.id,
            path: specItem.spec.path.replace(fileNameWithoutExtension + fileExtension, ""),
            fileName: fileNameWithoutExtension,
            fileExtension,
            fullPath: specItem.spec.path
          },
          tests: specItem.tests,
          groups: specItem.groups,
          testingType: specItem.testingType,
          foundLocally: specItem.foundLocally,
          matchesCurrentTestingType: specItem.matchesCurrentTestingType
        };
      });
    });
    function switchTestingType(testingType) {
      switchTestingTypeMutation.executeMutation({ testingType });
    }
    watchEffect(() => {
      const testsNamesBySpec = props.specs.map((specItem) => {
        return {
          specPath: specItem.spec.path,
          tests: Object.values(specItem.tests).flat().map((test) => {
            return test.titleParts.join(" ");
          })
        };
      });
      setTestsForDebug.executeMutation({ testsBySpec: testsNamesBySpec });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$h, [
        createVNode(TransitionGroupQuickFade, null, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(specs), (spec) => {
              return openBlock(), createBlock(_sfc_main$n, {
                key: spec.spec.id,
                spec: spec.spec,
                "test-results": spec.tests,
                "testing-type": spec.testingType,
                groups: spec.groups,
                "found-locally": spec.foundLocally,
                "matches-current-testing-type": spec.matchesCurrentTestingType,
                onSwitchTestingType: switchTestingType
              }, null, 8, ["spec", "test-results", "testing-type", "groups", "found-locally", "matches-current-testing-type"]);
            }), 128))
          ]),
          _: 1
        })
      ]);
    };
  }
});
const _hoisted_1$g = { class: "flex items-center" };
const _hoisted_2$c = /* @__PURE__ */ createBaseVNode("div", { class: "rounded-full font-semibold bg-orange-500 h-3px mx-10px w-3px" }, null, -1);
const _hoisted_3$a = { class: "flex items-center" };
const _hoisted_4$6 = /* @__PURE__ */ createBaseVNode("div", { class: "rounded-full font-semibold bg-orange-500 h-3px mx-10px w-3px" }, null, -1);
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  props: {
    totalSpecs: null,
    totalSkippedSpecs: null,
    cancellation: null
  },
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$K, {
        title: unref(t)("debugPage.manuallyCancelled"),
        status: "warning",
        icon: unref(ErrorOutlineIcon),
        class: "flex flex-col mb-24px w-full"
      }, {
        default: withCtx(() => {
          var _a;
          return [
            createBaseVNode("div", _hoisted_1$g, [
              createBaseVNode("div", null, toDisplayString(unref(t)("debugPage.specsSkipped", { n: __props.totalSpecs, totalSkippedSpecs: __props.totalSkippedSpecs })), 1),
              ((_a = __props.cancellation.cancelledBy) == null ? void 0 : _a.email) && __props.cancellation.cancelledBy.fullName ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                _hoisted_2$c,
                createBaseVNode("div", _hoisted_3$a, [
                  createVNode(_sfc_main$F, {
                    email: __props.cancellation.cancelledBy.email,
                    class: "h-20px mr-7px w-20px",
                    "data-cy": "cancelled-by-user-avatar"
                  }, null, 8, ["email"]),
                  createBaseVNode("div", null, toDisplayString(__props.cancellation.cancelledBy.fullName), 1)
                ])
              ], 64)) : createCommentVNode("", true),
              __props.cancellation.cancelledAt ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                _hoisted_4$6,
                createBaseVNode("div", null, toDisplayString(unref(dayjs)(__props.cancellation.cancelledAt).local().format("MMM D, YYYY h:mm A")), 1)
              ], 64)) : createCommentVNode("", true)
            ])
          ];
        }),
        _: 1
      }, 8, ["title", "icon"]);
    };
  }
});
const _hoisted_1$f = {
  class: "flex flex-col items-center",
  "data-cy": "debug-passed"
};
const _hoisted_2$b = { class: "font-medium mt-24px text-gray-900" };
const _hoisted_3$9 = { class: "mt-5px text-gray-700" };
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$f, [
        createVNode(unref(DashboardCheckmark), { class: "icon-dark-gray-500" }),
        createBaseVNode("span", _hoisted_2$b, toDisplayString(unref(t)("debugPage.wellDone")), 1),
        createBaseVNode("span", _hoisted_3$9, toDisplayString(unref(t)("debugPage.allYourTestsPassed")), 1)
      ]);
    };
  }
});
const _hoisted_1$e = { class: "ml-5px" };
const _hoisted_2$a = { class: "mt-20px" };
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  props: {
    errors: null,
    totalSpecs: null,
    totalSkippedSpecs: null
  },
  setup(__props) {
    const { t } = useI18n();
    dayjs.extend(utc);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$K, {
        title: unref(t)("debugPage.incomplete"),
        status: "warning",
        icon: unref(ErrorOutlineIcon),
        class: "flex flex-col mb-24px w-full"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$e, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.errors, (error, index) => {
              return openBlock(), createElementBlock("ul", {
                key: index,
                class: "list-disc ml-25px"
              }, [
                createBaseVNode("li", null, [
                  createBaseVNode("pre", null, toDisplayString(error), 1)
                ])
              ]);
            }), 128))
          ]),
          createBaseVNode("div", _hoisted_2$a, toDisplayString(unref(t)("debugPage.specsSkipped", { n: __props.totalSpecs, totalSkippedSpecs: __props.totalSkippedSpecs })), 1)
        ]),
        _: 1
      }, 8, ["title", "icon"]);
    };
  }
});
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$K, {
        title: unref(t)("debugPage.incomplete"),
        status: "warning",
        icon: unref(ErrorOutlineIcon),
        class: "flex flex-col mb-24px w-full"
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(unref(t)("debugPage.runHasNoTests")), 1)
        ]),
        _: 1
      }, 8, ["title", "icon"]);
    };
  }
});
const _hoisted_1$d = { key: 0 };
const _hoisted_2$9 = { class: "mt-20px" };
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  props: {
    ci: null,
    totalSpecs: null,
    totalSkippedSpecs: null
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const hasCiInfo = computed(() => {
      var _a;
      return !!(((_a = props.ci) == null ? void 0 : _a.url) && props.ci.formattedProvider && props.ci.ciBuildNumberFormatted);
    });
    return (_ctx, _cache) => {
      const _component_i18n_t = resolveComponent("i18n-t");
      return openBlock(), createBlock(_sfc_main$K, {
        title: unref(t)("debugPage.incomplete"),
        status: "warning",
        icon: unref(ErrorOutlineIcon),
        class: "flex flex-col mb-24px w-full"
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(unref(t)("debugPage.theRunStartedButNeverCompleted")) + " ", 1),
          __props.ci && unref(hasCiInfo) ? (openBlock(), createElementBlock("span", _hoisted_1$d, [
            createVNode(_component_i18n_t, {
              scope: "global",
              keypath: "debugPage.checkYourCiLogs"
            }, {
              default: withCtx(() => [
                createVNode(_sfc_main$E, {
                  href: __props.ci.url || "#"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(`${__props.ci.formattedProvider} #${__props.ci.ciBuildNumberFormatted}`), 1)
                  ]),
                  _: 1
                }, 8, ["href"])
              ]),
              _: 1
            })
          ])) : createCommentVNode("", true),
          createTextVNode(" " + toDisplayString(unref(t)("debugPage.archiveThisRun")) + " ", 1),
          createBaseVNode("div", _hoisted_2$9, toDisplayString(unref(t)("debugPage.specsSkipped", { n: __props.totalSpecs, totalSkippedSpecs: __props.totalSkippedSpecs })), 1)
        ]),
        _: 1
      }, 8, ["title", "icon"]);
    };
  }
});
const _hoisted_1$c = { class: "flex flex-col max-w-440px items-center" };
const _hoisted_2$8 = { class: "font-medium mt-24px text-lg text-gray-900" };
const _hoisted_3$8 = { class: "mt-10px text-center text-gray-600" };
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  props: {
    overLimitReasons: null,
    overLimitActionType: null,
    overLimitActionUrl: null,
    runAgeDays: null
  },
  setup(__props) {
    const props = __props;
    gql`
fragment DebugReasonsRunIsHidden on CloudRun {
  id
  reasonsRunIsHidden {
    __typename
    ... on DataRetentionLimitExceeded {
      dataRetentionDays
    }
    ... on UsageLimitExceeded {
      monthlyTests
    }
  }
}
`;
    const { t } = useI18n();
    const actionUrl = computed(() => {
      return getUrlWithParams({ url: props.overLimitActionUrl, params: { utmMedium: "Debug Tab", utmSource: getUtmSource() } });
    });
    const overLimitReason = computed(() => {
      return props.overLimitReasons.find(isUsageLimit) || props.overLimitReasons.find(isRetentionLimit) || null;
    });
    const isPlanAdmin = computed(() => props.overLimitActionType === "UPGRADE");
    const iconClasses = computed(() => {
      return [
        "icon-dark-gray-500",
        isRetentionLimit(overLimitReason.value) ? "icon-dark-secondary-orange-400 icon-light-secondary-orange-200" : "icon-dark-secondary-jade-400 icon-light-secondary-jade-200"
      ];
    });
    const copy = computed(() => {
      var _a;
      if (isRetentionLimit(overLimitReason.value)) {
        return {
          title: t("debugPage.overLimit.retentionExceededTitle"),
          message: t("debugPage.overLimit.retentionExceededMessage", { limitDays: overLimitReason.value.dataRetentionDays, runAgeDays: props.runAgeDays }),
          actionLabel: isPlanAdmin.value ? t("debugPage.overLimit.upgradePlan") : t("debugPage.overLimit.contactAdmin")
        };
      }
      const numberTests = ((_a = overLimitReason.value) == null ? void 0 : _a.monthlyTests) || 0;
      return {
        title: t("debugPage.overLimit.usageExceededTitle"),
        message: isPlanAdmin.value ? t("debugPage.overLimit.usageExceededAdminMessage", { numberTests }) : t("debugPage.overLimit.usageExceededUserMessage", { numberTests }),
        actionLabel: isPlanAdmin.value ? t("debugPage.overLimit.upgradePlan") : t("debugPage.overLimit.contactAdmin")
      };
    });
    function isUsageLimit(reason) {
      return (reason == null ? void 0 : reason.__typename) === "UsageLimitExceeded";
    }
    function isRetentionLimit(reason) {
      return (reason == null ? void 0 : reason.__typename) === "DataRetentionLimitExceeded";
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$c, [
        createVNode(unref(LockedProject), {
          class: normalizeClass(unref(iconClasses))
        }, null, 8, ["class"]),
        createBaseVNode("span", _hoisted_2$8, toDisplayString(unref(copy).title), 1),
        createBaseVNode("span", _hoisted_3$8, toDisplayString(unref(copy).message), 1),
        createVNode(_sfc_main$J, {
          size: "lg",
          class: "mt-25px",
          href: unref(actionUrl)
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(copy).actionLabel), 1)
          ]),
          _: 1
        }, 8, ["href"])
      ]);
    };
  }
});
const _hoisted_1$b = {
  key: 4,
  class: "flex flex-col flex-grow w-full p-12 justify-center items-center align-middle"
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  props: {
    status: null,
    cancellation: null,
    isHidden: { type: Boolean },
    reasonsRunIsHidden: null,
    overLimitActionType: null,
    overLimitActionUrl: null,
    specs: null,
    ci: null,
    errors: null,
    runAgeDays: null
  },
  setup(__props) {
    const props = __props;
    gql`
fragment DebugPageDetails_cloudCiBuildInfo on CloudCiBuildInfo {
  id
  ciBuildNumberFormatted
  formattedProvider
  url
}
`;
    const totalSkippedSpecs = computed(() => {
      return props.specs.filter((spec) => spec.status === "UNCLAIMED" || spec.status === "RUNNING").length;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        __props.status === "CANCELLED" ? (openBlock(), createBlock(_sfc_main$l, {
          key: 0,
          "total-specs": __props.specs.length,
          "total-skipped-specs": unref(totalSkippedSpecs),
          cancellation: __props.cancellation
        }, null, 8, ["total-specs", "total-skipped-specs", "cancellation"])) : __props.status === "ERRORED" ? (openBlock(), createBlock(_sfc_main$j, {
          key: 1,
          errors: __props.errors,
          "total-specs": __props.specs.length,
          "total-skipped-specs": unref(totalSkippedSpecs)
        }, null, 8, ["errors", "total-specs", "total-skipped-specs"])) : __props.status === "NOTESTS" ? (openBlock(), createBlock(_sfc_main$i, { key: 2 })) : __props.status === "TIMEDOUT" ? (openBlock(), createBlock(_sfc_main$h, {
          key: 3,
          "total-specs": __props.specs.length,
          "total-skipped-specs": unref(totalSkippedSpecs),
          ci: __props.ci
        }, null, 8, ["total-specs", "total-skipped-specs", "ci"])) : createCommentVNode("", true),
        ["PASSED", "OVERLIMIT"].includes(__props.status) || __props.isHidden ? (openBlock(), createElementBlock("div", _hoisted_1$b, [
          __props.status === "PASSED" ? (openBlock(), createBlock(_sfc_main$k, { key: 0 })) : createCommentVNode("", true),
          __props.isHidden ? (openBlock(), createBlock(_sfc_main$g, {
            key: 1,
            "over-limit-reasons": __props.reasonsRunIsHidden,
            "over-limit-action-type": __props.overLimitActionType,
            "over-limit-action-url": __props.overLimitActionUrl,
            "run-age-days": __props.runAgeDays
          }, null, 8, ["over-limit-reasons", "over-limit-action-type", "over-limit-action-url", "run-age-days"])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const _hoisted_1$a = {
  class: "w-680px",
  "data-cy": "debug-slideshow-slide"
};
const _hoisted_2$7 = ["src", "alt"];
const _hoisted_3$7 = { class: "rounded-b-md bg-purple-500 text-white p-16px" };
const _hoisted_4$5 = { class: "font-semibold" };
const _hoisted_5$4 = { class: "text-white text-sm mb-16px text-opacity-70" };
const _hoisted_6$3 = { class: "flex justify-between" };
const _hoisted_7$2 = { "data-cy": "debug-slideshow-step" };
const _hoisted_8$1 = { class: "flex gap-8px" };
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  props: {
    img: null,
    title: null,
    description: null,
    step: null,
    totalSteps: null,
    incrementStep: null,
    decrementStep: null
  },
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$a, [
        createBaseVNode("img", {
          src: __props.img,
          alt: unref(t)("debugPage.emptyStates.slideshow.imgAlt")
        }, null, 8, _hoisted_2$7),
        createBaseVNode("div", _hoisted_3$7, [
          createBaseVNode("h2", _hoisted_4$5, toDisplayString(__props.title), 1),
          createBaseVNode("p", _hoisted_5$4, toDisplayString(__props.description), 1),
          createBaseVNode("div", _hoisted_6$3, [
            createBaseVNode("span", _hoisted_7$2, toDisplayString(__props.step) + "/" + toDisplayString(__props.totalSteps - 1), 1),
            createBaseVNode("div", _hoisted_8$1, [
              __props.step > 1 ? (openBlock(), createBlock(_sfc_main$J, {
                key: 0,
                variant: "outline",
                class: "flex slide-override",
                "prefix-icon": unref(f1),
                onClick: __props.decrementStep
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("debugPage.emptyStates.slideshow.controls.previous")), 1)
                ]),
                _: 1
              }, 8, ["prefix-icon", "onClick"])) : createCommentVNode("", true),
              __props.step < __props.totalSteps - 1 ? (openBlock(), createBlock(_sfc_main$J, {
                key: 1,
                variant: "outline",
                class: "slide-override",
                "suffix-icon": unref(b1),
                onClick: __props.incrementStep
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("debugPage.emptyStates.slideshow.controls.next")), 1)
                ]),
                _: 1
              }, 8, ["suffix-icon", "onClick"])) : (openBlock(), createBlock(_sfc_main$J, {
                key: 2,
                variant: "outline",
                class: "w-80px slide-override",
                onClick: __props.incrementStep
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("debugPage.emptyStates.slideshow.controls.done")), 1)
                ]),
                _: 1
              }, 8, ["onClick"]))
            ])
          ])
        ])
      ]);
    };
  }
});
const DebugSlide_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$9 = { class: "relative" };
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  props: {
    modelValue: null,
    steps: null
  },
  emits: ["update:modelValue", "slideshowComplete"],
  setup(__props, { emit }) {
    const props = __props;
    const step = useVModel(props, "modelValue", emit);
    const current = computed(() => props.steps[step.value]);
    const incrementStep = () => {
      const nextStep = step.value + 1;
      if (nextStep < props.steps.length) {
        step.value = nextStep;
      } else {
        step.value = 0;
        emit("slideshowComplete");
      }
    };
    const decrementStep = () => step.value -= 1;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$9, [
        createVNode(Transition, {
          "enter-from-class": "opacity-0",
          "enter-active-class": "transition duration-300 ease-out",
          "enter-to-class": "opacity-100",
          "leave-from-class": "opacity-100 absolute",
          "leave-active-class": "transition duration-300 ease-in absolute",
          "leave-to-class": "opacity-0 absolute"
        }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(unref(current).component), mergeProps(unref(current).props, {
              key: unref(step),
              step: unref(step),
              "total-steps": __props.steps.length,
              "increment-step": incrementStep,
              "decrement-step": decrementStep
            }), null, 16, ["step", "total-steps"]))
          ]),
          _: 1
        })
      ]);
    };
  }
});
const DEBUG_SLIDESHOW = {
  id: "iatr_debug_slideshow",
  campaigns: {
    login: "Debug Login Empty State",
    connectProject: "Debug Connect Project Empty State",
    recordRun: "Debug Record Run Empty State"
  },
  medium: "Debug Tab"
};
const _hoisted_1$8 = {
  class: "flex flex-col w-full items-center",
  "data-cy": "debug-default-empty-state"
};
const _hoisted_2$6 = { class: "flex justify-between" };
const _hoisted_3$6 = { class: "bg-white border rounded-md flex border-gray-100 py-4px px-8px text-14px text-gray-700 gap-8px items-center" };
const _hoisted_4$4 = /* @__PURE__ */ createBaseVNode("span", null, "-", -1);
const _hoisted_5$3 = {
  key: 0,
  class: "border-l border-gray-100 pl-8px"
};
const _hoisted_6$2 = /* @__PURE__ */ createTextVNode(" Info ");
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  props: {
    exampleTestName: null,
    slideshowCampaign: null,
    incrementStep: null
  },
  setup(__props) {
    const loadingRows = [
      ["w-40px", "w-[40%]"],
      ["w-40px", "w-[50%]"],
      ["w-40px", "w-[65%]"]
    ];
    return (_ctx, _cache) => {
      const _component_i_cy_status_failed_x12 = __unplugin_components_0$2;
      return openBlock(), createElementBlock("div", _hoisted_1$8, [
        createVNode(_sfc_main$B, {
          "width-class": "w-full",
          "dot-class": "icon-light-gray-200",
          rows: loadingRows
        }, {
          header: withCtx(() => [
            createBaseVNode("div", _hoisted_2$6, [
              createBaseVNode("div", _hoisted_3$6, [
                createVNode(_component_i_cy_status_failed_x12, { class: "h-12px w-12px" }),
                _hoisted_4$4,
                __props.exampleTestName ? (openBlock(), createElementBlock("div", _hoisted_5$3, toDisplayString(__props.exampleTestName), 1)) : createCommentVNode("", true)
              ]),
              __props.slideshowCampaign ? (openBlock(), createBlock(_sfc_main$J, {
                key: 0,
                variant: "outline",
                class: "debug-empty-view-info-button-override",
                "prefix-icon": unref(P0),
                onClick: __props.incrementStep
              }, {
                default: withCtx(() => [
                  _hoisted_6$2
                ]),
                _: 1
              }, 8, ["prefix-icon", "onClick"])) : createCommentVNode("", true)
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
});
const debugGuideSkeleton1 = "" + new URL("debug-guide-skeleton-1-2a6c87ec.png", import.meta.url).href;
const debugGuideSkeleton2 = "" + new URL("debug-guide-skeleton-2-9ff26b27.png", import.meta.url).href;
const debugGuideSkeleton3 = "" + new URL("debug-guide-skeleton-3-3908c8c9.png", import.meta.url).href;
const debugGuideText1 = "" + new URL("debug-guide-text-1-d2526333.png", import.meta.url).href;
const debugGuideText2 = "" + new URL("debug-guide-text-2-b73207d9.png", import.meta.url).href;
const debugGuideText3 = "" + new URL("debug-guide-text-3-aa1c684c.png", import.meta.url).href;
const _hoisted_1$7 = { class: "flex flex-col mx-auto my-45px max-w-680px items-center" };
const _hoisted_2$5 = { class: "flex flex-col items-center justify-evenly" };
const _hoisted_3$5 = { class: "flex flex-col mt-25px mb-20px max-w-640px items-center" };
const _hoisted_4$3 = { class: "font-medium my-5px text-center text-gray-900 text-18px" };
const _hoisted_5$2 = { class: "font-normal my-5px text-center leading-relaxed text-16px text-gray-600" };
const _hoisted_6$1 = {
  key: 0,
  class: "ml-4px"
};
const _hoisted_7$1 = { class: "sr-only" };
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  props: {
    title: null,
    description: null,
    exampleTestName: null,
    helpLinkHref: null,
    helpLinkSrText: null,
    slideshowCampaign: null
  },
  setup(__props) {
    const props = __props;
    gql`
fragment _DebugEmptyView on Query {
  currentProject {
    id
    savedState
  }
}
`;
    gql`
query DebugEmptyView {
  ..._DebugEmptyView
}
`;
    gql`
mutation DebugEmptyView_SetPreferences ($value: String!) {
  setPreferences (value: $value, type: project) {
    ..._DebugEmptyView
  }
}`;
    gql`
mutation DebugEmptyView_RecordEvent($campaign: String!, $messageId: String!, $medium: String!, $cohort: String) {
  recordEvent(campaign: $campaign, messageId: $messageId, medium: $medium, cohort: $cohort)
}
`;
    const query = useQuery({ query: DebugEmptyViewDocument });
    const slideshowCompleteMutation = useMutation(DebugEmptyView_SetPreferencesDocument);
    const slideshowRecordEventMutation = useMutation(DebugEmptyView_RecordEventDocument);
    const { t } = useI18n();
    const helpLink = getUrlWithParams({
      url: props.helpLinkHref || "",
      params: {
        utm_source: getUtmSource(),
        utm_medium: "Debug Tab",
        utm_campaign: "Learn More"
      }
    });
    const step = ref();
    const cohortBuilder = useCohorts();
    const selectedCohort = cohortBuilder.getCohort({
      name: DEBUG_SLIDESHOW.id,
      options: [{ cohort: "A", value: "" }, { cohort: "B", value: "" }]
    });
    const steps = computed(() => {
      var _a;
      if (!((_a = selectedCohort.value) == null ? void 0 : _a.cohort))
        return void 0;
      const slideshowImages = selectedCohort.value.cohort === "A" ? [debugGuideSkeleton1, debugGuideSkeleton2, debugGuideSkeleton3] : [debugGuideText1, debugGuideText2, debugGuideText3];
      return [
        {
          component: _sfc_main$c,
          props: {
            exampleTestName: props.exampleTestName,
            slideshowCampaign: props.slideshowCampaign
          }
        },
        {
          component: _sfc_main$e,
          props: {
            img: slideshowImages[0],
            title: t("debugPage.emptyStates.slideshow.step1.title"),
            description: t("debugPage.emptyStates.slideshow.step1.description")
          }
        },
        {
          component: _sfc_main$e,
          props: {
            img: slideshowImages[1],
            title: t("debugPage.emptyStates.slideshow.step2.title"),
            description: t("debugPage.emptyStates.slideshow.step2.description")
          }
        },
        {
          component: _sfc_main$e,
          props: {
            img: slideshowImages[2],
            title: t("debugPage.emptyStates.slideshow.step3.title"),
            description: t("debugPage.emptyStates.slideshow.step3.description")
          }
        }
      ];
    });
    const savedState = computed(() => {
      var _a, _b;
      return (_b = (_a = query.data.value) == null ? void 0 : _a.currentProject) == null ? void 0 : _b.savedState;
    });
    const slideShowMessageId = nanoid();
    watch([savedState, selectedCohort], () => {
      if (lodashExports.isNumber(step.value))
        return;
      if (!props.slideshowCampaign || savedState.value.debugSlideshowComplete) {
        step.value = 0;
        return;
      }
      if (selectedCohort.value && savedState.value) {
        step.value = 1;
        slideshowRecordEventMutation.executeMutation({
          campaign: props.slideshowCampaign,
          medium: DEBUG_SLIDESHOW.medium,
          cohort: selectedCohort.value.cohort,
          messageId: slideShowMessageId
        });
      }
    });
    function saveSlideshowComplete() {
      if (!savedState.value.debugSlideshowComplete) {
        slideshowCompleteMutation.executeMutation({ value: JSON.stringify({ debugSlideshowComplete: true }) });
      }
    }
    return (_ctx, _cache) => {
      var _a;
      const _component_i_cy_box_open_x48 = __unplugin_components_0$3;
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        createBaseVNode("div", _hoisted_2$5, [
          createBaseVNode("div", null, [
            createVNode(_component_i_cy_box_open_x48, { class: "icon-dark-gray-500 icon-light-indigo-100" })
          ]),
          createBaseVNode("div", _hoisted_3$5, [
            createBaseVNode("div", _hoisted_4$3, toDisplayString(__props.title), 1),
            createBaseVNode("div", _hoisted_5$2, [
              createTextVNode(toDisplayString(__props.description) + " ", 1),
              __props.helpLinkHref ? (openBlock(), createElementBlock("span", _hoisted_6$1, [
                createVNode(_sfc_main$E, { href: unref(helpLink) }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("links.learnMoreButton")) + " ", 1),
                    createBaseVNode("span", _hoisted_7$1, toDisplayString(__props.helpLinkSrText), 1)
                  ]),
                  _: 1
                }, 8, ["href"])
              ])) : createCommentVNode("", true)
            ])
          ]),
          renderSlot(_ctx.$slots, "cta", {
            utmContent: (_a = unref(selectedCohort)) == null ? void 0 : _a.cohort
          })
        ]),
        step.value !== void 0 && unref(steps) ? (openBlock(), createBlock(_sfc_main$d, {
          key: 0,
          modelValue: step.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => step.value = $event),
          steps: unref(steps),
          class: "my-40px w-full",
          onSlideshowComplete: saveSlideshowComplete
        }, null, 8, ["modelValue", "steps"])) : createCommentVNode("", true)
      ]);
    };
  }
});
const DebugEmptyView_vue_vue_type_style_index_0_lang = "";
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$b, {
        title: unref(t)("debugPage.emptyStates.debugDirectlyInCypress"),
        description: unref(t)("debugPage.emptyStates.reviewRerunAndDebug"),
        "example-test-name": unref(t)("debugPage.emptyStates.notLoggedInTestMessage"),
        "slideshow-campaign": unref(DEBUG_SLIDESHOW).campaigns.login,
        "help-link-sr-text": unref(t)("debugPage.emptyStates.learnAboutDebuggingSrText"),
        "help-link-href": "https://on.cypress.io/debug-page"
      }, {
        cta: withCtx((slotProps) => [
          createVNode(_sfc_main$L, {
            "utm-medium": "Debug Tab",
            "utm-content": slotProps.utmContent
          }, null, 8, ["utm-content"])
        ]),
        _: 1
      }, 8, ["title", "description", "example-test-name", "slideshow-campaign", "help-link-sr-text"]);
    };
  }
});
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$b, {
        title: unref(t)("debugPage.emptyStates.debugDirectlyInCypress"),
        description: unref(t)("debugPage.emptyStates.reviewRerunAndDebug"),
        "example-test-name": unref(t)("debugPage.emptyStates.noProjectTestMessage"),
        "slideshow-campaign": unref(DEBUG_SLIDESHOW).campaigns.connectProject,
        "help-link-sr-text": unref(t)("debugPage.emptyStates.learnAboutProjectSetupSrText"),
        "help-link-href": "https://on.cypress.io/adding-new-project"
      }, {
        cta: withCtx((slotProps) => [
          createVNode(_sfc_main$L, {
            "utm-medium": "Debug Tab",
            "utm-content": slotProps.utmContent
          }, null, 8, ["utm-content"])
        ]),
        _: 1
      }, 8, ["title", "description", "example-test-name", "slideshow-campaign", "help-link-sr-text"]);
    };
  }
});
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$b, {
        title: unref(t)("debugPage.emptyStates.recordYourFirstRun"),
        description: unref(t)("debugPage.emptyStates.almostThere"),
        "example-test-name": unref(t)("debugPage.emptyStates.noRunsTestMessage"),
        "slideshow-campaign": unref(DEBUG_SLIDESHOW).campaigns.recordRun,
        "help-link-sr-text": unref(t)("debugPage.emptyStates.learnAboutRecordingSrText"),
        "help-link-href": "https://on.cypress.io/cypress-run-record-key"
      }, {
        cta: withCtx(() => [
          createVNode(_sfc_main$M, { class: "w-[80%]" })
        ]),
        _: 1
      }, 8, ["title", "description", "example-test-name", "slideshow-campaign", "help-link-sr-text"]);
    };
  }
});
const _hoisted_1$6 = { class: "m-25px" };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$6, [
          createVNode(_sfc_main$K, {
            "data-cy": "debug-alert",
            status: "warning",
            title: unref(t)("debugPage.emptyStates.gitRepositoryNotDetected"),
            icon: unref(WarningIcon),
            dismissible: ""
          }, {
            default: withCtx(() => [
              createBaseVNode("p", null, toDisplayString(unref(t)("debugPage.emptyStates.ensureGitSetupCorrectly")), 1)
            ]),
            _: 1
          }, 8, ["title", "icon"])
        ]),
        createVNode(_sfc_main$b, {
          title: unref(t)("debugPage.emptyStates.debugDirectlyInCypress"),
          description: unref(t)("debugPage.emptyStates.reviewRerunAndDebug"),
          "help-link-sr-text": unref(t)("debugPage.emptyStates.learnAboutDebuggingSrText"),
          "help-link-href": "https://on.cypress.io/debug-page"
        }, null, 8, ["title", "description", "help-link-sr-text"])
      ], 64);
    };
  }
});
const _hoisted_1$5 = {
  id: "limit-row",
  "data-cy": "debug-spec-limit",
  class: "w-full"
};
const _hoisted_2$4 = { class: "border rounded flex flex-row flex-wrap bg-indigo-50 border-indigo-100 p-12px p-4 gap-x-2 items-center whitespace-nowrap children:flex children:items-center" };
const _hoisted_3$4 = { class: "font-medium text-sm text-gray-900" };
const _hoisted_4$2 = { class: "font-normal text-sm text-gray-700" };
const _hoisted_5$1 = {
  key: 0,
  class: "text-sm"
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  props: {
    failedTestCount: null,
    cloudRunUrl: null
  },
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createBaseVNode("ul", _hoisted_2$4, [
          createBaseVNode("li", _hoisted_3$4, toDisplayString(unref(t)("debugPage.limit.title")), 1),
          createBaseVNode("li", _hoisted_4$2, toDisplayString(unref(t)("debugPage.limit.message", { n: __props.failedTestCount })), 1),
          __props.cloudRunUrl ? (openBlock(), createElementBlock("li", _hoisted_5$1, [
            createVNode(_sfc_main$E, { href: __props.cloudRunUrl }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(t)("debugPage.limit.link")), 1)
              ]),
              _: 1
            }, 8, ["href"])
          ])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
const DebugSpecLimitBanner_vue_vue_type_style_index_0_scoped_2d0fd27e_lang = "";
const DebugSpecLimitBanner = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-2d0fd27e"]]);
const _sfc_main$5 = {};
const _hoisted_1$4 = {
  width: "8",
  height: "8",
  viewBox: "0 0 8 8",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M1 4.5L3.5 7L7 1",
  stroke: "#4956E3",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$3
];
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_3$3);
}
const DebugCurrentRunIcon = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$1]]);
gql`
subscription DebugProgress_Specs($id: ID!) {
  relevantRunSpecChange(runId: $id) {
    id
    ...DebugProgress_DebugTests
  }
}
`;
function useDebugRunSummary(run) {
  var _a;
  const shouldPause = ref(true);
  const runToWatch = computed(() => unref(run));
  useSubscription$1({
    query: DebugProgress_SpecsDocument,
    variables: {
      id: ((_a = runToWatch.value) == null ? void 0 : _a.id) || ""
    },
    pause: shouldPause
  });
  watchEffect(() => {
    var _a2, _b;
    const status = (_a2 = runToWatch.value) == null ? void 0 : _a2.status;
    const id = (_b = runToWatch.value) == null ? void 0 : _b.id;
    shouldPause.value = id === void 0 || status === void 0 || status !== "RUNNING";
  });
}
const _hoisted_1$3 = ["data-cy"];
const _hoisted_2$2 = ["data-cy"];
const _hoisted_3$2 = { class: "flex min-w-0 items-center" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  props: {
    gql: null,
    isCurrentRun: { type: Boolean }
  },
  emits: ["changeRun"],
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    gql`
fragment DebugProgress_DebugTests on CloudRun {
  id
  runNumber
  totalDuration
  createdAt
  status
  completedInstanceCount
  totalInstanceCount
  ...DebugResults
}`;
    const Dot = () => {
      return h("span", { class: "px-8px text-gray-300" }, "•");
    };
    useDebugRunSummary(props.gql);
    const LightText = (_props, { slots }) => {
      var _a;
      return h("span", { class: "text-sm text-gray-700" }, (_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots));
    };
    const run = computed(() => props.gql);
    const { relativeCreatedAt, totalDuration } = useRunDateTimeInterval(run);
    const specsCompleted = computed(() => {
      if (props.gql.status === "RUNNING") {
        return t("debugPage.specCounts.whenRunning", { n: props.gql.totalInstanceCount || 0, completed: props.gql.completedInstanceCount || 0, total: props.gql.totalInstanceCount || 0 });
      }
      return t("debugPage.specCounts.whenCompleted", { n: props.gql.totalInstanceCount || 0 });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("li", {
        class: "mr-12px ml-6px",
        "data-cy": __props.isCurrentRun ? "current-run" : "run"
      }, [
        (openBlock(), createBlock(resolveDynamicComponent(__props.isCurrentRun ? "div" : "button"), {
          "aria-label": unref(t)("debugPage.switchToRun", { runNumber: unref(gql).runNumber }),
          class: normalizeClass(["rounded flex w-full p-10px pl-35px relative hocus:bg-indigo-50 focus:outline focus:outline-indigo-500", { "bg-indigo-50": __props.isCurrentRun }]),
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("changeRun"))
        }, {
          default: withCtx(() => [
            __props.isCurrentRun ? (openBlock(), createBlock(DebugCurrentRunIcon, {
              key: 0,
              class: "top-[18px] left-[12px] absolute",
              "data-cy": "current-run-check"
            })) : createCommentVNode("", true),
            createBaseVNode("div", {
              "data-cy": `run-${props.gql.runNumber}`,
              class: "flex w-full justify-between items-center"
            }, [
              createBaseVNode("div", _hoisted_3$2, [
                props.gql.status && props.gql.runNumber ? (openBlock(), createBlock(_sfc_main$y, {
                  key: 0,
                  status: props.gql.status,
                  value: props.gql.runNumber,
                  class: "mr-8px"
                }, null, 8, ["status", "value"])) : createCommentVNode("", true),
                props.gql ? (openBlock(), createBlock(_sfc_main$z, {
                  key: 1,
                  gql: props.gql,
                  class: "bg-white"
                }, null, 8, ["gql"])) : createCommentVNode("", true),
                createVNode(Dot),
                createVNode(LightText, { class: "truncate" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(specsCompleted)), 1)
                  ]),
                  _: 1
                })
              ]),
              createVNode(LightText, { class: "flex-shrink-0 ml-8px" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(totalDuration)) + " (" + toDisplayString(unref(relativeCreatedAt)) + ") ", 1)
                ]),
                _: 1
              })
            ], 8, _hoisted_2$2)
          ]),
          _: 1
        }, 8, ["aria-label", "class"]))
      ], 8, _hoisted_1$3);
    };
  }
});
const _sfc_main$3 = {};
const _hoisted_1$2 = {
  width: "14",
  height: "8",
  viewBox: "0 0 14 8",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M10 4C10 5.65685 8.65685 7 7 7C5.34315 7 4 5.65685 4 4C4 2.34315 5.34315 1 7 1C8.65685 1 10 2.34315 10 4Z",
  fill: "white"
}, null, -1);
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M10 4C10 5.65685 8.65685 7 7 7C5.34315 7 4 5.65685 4 4M10 4C10 2.34315 8.65685 1 7 1C5.34315 1 4 2.34315 4 4M10 4H13M4 4H1",
  stroke: "#747994",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_4$1 = [
  _hoisted_2$1,
  _hoisted_3$1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_4$1);
}
const DebugCommitIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render]]);
const _hoisted_1$1 = {
  key: 0,
  class: "border rounded border-indigo-100 overflow-hidden"
};
const _hoisted_2 = {
  class: "bg-indigo-50 p-12px group",
  "data-cy": "debug-detailed-header"
};
const _hoisted_3 = { class: "flex items-center justify-between" };
const _hoisted_4 = { class: "flex min-w-0 items-center" };
const _hoisted_5 = ["aria-expanded"];
const _hoisted_6 = ["title"];
const _hoisted_7 = { class: "flex-shrink-0 text-gray-700 truncate hidden lg:block" };
const _hoisted_8 = {
  key: 0,
  id: "debug-runs-container",
  class: "max-h-30vh overflow-y-scroll",
  "data-cy": "debug-runs-container"
};
const _hoisted_9 = {
  class: "my-8px relative before:content-DEFAULT before:top-20px before:bottom-10px before:w-5px before:border-2 before:border-dashed before:border-l-0 before:border-y-0 before:border-r-gray-100 before:left-[19px] before:absolute",
  "data-cy": "debug-historical-runs"
};
const _hoisted_10 = ["data-cy"];
const _hoisted_11 = { class: "flex my-10px mx-16px items-center" };
const _hoisted_12 = ["title"];
const _hoisted_13 = {
  key: 0,
  "data-cy": "tag-checked-out",
  class: "border rounded font-medium border-gray-100 border-1 flex-shrink-0 h-16px ml-8px px-4px text-12px text-purple-400 leading-16px align-middle inline-flex items-center"
};
const _hoisted_14 = { key: 0 };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    runs: null,
    currentRunNumber: null,
    currentCommitInfo: null
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    gql`
fragment DebugRunNavigationRunInfo on CloudRun {
  ...DebugResults
  ...DebugProgress_DebugTests
  __typename
  runNumber
  totalTests
  totalFailed
  totalPassed
  totalPending
  totalSkipped
  totalDuration
  totalFlakyTests
  totalInstanceCount
  completedInstanceCount
  id
  status
  specs {
    id
    path
  }
  createdAt
  commitInfo {
    sha
    summary
  }
}
`;
    gql`
fragment DebugRunNavigation on CloudProject {
  id
  allRuns: runsByCommitShas(commitShas: $commitShas) {
    id
    ...DebugRunNavigationRunInfo
  }
}
`;
    gql`
mutation DebugRunNavigation_moveToRun($runNumber: Int!) {
  moveToRelevantRun(runNumber: $runNumber)
}
`;
    const Dot = () => {
      return h("span", { class: "px-8px text-gray-300" }, "•");
    };
    const LightText = (_props, { slots }) => {
      var _a;
      return h("span", { class: "text-sm text-gray-700" }, (_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots));
    };
    const moveToNewRun = useMutation(DebugRunNavigation_MoveToRunDocument);
    const [showRuns, toggleRuns] = useToggle(false);
    const latest = computed(() => props.runs[0]);
    useDebugRunSummary(latest);
    const current = computed(() => {
      var _a;
      return (_a = props.runs) == null ? void 0 : _a.find((run) => (run == null ? void 0 : run.runNumber) === props.currentRunNumber);
    });
    const latestIsCurrentlySelected = computed(() => {
      var _a, _b;
      return ((_a = latest.value) == null ? void 0 : _a.runNumber) === ((_b = current.value) == null ? void 0 : _b.runNumber);
    });
    const groupByCommit = computed(() => {
      var _a;
      const grouped = lodashExports.groupBy(lodashExports.compact(props.runs), (run) => {
        var _a2;
        return (_a2 = run == null ? void 0 : run.commitInfo) == null ? void 0 : _a2.sha;
      });
      const mapped = {};
      const hasRunsForCurrentCommit = ((_a = props.currentCommitInfo) == null ? void 0 : _a.sha) && Object.keys(grouped).includes(props.currentCommitInfo.sha);
      if (!hasRunsForCurrentCommit && props.currentCommitInfo) {
        mapped[props.currentCommitInfo.sha] = props.currentCommitInfo;
      }
      const result = Object.keys(grouped).reduce((acc, curr) => {
        var _a2;
        acc[curr] = {
          sha: curr,
          message: (_a2 = grouped[curr][0].commitInfo) == null ? void 0 : _a2.summary,
          runs: grouped[curr]
        };
        return acc;
      }, mapped);
      return result;
    });
    const shouldShow = computed(() => {
      return props.runs.length > 1;
    });
    const hideToggle = computed(() => {
      return !latestIsCurrentlySelected.value && props.runs.length === 2;
    });
    function changeRun(run) {
      var _a;
      if (!run.runNumber || !((_a = run.commitInfo) == null ? void 0 : _a.sha)) {
        return;
      }
      moveToNewRun.executeMutation({ runNumber: run.runNumber });
    }
    function isCurrentRun(run) {
      var _a;
      return run.runNumber === ((_a = current.value) == null ? void 0 : _a.runNumber);
    }
    function specsCompleted(run) {
      if (run.status === "RUNNING") {
        return t("debugPage.specCounts.whenRunning", { n: run.totalInstanceCount || 0, completed: run.completedInstanceCount || 0, total: run.totalInstanceCount || 0 });
      }
      return t("debugPage.specCounts.whenCompleted", { n: run.totalInstanceCount || 0 });
    }
    return (_ctx, _cache) => {
      var _a, _b, _c;
      return unref(shouldShow) ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              !unref(hideToggle) ? (openBlock(), createElementBlock("button", {
                key: 0,
                "aria-expanded": unref(showRuns),
                "aria-controls": "debug-runs-container",
                class: "border border-transparent rounded flex p-2px transition items-center hocus-default hover:bg-white focus:bg-white active:bg-white group-hover:outline group-hover:outline-indigo-100",
                "data-cy": "debug-toggle",
                onClick: _cache[0] || (_cache[0] = ($event) => unref(toggleRuns)())
              }, [
                createVNode(unref(b1), {
                  class: normalizeClass(["transition", { "transform rotate-90": unref(showRuns) }]),
                  "stroke-color": "indigo-400"
                }, null, 8, ["class"]),
                createBaseVNode("span", {
                  class: normalizeClass(["font-medium text-sm mr-4px ml-8px text-indigo-500", { "sr-only": !unref(latestIsCurrentlySelected) }])
                }, toDisplayString(unref(t)("debugPage.switchRun")), 3)
              ], 8, _hoisted_5)) : createCommentVNode("", true),
              unref(latestIsCurrentlySelected) ? (openBlock(), createBlock(Dot, { key: 1 })) : createCommentVNode("", true),
              unref(latestIsCurrentlySelected) ? (openBlock(), createBlock(LightText, { key: 2 }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("debugPage.mostRecentRun")), 1)
                ]),
                _: 1
              })) : ((_a = unref(latest)) == null ? void 0 : _a.status) && unref(latest).runNumber ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
                createVNode(_sfc_main$y, {
                  status: unref(latest).status,
                  value: unref(latest).runNumber,
                  class: "mx-8px"
                }, null, 8, ["status", "value"]),
                unref(latest) ? (openBlock(), createBlock(_sfc_main$z, {
                  key: 0,
                  gql: unref(latest),
                  class: "bg-white mr-12px"
                }, null, 8, ["gql"])) : createCommentVNode("", true),
                createBaseVNode("span", {
                  class: "font-medium text-gray-800 truncate",
                  title: (_b = unref(latest).commitInfo) == null ? void 0 : _b.summary
                }, toDisplayString((_c = unref(latest).commitInfo) == null ? void 0 : _c.summary), 9, _hoisted_6),
                createVNode(Dot, { class: "hidden lg:block" }),
                createBaseVNode("span", _hoisted_7, toDisplayString(specsCompleted(unref(latest))), 1)
              ], 64)) : createCommentVNode("", true)
            ]),
            !unref(latestIsCurrentlySelected) ? (openBlock(), createBlock(_sfc_main$J, {
              key: 0,
              "data-cy": "switch-to-latest",
              class: "flex-shrink-0 ml-8px",
              onClick: _cache[1] || (_cache[1] = ($event) => changeRun(unref(latest)))
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(t)("debugPage.switchToLatestRun")), 1)
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ])
        ]),
        createVNode(TransitionQuickFade, null, {
          default: withCtx(() => [
            unref(showRuns) ? (openBlock(), createElementBlock("div", _hoisted_8, [
              createBaseVNode("ul", _hoisted_9, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(unref(groupByCommit)), (sha) => {
                  var _a2;
                  return openBlock(), createElementBlock("li", {
                    key: sha,
                    "data-cy": `commit-${sha}`
                  }, [
                    createBaseVNode("div", _hoisted_11, [
                      createVNode(DebugCommitIcon, { class: "flex-shrink-0" }),
                      createVNode(LightText, { class: "flex-shrink-0 ml-12px truncate" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(sha.slice(0, 7)), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(Dot),
                      createBaseVNode("span", {
                        class: "font-medium text-sm text-gray-800 truncate",
                        title: unref(groupByCommit)[sha].message
                      }, toDisplayString(unref(groupByCommit)[sha].message), 9, _hoisted_12),
                      sha === ((_a2 = __props.currentCommitInfo) == null ? void 0 : _a2.sha) ? (openBlock(), createElementBlock("span", _hoisted_13, " Checked out ")) : createCommentVNode("", true)
                    ]),
                    unref(groupByCommit)[sha].runs ? (openBlock(), createElementBlock("ul", _hoisted_14, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(groupByCommit)[sha].runs, (run) => {
                        return openBlock(), createBlock(_sfc_main$4, {
                          key: run == null ? void 0 : run.runNumber,
                          "run-number": run == null ? void 0 : run.runNumber,
                          "is-current-run": isCurrentRun(run),
                          gql: run,
                          onChangeRun: ($event) => changeRun(run)
                        }, null, 8, ["run-number", "is-current-run", "gql", "onChangeRun"]);
                      }), 128))
                    ])) : createCommentVNode("", true)
                  ], 8, _hoisted_10);
                }), 128))
              ])
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ])) : createCommentVNode("", true);
    };
  }
});
const specsList = ({ specs, tests, localSpecs, currentTestingType, groups }) => {
  const localSpecsSet = new Set(localSpecs.map((spec) => posixify(spec.relative)));
  const groupsMap = groups.reduce((acc, group) => ({ ...acc, [group.id]: group }), {});
  const mappedTests = tests.reduce((acc, curr) => {
    let debugResult = acc[curr.specId];
    if (!debugResult) {
      const foundSpec = specs.find((spec) => spec.id === curr.specId);
      if (!foundSpec) {
        throw new Error(`Could not find spec for id ${curr.specId}`);
      }
      const groupsMapping = (foundSpec.groupIds || []).reduce((acc2, id) => {
        if (id) {
          acc2[id] = groupsMap[id];
        }
        return acc2;
      }, {});
      const testingType = Object.values(groupsMapping)[0].testingType;
      debugResult = {
        spec: foundSpec,
        tests: { [curr.thumbprint]: [curr] },
        groups: groupsMapping,
        testingType,
        matchesCurrentTestingType: testingType === currentTestingType,
        foundLocally: localSpecsSet.has(foundSpec.path)
      };
      acc[curr.specId] = debugResult;
    } else {
      if (!debugResult.tests[curr.thumbprint]) {
        debugResult.tests[curr.thumbprint] = [curr];
      } else {
        debugResult.tests[curr.thumbprint].push(curr);
      }
    }
    return acc;
  }, {});
  return Object.values(mappedTests);
};
const _hoisted_1 = { class: "h-full" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    gql: { default: void 0 },
    showError: { type: Boolean },
    isLoading: { type: Boolean, default: false },
    commitsAhead: { default: 0 },
    online: { type: Boolean, default: true },
    currentCommitInfo: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    gql`
fragment DebugLocalSpecs on Spec {
  id
  absolute
  relative
}
`;
    gql`
fragment RunDetail on CloudRun {
  ...DebugPageHeader
  cancelledBy {
    id
    fullName
    email
  }
  cancelledAt
  scheduledToCompleteAt
  id
  runNumber
  errors
  status
  overLimitActionType
  overLimitActionUrl
  isHidden
  reasonsRunIsHidden {
    __typename
    ... on DataRetentionLimitExceeded {
      dataRetentionDays
    }
    ... on UsageLimitExceeded {
      monthlyTests
    }
  }
  totalTests
  ci {
    id
    ...DebugPageDetails_cloudCiBuildInfo
  }
  testsForReview(limit: 100) {
    id
    ...DebugSpecListTests
  }
  specs {
    id
    ...DebugSpecListSpec
  }
  groups {
    id,
    ...DebugSpecListGroups
  }
  createdAt
}
`;
    gql`
fragment DebugSpecs on Query {
  currentProject {
    id
    cloudProject {
      __typename
      ... on CloudProject {
        id
        runByNumber(runNumber: $runNumber) {
          id
          ...RunDetail
        } 
        ...DebugRunNavigation
      }
    }
    specs {
      id
      ...DebugLocalSpecs
    }
    currentTestingType
  }
  ..._DebugEmptyView
}
`;
    const loginConnectStore = useLoginConnectStore();
    const cloudProject = computed(() => {
      var _a, _b, _c;
      return ((_c = (_b = (_a = props.gql) == null ? void 0 : _a.currentProject) == null ? void 0 : _b.cloudProject) == null ? void 0 : _c.__typename) === "CloudProject" ? props.gql.currentProject.cloudProject : null;
    });
    const allRuns = computed(() => {
      var _a;
      return (_a = cloudProject.value) == null ? void 0 : _a.allRuns;
    });
    const run = computed(() => {
      var _a;
      return (_a = cloudProject.value) == null ? void 0 : _a.runByNumber;
    });
    function shouldDisplayDetails(status, isHidden) {
      return !["RUNNING", "FAILED"].includes(status) || isHidden;
    }
    function shouldDisplaySpecsList(status) {
      return ["ERRORED", "CANCELLED", "TIMEDOUT", "FAILED", "RUNNING"].includes(status);
    }
    const shouldShowPendingRunSplash = computed(() => {
      var _a;
      return isRunning.value && !((_a = run.value) == null ? void 0 : _a.totalFailed);
    });
    const shouldBeFullHeight = computed(() => {
      const willShowCenteredContentInRun = !!run.value && !!run.value.status && (["PASSED", "OVERLIMIT"].includes(run.value.status) || run.value.isHidden);
      return shouldShowPendingRunSplash.value || willShowCenteredContentInRun;
    });
    const debugSpecsArray = computed(() => {
      var _a;
      if (run.value && ((_a = props.gql) == null ? void 0 : _a.currentProject)) {
        const specs = run.value.specs || [];
        const tests = run.value.testsForReview || [];
        const groups = run.value.groups || [];
        const currentTestingType = props.gql.currentProject.currentTestingType;
        const localSpecs = props.gql.currentProject.specs;
        return specsList({
          specs,
          tests,
          groups,
          localSpecs,
          currentTestingType
        });
      }
      return [];
    });
    const isRunning = computed(() => !!run.value && run.value.status === "RUNNING");
    const isScheduledToComplete = computed(() => {
      var _a;
      return !!((_a = run.value) == null ? void 0 : _a.scheduledToCompleteAt);
    });
    const reasonsRunIsHidden = computed(() => {
      var _a;
      return ((_a = run.value) == null ? void 0 : _a.reasonsRunIsHidden) || [];
    });
    const runAgeDays = computed(() => {
      var _a;
      return ((_a = run.value) == null ? void 0 : _a.createdAt) && dayjs().diff(dayjs(run.value.createdAt), "day") || 0;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(TransitionQuickFade, { mode: "out-in" }, {
          default: withCtx(() => {
            var _a;
            return [
              !__props.online ? (openBlock(), createBlock(_sfc_main$N, { key: 0 }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("launchpadErrors.noInternet.connectProject")), 1)
                ]),
                _: 1
              })) : !unref(loginConnectStore).hasInitiallyLoaded || unref(loginConnectStore).project.isProjectConnected && __props.isLoading ? (openBlock(), createBlock(_sfc_main$A, { key: 1 })) : __props.showError ? (openBlock(), createBlock(_sfc_main$7, { key: 2 })) : !unref(loginConnectStore).user.isLoggedIn ? (openBlock(), createBlock(_sfc_main$a, {
                key: 3,
                "data-cy": "debug-empty"
              })) : !unref(loginConnectStore).project.isProjectConnected ? (openBlock(), createBlock(_sfc_main$9, {
                key: 4,
                "data-cy": "debug-empty"
              })) : !unref(run) ? (openBlock(), createBlock(_sfc_main$8, {
                key: 5,
                "data-cy": "debug-empty"
              })) : ((_a = unref(run)) == null ? void 0 : _a.status) ? (openBlock(), createElementBlock("div", {
                key: 6,
                class: normalizeClass(["flex flex-col p-1.5rem gap-24px", { "h-full": unref(shouldBeFullHeight) }])
              }, [
                unref(allRuns) && unref(run).runNumber ? (openBlock(), createBlock(_sfc_main$2, {
                  key: 0,
                  class: "flex-shrink-0",
                  runs: unref(allRuns),
                  "current-run-number": unref(run).runNumber,
                  "current-commit-info": __props.currentCommitInfo
                }, null, 8, ["runs", "current-run-number", "current-commit-info"])) : createCommentVNode("", true),
                createVNode(DebugPageHeader, {
                  gql: unref(run),
                  "commits-ahead": props.commitsAhead
                }, null, 8, ["gql", "commits-ahead"]),
                createVNode(TransitionQuickFade, null, {
                  default: withCtx(() => [
                    unref(isRunning) && unref(run).id ? (openBlock(), createBlock(DebugTestingProgress, {
                      key: 0,
                      "run-id": unref(run).id,
                      class: "flex-shrink-0"
                    }, null, 8, ["run-id"])) : createCommentVNode("", true)
                  ]),
                  _: 1
                }),
                unref(shouldShowPendingRunSplash) ? (openBlock(), createBlock(_sfc_main$w, {
                  key: 1,
                  class: "flex-grow",
                  "is-completion-scheduled": unref(isScheduledToComplete)
                }, null, 8, ["is-completion-scheduled"])) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                  shouldDisplayDetails(unref(run).status, unref(run).isHidden) ? (openBlock(), createBlock(_sfc_main$f, {
                    key: 0,
                    status: unref(run).status,
                    specs: unref(run).specs,
                    cancellation: { cancelledAt: unref(run).cancelledAt, cancelledBy: unref(run).cancelledBy },
                    "is-hidden": unref(run).isHidden,
                    "reasons-run-is-hidden": unref(reasonsRunIsHidden),
                    "over-limit-action-type": unref(run).overLimitActionType,
                    "over-limit-action-url": unref(run).overLimitActionUrl,
                    ci: unref(run).ci,
                    errors: unref(run).errors,
                    "run-age-days": unref(runAgeDays)
                  }, null, 8, ["status", "specs", "cancellation", "is-hidden", "reasons-run-is-hidden", "over-limit-action-type", "over-limit-action-url", "ci", "errors", "run-age-days"])) : createCommentVNode("", true),
                  unref(run).totalFailed && shouldDisplaySpecsList(unref(run).status) ? (openBlock(), createBlock(_sfc_main$m, {
                    key: 1,
                    specs: unref(debugSpecsArray)
                  }, null, 8, ["specs"])) : createCommentVNode("", true),
                  unref(run).totalFailed && unref(run).totalFailed > 100 ? (openBlock(), createBlock(DebugSpecLimitBanner, {
                    key: 2,
                    "failed-test-count": unref(run).totalFailed,
                    "cloud-run-url": unref(run).url
                  }, null, 8, ["failed-test-count", "cloud-run-url"])) : createCommentVNode("", true)
                ], 64))
              ], 2)) : createCommentVNode("", true)
            ];
          }),
          _: 1
        })
      ]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const online = useOnline();
    gql`
subscription Debug_specsChange {
  specsChange {
    id
    specs {
      id
      ...DebugLocalSpecs
    }
  }
}
`;
    gql`
query Debug($runNumber: Int!, $commitShas: [String!]!) {
  ...DebugSpecs
}
`;
    const relevantRuns = useRelevantRun("DEBUG");
    const variables = computed(() => {
      var _a;
      return {
        runNumber: ((_a = relevantRuns.value.selectedRun) == null ? void 0 : _a.runNumber) || -1,
        commitShas: relevantRuns.value.commitShas
      };
    });
    const shouldPauseQuery = computed(() => {
      return variables.value.runNumber === -1 || !online;
    });
    const cachedProject = ref();
    const query = useQuery({ query: DebugDocument, variables, pause: shouldPauseQuery, requestPolicy: "network-only" });
    const isLoading = computed(() => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
      const relevantRunsHaveNotLoaded = !relevantRuns.value;
      const queryIsBeingFetched = query.fetching.value;
      const cloudProject = ((_c = (_b = (_a = query.data.value) == null ? void 0 : _a.currentProject) == null ? void 0 : _b.cloudProject) == null ? void 0 : _c.__typename) === "CloudProject" ? (_e = (_d = query.data.value) == null ? void 0 : _d.currentProject) == null ? void 0 : _e.cloudProject : null;
      const currentRunNumber = (_g = (_f = relevantRuns.value) == null ? void 0 : _f.selectedRun) == null ? void 0 : _g.runNumber;
      const cachedRunNumber = ((_j = (_i = (_h = cachedProject.value) == null ? void 0 : _h.currentProject) == null ? void 0 : _i.cloudProject) == null ? void 0 : _j.__typename) === "CloudProject" ? (_k = cachedProject.value.currentProject.cloudProject.runByNumber) == null ? void 0 : _k.runNumber : void 0;
      const currentRunIsChanging = currentRunNumber !== cachedRunNumber;
      const waitingForRunToFetchFromTheCloud = !!currentRunNumber && currentRunNumber > 0 && (!cloudProject || !((_l = cloudProject.runByNumber) == null ? void 0 : _l.status));
      return relevantRunsHaveNotLoaded || currentRunIsChanging && (queryIsBeingFetched || waitingForRunToFetchFromTheCloud);
    });
    watchEffect(() => {
      var _a, _b, _c;
      if (((_c = (_b = (_a = query.data.value) == null ? void 0 : _a.currentProject) == null ? void 0 : _b.cloudProject) == null ? void 0 : _c.__typename) === "CloudProject") {
        const cloudProject = query.data.value.currentProject.cloudProject;
        if (cloudProject.runByNumber !== void 0) {
          cachedProject.value = query.data.value;
        }
      }
    });
    useSubscription({ query: Debug_SpecsChangeDocument });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        "data-cy": "debug-container",
        gql: cachedProject.value,
        "is-loading": unref(isLoading),
        "commits-ahead": unref(relevantRuns).commitsAhead || 0,
        "current-commit-info": unref(relevantRuns).currentCommitInfo,
        online: unref(online)
      }, null, 8, ["gql", "is-loading", "commits-ahead", "current-commit-info", "online"]);
    };
  }
});
export {
  _sfc_main as default
};
