import { createContext } from "vc-state";

export type TGlobalState = Partial<{
  // 暂存的错误信息
  stageErrors: Record<string, string>
}>

// 默认全局状态
export const defaultGlobalState: TGlobalState = {
  stageErrors: {},
}

const [GlobalFormStateContextProvider, useGlobalFormDefaultStateContext] =
  createContext((props: TGlobalState) => {
    Object.assign(defaultGlobalState, props)
    return {
      defaultGlobalState
    }
  });

GlobalFormStateContextProvider.displayName = "GlobalFormStateContextProvider"

export { GlobalFormStateContextProvider }

export default useGlobalFormDefaultStateContext
