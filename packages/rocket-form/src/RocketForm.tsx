import { defineComponent, reactive, type PropType } from "vue";
import {
  GlobalFormOptionsContextProvider,
  type TGlobalFormOptions,
  type TGlobalFormOptionsProps,
} from "@rocket/rocket-hook";
import RocketFormItem from "./RocketFormItem";

export default defineComponent({
  name: "RocketForm",
  props: {
    msg: {
      type: String as PropType<String>,
      required: true,
    },
  },
  setup(props) {
    const globalOptions = reactive<TGlobalFormOptions>({
      reload: true,
      ajvValidateDelay: 1,
    });

    return () => (
      <>
        <GlobalFormOptionsContextProvider defaultGlobalOptions={globalOptions}>
          <div>good2 - {props.msg}</div>
          <RocketFormItem />
        </GlobalFormOptionsContextProvider>
      </>
    );
  },
});
