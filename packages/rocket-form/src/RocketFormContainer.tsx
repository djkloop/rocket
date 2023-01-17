import { defineComponent } from "vue";
import type { PropType } from "vue";
import RocketFormErrorHoc from "./RocketFormHoc/RocketFormErrorHoc";
import RocketForm from "./RocketForm";

export default defineComponent({
  name: "RocketFormContainer",
  props: {
    msg: {
      type: String as PropType<String>,
      required: true,
    },
  },
  setup(props) {
    console.log("RocketFormContainer", props.msg);
    return () => <RocketForm msg={props.msg} />;
  },
});
