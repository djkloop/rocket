import { defineComponent, useSlots } from "vue";

export default defineComponent({
  name: "RocketFormRegisterHoc",
  setup() {
    const slots = useSlots();
    return () => <>{slots.default?.()}</>;
  },
});
