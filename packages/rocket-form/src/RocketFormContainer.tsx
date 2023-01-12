import { defineComponent } from "vue";
import RocketFormErrorHoc from "./RocketFormHoc/RocketFormErrorHoc";

export default defineComponent({
  name: "RocketFormContainer",
  setup(props) {
    console.log("RocketFormContainer", props);
    return () => <RocketFormErrorHoc />;
  },
});
