import { defineComponent, reactive, type PropType, computed, ref } from "vue";
import {
  GlobalFormOptionsContextProvider,
  GlobalFormStateContextProvider,
  defaultGlobalState,
  defaultGlobalOptions,
} from "@rocket/rocket-hook";
import RocketFormItem from "./RocketFormItem";
import { ThemeContextProvider } from "./RocketFormContext";

export default defineComponent({
  name: "RocketForm",
  setup(props) {
    // 模拟props
    const _props = {
      reload: true,
      options: {},
    };

    console.log("RocketForm");
    const globalOptions = computed(() => ({
      ...defaultGlobalOptions,
      reload: _props.reload,
      ..._props.options,
    }));

    const globalState = ref(defaultGlobalState);

    // const globalOptions = reactive<TGlobalFormOptions>({
    //   reload: true,
    //   ajvValidateDelay: 1,
    // });

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
        <GlobalFormOptionsContextProvider {...defaultGlobalOptions}>
          <GlobalFormStateContextProvider>
            <ThemeContextProvider defaultTheme="dark">
              <RocketFormItem />
            </ThemeContextProvider>
          </GlobalFormStateContextProvider>
        </GlobalFormOptionsContextProvider>
      </>
    );
  },
});
