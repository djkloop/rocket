import type { Component } from "vue";
import type { TAciton } from "./action.type";
import type {
  TDeleteFieldKey,
  TGetFieldKey,
  TMergeFieldKey,
  TSetFieldKey,
} from "./common.type";
import type { TKeyStringAnyMap, TDispatch as TDispatchR } from "./common.type";
import type { TFlow } from "./flow-action.type";
import type { TTheme } from "./theme.type";

/**
 * 自定义组件类型
 */
export type TCustomComponents = Record<string, Component>;

export type TSchemaDispatch = TDispatchR<TAciton>;

// ??
export enum EUiSchemaFormMode {
  EDIT = "edit",
  VIEW = "view",
  GENERATOR = "generator",
}

// ??
export enum EUiSchemaMode {
  ADD = "add",
  NORMAL = "normal",
  COLLAPSE = "collapse",
  TUPLE = "tuple",
  FIXED = "fixed",
}

// 标题位置
export type TTitlePlacemenetPosition = "left" | "right" | "top" | "bottom";

// OnChange 传递参数
type TOnChangeParams = {
  val: any;
  dispatch: TSchemaDispatch;
  getKey: TGetFieldKey;
  fieldKey: string;
  prevFieldData: any;
  fieldData: any;
};
// OnChange
export type TOnChange =
  | (({
      val,
      dispatch,
      fieldKey,
      getKey,
      prevFieldData,
      fieldData,
    }: TOnChangeParams) => void)
  | string;

// 容器样式
export type TContainerStyle = Partial<{
  // 表单宽度
  width: string | number;
  // 容器 margin
  margin: string;
  // 容器 margin-top
  marginTop: number | string;
  // 容器 margin-bottom
  marginBottom: number | string;
  // 容器 margin-left
  marginLeft: number | string;
  // 容器 margin-right
  marginRight: number | string;
  // 容器 padding
  padding: string;
  // 容器 padding-top
  paddingTop: number | string;
  // 容器 padding-bottom
  paddingBottom: number | string;
  // 容器 padding-left
  paddingLeft: number | string;
  // 容器 padding-right
  paddingRight: number | string;
}> | null;

// 自定义标题相关的配置
export type TTitleUi = Partial<{
  // 标题宽度
  width: string | number;
  // 标题 margin
  margin: string;
  // 标题 margin-top
  marginTop: number | string;
  // 标题 margin-bottom
  marginBottom: number | string;
  // 标题 margin-left
  marginLeft: number | string;
  // 标题 margin-right
  marginRight: number | string;
  // 标题垂直对齐方式
  verticalAlign: "top" | "center" | "bottom";
  // 标题水平对齐方式
  textAlign: "left" | "center" | "right";
  // 是否展示必填*号
  requiredIcon: boolean;
  // 标题的位置
  placemenet: TTitlePlacemenetPosition;
  // 标题文字颜色
  color: string;
  // 标题文字的大小
  fontSize: string | number;
  // ???
  showColon?: boolean;
}> | null;

// TUiSchema
export type TUiSchema = {
  // 表单模式
  formMode?: EUiSchemaFormMode;
  // 表单容器样式
  containerStyle?: TContainerStyle;
  // 标题
  title?: TTitleUi;
  onChange?: TOnChange;
  flow?: TFlow;
  /******************必填属性***********************/
  // 每个组件的模式?
  mode: EUiSchemaMode;
  // 主题
  theme: TTheme;
  // 类型
  type: string;
  // 拓展属性
  [propName: string]: unknown;
};

// ui schema
export type TUnitedSchema = {
  // 使用的默认主题类型
  theme?: TTheme;
  // 校验时机
  validateTime?: "submit" | "change" | string;
  // ???
  requiredMode?: "default" | "empty";
  // 标题样式
  title?: string;
  // json schema
  // 例如组件的 placeholder, 是否多选
  ui?: TKeyStringAnyMap;
  // json schema 数据层
  schema?: Array<TKeyStringAnyMap>;
  // ???
  items?: Array<TKeyStringAnyMap> | TKeyStringAnyMap;
} & TKeyStringAnyMap;

// data schema
export type TDataSchema = {
  // ???
  type: string;
  validateTime?: "submit" | "change";
  requiredMode?: "default" | "empty";
  properties?: TKeyStringAnyMap;
  items?: Array<TKeyStringAnyMap> | TKeyStringAnyMap;
  required?: Array<string | number>;
  errorMessage?: {
    required: TKeyStringAnyMap;
    properties?: TKeyStringAnyMap;
    items?: TKeyStringAnyMap;
    [propName: string]: unknown;
  };
} & TKeyStringAnyMap;

// 组件类型
export type TUiComponentType = {
  [propName: string]: any;
} & {
  theme: string;
};

/**
 * ui 组件
 * 支持不同组件使用不同的ui库
 */
export type TUiComponents = Partial<Record<TTheme, TUiComponentType>>;

/**
 * 函数占位符
 * @url https://jdfed.github.io/drip-form/docs/use/customFunc
 */
export type TCustomFunc = (
  val: any,
  dispatch: TSchemaDispatch,
  fieldKey: string,
  prevFieldData?: any
) => void;

type TControlFuncParams = {
  formData: TKeyStringAnyMap;
  uiSchema: TKeyStringAnyMap; // 这里不应该是用uiSchema?
  dataSchema: TKeyStringAnyMap; // 这里不应该是用dataSchema?
  dispatch: TSchemaDispatch;
  changeKey: string;
  checking: boolean;
  get: TGetFieldKey;
  set: TSetFieldKey;
  merge: TMergeFieldKey;
  delete: TDeleteFieldKey;
  errors: TKeyStringAnyMap;
};

/**
 * control 联动控制（简单的）
 * @url https://jdfed.github.io/drip-form/docs/use/control
 */
export type TControlFunc = (params: TControlFuncParams) => void;
