import type { PropType } from "vue";
import type { Options, Plugin } from "ajv/dist/2019";
import type { TKeyStringAnyMap } from "@rocket/rocket-types";

// rocket form props
export const RocketFormProps = {
  plugins: {
    type: Array as PropType<Array<Plugin<Options>> | Plugin<Options>>,
  },
  ajvOptions: {
    type: Object as PropType<Options>,
  },
  globalContextData: {
    type: Object as PropType<Record<string, unknown>>,
  },
  formData: {
    type: Object as PropType<TKeyStringAnyMap>,
  },
};
