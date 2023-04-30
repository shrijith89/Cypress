import { g as gql, b as useMutation, dA as UseCohorts_DetermineCohortDocument, k as ref, o as openBlock, U as createElementBlock, B as createBaseVNode, d as defineComponent, t as toDisplayString } from "./index-e70bedc5.js";
gql`
mutation UseCohorts_DetermineCohort ($name: String!, $cohorts: [String!]!) {
  determineCohort(cohortConfig: { name: $name, cohorts: $cohorts } ) {
    __typename
    name
    cohort
  }
}`;
const useCohorts = () => {
  const determineCohortMutation = useMutation(UseCohorts_DetermineCohortDocument);
  const determineCohort = async (name, cohorts) => {
    return await determineCohortMutation.executeMutation({
      name,
      cohorts
    });
  };
  const getCohort = (config) => {
    const cohortOptionSelected = ref();
    const { name, options } = config;
    if (!options || options.length <= 1) {
      cohortOptionSelected.value = options == null ? void 0 : options[0];
    } else {
      const cohortIds = options.map((option) => option.cohort);
      const fetchCohort = async () => {
        const cohortSelected = await determineCohort(name, cohortIds);
        cohortOptionSelected.value = options.find((option) => {
          var _a, _b;
          return option.cohort === ((_b = (_a = cohortSelected.data) == null ? void 0 : _a.determineCohort) == null ? void 0 : _b.cohort);
        });
      };
      fetchCohort();
    }
    return cohortOptionSelected;
  };
  return {
    getCohort
  };
};
const _hoisted_1$2 = {
  height: "1em",
  width: "1em",
  style: { "min-width": "14px", "min-height": "14px" },
  viewBox: "0 0 14 8",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M10 4C10 5.65685 8.65685 7 7 7C5.34315 7 4 5.65685 4 4C4 2.34315 5.34315 1 7 1C8.65685 1 10 2.34315 10 4Z",
  fill: "#E1E3ED"
}, null, -1);
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M10 4C10 5.65685 8.65685 7 7 7C5.34315 7 4 5.65685 4 4M10 4C10 2.34315 8.65685 1 7 1C5.34315 1 4 2.34315 4 4M10 4H13M4 4H1",
  stroke: "#9095AD",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_4 = [
  _hoisted_2$2,
  _hoisted_3$2
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_4);
}
const CommitIcon = { name: "cy-commit_x14", render: render$1 };
const _hoisted_1$1 = {
  height: "1em",
  width: "1em",
  style: { "min-width": "4px", "min-height": "4px" },
  viewBox: "0 0 4 4",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("circle", {
  cx: "2",
  cy: "2",
  r: "2",
  fill: "#1FA971",
  class: "icon-light"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
const __unplugin_components_0 = { name: "cy-dot-solid_x4", render };
const _hoisted_1 = ["title"];
const _hoisted_2 = { class: "font-semibold text-gray-800" };
const _hoisted_3 = { class: "text-gray-600" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    specFileName: null,
    specFileExtension: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "max-w-60 truncate overflow-hidden",
        "data-cy": "spec-filename",
        title: __props.specFileName + __props.specFileExtension
      }, [
        createBaseVNode("span", _hoisted_2, toDisplayString(__props.specFileName), 1),
        createBaseVNode("span", _hoisted_3, toDisplayString(__props.specFileExtension), 1)
      ], 8, _hoisted_1);
    };
  }
});
export {
  CommitIcon as C,
  _sfc_main as _,
  __unplugin_components_0 as a,
  useCohorts as u
};
