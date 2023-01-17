import type { Plugin, Options } from "ajv/dist/2019";
import type { VNode } from "vue";
import type { TKeyStringAnyMap } from "./common.type";
import type {
  TControlFunc,
  TCustomComponents,
  TCustomFunc,
  TUiComponents,
  TUnitedSchema,
} from "./schema.type";

/**
 * form container 和 form 通用props
 */
export type TRocketFormProps = {
  // ajv 插件
  plugins?: Array<Plugin<Options>> | Plugin<Options>;
  // 表单数据
  formData?: TKeyStringAnyMap;
  // 自定组件
  customComponents?: TCustomComponents;
  // 自定义占位符函数
  customFunc?: Record<string, TCustomFunc | VNode>;
  //
  control?: TControlFunc;
  /********************************* 必填属性 **************************************/
  // 联合 json schema, 必填
  unitedSchema: TUnitedSchema;
  // 组件对应ui库, 必填
  uiComponents: TUiComponents;
};
