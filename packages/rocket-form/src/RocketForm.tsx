import { defineComponent, reactive, type PropType } from "vue";
import {
  GlobalFormOptionsContextProvider,
  type TGlobalFormOptions,
  type TGlobalFormOptionsProps,
} from "@rocket/rocket-hook";
import RocketFormItem from "./RocketFormItem";
import { ThemeContextProvider } from "./RocketFormContext";

export default defineComponent({
  name: "RocketForm",
  props: {
    msg: {
      type: String as PropType<String>,
      required: true,
    },
  },
  setup(props) {
    console.log("RocketForm", props.msg);
    const globalOptions = reactive<TGlobalFormOptions>({
      reload: true,
      ajvValidateDelay: 1,
    });

    const schema = reactive({
      $schema: "http://json-schema.org/draft-07/schema#",
      properties: {
        radio1: {
          title: "单选框",
          type: "boolean",
          default: true,
        },
        select1: {
          title: "选择器",
          type: ["string", "number", "array"],
        },
      },
    });

    return () => (
      <>
        <GlobalFormOptionsContextProvider defaultGlobalOptions={globalOptions}>
          <ThemeContextProvider defaultTheme="dark">
            <RocketFormItem />
          </ThemeContextProvider>
        </GlobalFormOptionsContextProvider>
      </>
    );
  },
});
