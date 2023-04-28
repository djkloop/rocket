import { defineComponent } from "vue";

import { Props } from "./props";

const Custom1 = defineComponent({
  name: "Custom1",
  props: Props,
  setup() {
    return () => <div>124</div>;
  },
});

export default Custom1;
