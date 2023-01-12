import type { TDataSchema, TUiSchema } from "./schema.type";

export type TState = {
  typePath: Record<
    string,
    { type: string; unitedSchemaKey: string; parentKey: string }
  >;
  uiSchema: TUiSchema;
  dataSchema: TDataSchema;
  // 表单数据
  formData: Record<string, any>;
  //
  errors: Record<string, string>;
  // ajv校验错误信息
  ajvErrors: Record<string, string>;
  // 用户自定义错误
  customErrors: Record<string, string>;
  // 是否正在校验
  checking: boolean;
  // 当前可见表单
  visibleFieldKey: Array<string>;
  // 当前正在变动的表单
  changeKey: string;
  // 数组容器的key
  arrayKey: Record<string, Array<string>>;
  // 异步校验需要保留的错误key
  ignoreErrKey: Array<string>;
};
