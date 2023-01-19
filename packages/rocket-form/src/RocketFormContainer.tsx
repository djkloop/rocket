import { defineComponent, onErrorCaptured, resolveComponent } from "vue";
import type { PropType } from "vue";
import RocketFormErrorHoc from "./RocketFormHoc/RocketFormErrorHoc";
import RocketForm from "./RocketForm";
import RocketFormRegisterHoc from "./RocketFormHoc/RocketFormRegisterHoc";

const customComponent = defineComponent({
  name: "Custom1",
  setup() {
    return () => <div>124</div>;
  },
});

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
        <RocketFormRegisterHoc customComponents={{ custom1: customComponent }}>
          <RocketFormErrorHoc>
            <RocketForm msg={props.msg} />
          </RocketFormErrorHoc>
        </RocketFormRegisterHoc>
      </>
    );
  },
});
