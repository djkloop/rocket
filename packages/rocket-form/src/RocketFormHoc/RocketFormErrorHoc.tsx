import { defineComponent, useSlots } from "vue";

/**
 * 全局 Form 错误处理 高阶组件
 */
export default defineComponent({
  name: "RocketFormErrorHoc",
  setup() {
    const slots = useSlots();
    return () => <>{slots.default?.()}</>;
  },
});
