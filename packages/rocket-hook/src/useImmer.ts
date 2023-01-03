import produce from "immer";
import { shallowRef } from "vue";

function useImmer(baseState: any) {
  const state = shallowRef(baseState);
  const update = (updater: any) => {
    state.value = produce(state.value, updater);
  };
  return [state, update];
}

export default useImmer;
