import { useRegisterHoc } from "../composables/useRegister";
import { defineComponent, reactive, resolveComponent, useSlots } from "vue";

// props
import { RocketFormProps } from "../RocketFormProps";

/**
 * 注册一些 form 插件
 */
export default defineComponent({
  name: "RocketFormRegisterHoc",
  props: RocketFormProps,
  setup(props) {
    // scope state
    const scopeState = reactive({
      error: false,
      errorTips: "",
    });

    // register
    useRegisterHoc();

    const slots = useSlots();
    return () => (
      <>
        <div>{slots.default?.()}</div>
      </>
    );
  },
});
