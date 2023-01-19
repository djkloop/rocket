import { useRegisterHoc } from "../composables/useRegister";
import { defineComponent, reactive, useSlots } from "vue";

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

    console.log(props.ajvOptions);

    const slots = useSlots();
    return () => <>{slots.default?.()}</>;
  },
});
