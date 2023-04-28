import { createContext } from "vc-state";
import { reactive } from "vue";

export enum EUndefinedComponentType {
  TIPS = "tips",
  CONSOLE = "console",
}

/**
 *
 */
type TUndefinedComponentFnParam = {
  theme?: string;
  type?: string;
  fieldKey: string;
};

/**
 *
 */
export type TUndefinedComponentFn = (
  param: TUndefinedComponentFnParam
) => string;

/**
 *
 */
export type TGlobalFormOptions = Partial<{
  /**
   *
   */
  reload: boolean;
  /**
   *
   */
  undefinedComponent: {
    type: EUndefinedComponentType;
    value: string | TUndefinedComponentFn;
  };
  /**
   *
   */
  ajvValidateDelay: number;
}>;

export const defaultGlobalOptions: TGlobalFormOptions = {
  reload: true,
  ajvValidateDelay: 0,
  undefinedComponent: {
    type: EUndefinedComponentType.TIPS,
    value: ({ theme, type, fieldKey }) => {
      if (theme && type) {
        return `无法找到主题${theme}中的${type}组件，请确认是否导入`;
      } else {
        return `无法找到自定义组件${fieldKey}，请确认是否导入`;
      }
    },
  },
}

// create context
const [GlobalFormOptionsContextProvider, useGlobalFormOptionsContext] =
  createContext((props: TGlobalFormOptions) => {
    const defaultGlobalFormOptions: TGlobalFormOptions = reactive(defaultGlobalOptions);

    // 合并一下值
    Object.assign(defaultGlobalFormOptions, props);

    return { defaultGlobalFormOptions };
  });

GlobalFormOptionsContextProvider.displayName =
  "GlobalFormOptionsContextProvider";

export { GlobalFormOptionsContextProvider };

export default useGlobalFormOptionsContext;
