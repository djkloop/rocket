import { defineComponent, onErrorCaptured } from "vue";
import type { PropType } from "vue";
import RocketFormErrorHoc from "./RocketFormHoc/RocketFormErrorHoc";
import RocketForm from "./RocketForm";
import RocketFormRegisterHoc from "./RocketFormHoc/RocketFormRegisterHoc";

const CustomComponent = defineComponent({
  name: "Custom1",
  props: {
    msg: {
      type: String,
      required: true as const,
    },
  },
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

    const components = {
      custom1: CustomComponent,
    };

    return () => (
      <>
        <RocketFormRegisterHoc customComponents={components}>
          <RocketFormErrorHoc>
            <RocketForm msg={props.msg} />
          </RocketFormErrorHoc>
        </RocketFormRegisterHoc>
      </>
    );
  },
});
