// 验证时需要的对应的 fieldKey -> data 类型
export type TValidateFuncFieldData =
  | string
  | Record<string, unknown>
  | boolean
  | number
  | Array<unknown>;

export type TAsyncValidate = {
  type: "change" | "submit" | "click";
  fn: (fieldData: TValidateFuncFieldData) => any;
};

// 验证事件
export type TOnValidate = Record<string, TAsyncValidate>;
