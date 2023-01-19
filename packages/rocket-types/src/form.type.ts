// libs types
import type { DefineComponent, Ref, VNode } from "vue";
import type { Plugin, Options } from "ajv/dist/2019";
// types
import type {
  TAddFieldKey,
  TDeleteFieldKey,
  TFunction,
  TGetFieldKey,
  TKeyStringAnyMap,
  TMergeFieldKey,
  TSetFieldKey,
} from "./common.type";
import type {
  TOnRenderBeforeParse,
  TOnRenderTransformParse,
} from "./parse.type";
import type { TOnValidate } from "./validate.type";
import type {
  TControlFunc,
  TCustomComponents,
  TCustomFunc,
  TUiComponents,
  TUnitedSchema,
} from "./schema.type";
import type { TContainerHoc } from "./render.type";
import type { TOnEmitCancle, TOnEmitEvent, TOnEmitSubmit } from "./event.type";

export type TFormRefSubmitReturn = {
  formData: Record<string, any>;
  errors: TKeyStringAnyMap;
  checking: boolean;
};
/**
 * form ref type
 */
export type TRocketFormRef = {
  reset: () => void;
  submit: () => Promise<TFormRefSubmitReturn>;
  get: TGetFieldKey;
  set: TSetFieldKey;
  merge: TMergeFieldKey;
  errors: TKeyStringAnyMap;
  checking: boolean;
  formData: TKeyStringAnyMap;
  __generator__: {
    deleteField: TDeleteFieldKey;
    addField: TAddFieldKey;
  };
};

/**
 * form container 和 form 通用props
 */
export type TRocketFormProps = {
  // ajv 插件
  plugins?: Array<Plugin<Options>> | Plugin<Options>;
  // ajvOptions
  ajvOptions?: Options;
  // 全局数据, 需要每个组件使用
  globalContextData?: Record<string, any>;
  // 表单数据
  formData?: TKeyStringAnyMap;
  // 自定组件
  customComponents?: TCustomComponents;
  // 联动控制
  control?: TControlFunc;
  // 重新 render ??
  reload?: boolean;
  // 包裹组件
  containerHoc?: TContainerHoc;
  // 自定义占位符函数
  customFunc?: Record<string, TCustomFunc | VNode>;
  // 异步请求
  onQuery?: TFunction;
  // 验证
  onValidate?: TOnValidate;
  // 表单渲染前解析数据，只会触发一次
  onRenderBeforeParse?: TOnRenderBeforeParse;
  // 表单提交时 对数据进行格式化
  onRenderTransformParse?: TOnRenderTransformParse;
  // 表单提交事件
  onEmitSubmit?: TOnEmitSubmit;
  // 表单取消事件
  onEmitCancle?: TOnEmitCancle;
  // 生命周期事件
  onMounted?: (ref: Ref<TRocketFormRef>) => void;
  // 表单公共emit事件
  onEmitEvent?: TOnEmitEvent;
  // fetch -> axios
  onFetchApi?: any;
  /********************************* 必填属性 **************************************/
  // 联合 json schema, 必填
  unitedSchema: TUnitedSchema;
  // 组件对应ui库, 必填
  uiComponents: TUiComponents;
};
