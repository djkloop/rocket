import { defineComponent } from "vue";
import { useGlobalFormOptions } from "@rocket/rocket-hook";

export default defineComponent({
  name: "RocketFormItem",
  setup() {
    const { defaultGlobalFormOptions } = useGlobalFormOptions();

    return () => (
      <div>global context - {defaultGlobalFormOptions.reload + ""}</div>
    );
  },
});
