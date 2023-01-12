import { defineComponent } from "vue";

export default defineComponent({
  name: "RocketFormErrorHoc",
  setup(props) {
    console.log(props);
    return () => <div>good3</div>;
  },
});
