import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "RocketFormErrorHoc",
  setup(props) {
    let n = ref(0);
    const onAddClick = () => n.value++;

    return () => (
      <>
        <div>good3 - {n.value}</div>
        <button onClick={onAddClick}>click</button>
      </>
    );
  },
});
