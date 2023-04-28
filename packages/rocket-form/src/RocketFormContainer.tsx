import { defineComponent, onErrorCaptured } from "vue";
import type { PropType } from "vue";
import RocketFormErrorHoc from "./RocketFormHoc/RocketFormErrorHoc";
import RocketForm from "./RocketForm";
import RocketFormRegisterHoc from "./RocketFormHoc/RocketFormRegisterHoc";

export default defineComponent({
  name: "RocketFormContainer",
  props: {
    msg: {
      type: String as PropType<String>,
      required: true,
    },
  },
  setup(props) {
    onErrorCaptured((err) => {
      console.log(err, " RocketFormRegisterHoc ");
    });

    return () => (
      <>
        <RocketFormRegisterHoc>
          <RocketFormErrorHoc>
            <RocketForm />
          </RocketFormErrorHoc>
        </RocketFormRegisterHoc>
      </>
    );
  },
});
