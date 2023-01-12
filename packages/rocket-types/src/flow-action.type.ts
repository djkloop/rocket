// nubmer 类型支持的操作符
type TNumberOperator = ">=" | "<=" | "<" | ">" | "===" | "!==";

// string 类型支持的操作符
type TStringOperator = "===" | "!==" | "includes" | "-includes";

// boolean 类型支持的操作符
type TBooleanOperator = "true" | "false";

// object 类型支持的操作符
type TObjectOperator = "in" | "-in";

// array 类型支持的操作符
type TArrayOperator = "includes" | "-includes";

type TFlowAction = TControlFlowAction;

export type TOperator =
  | TNumberOperator
  | TStringOperator
  | TBooleanOperator
  | TObjectOperator
  | TArrayOperator
  // 数据变化时
  | "change"
  | "";

export type TCondition = {
  /**
   * 格式："fieldKey setType property" "fieldKey setType"
   * fieldkey： 需要获取的表单的fieldkey
   * setType： data|uiSchema|dataSchema
   * property: 可选 获取属性
   */
  fieldKey1: string;
  // 空字符用来初始化逻辑，新增条件时，value1未选择，操作符不应该展示
  operator: TOperator;
  // "fieldKey setType property" "fieldKey setType"
  fieldKey2?: string;
  value2?: unknown;
  logicOperator?: "&&" | "||";
};

export type TSetEffect = {
  type: "set" | "merge";
  /**
   * 格式："fieldKey setType property" "fieldKey setType"
   * fieldkey： 需要获取的表单的fieldkey
   * setType： data|uiSchema|dataSchema
   * property: 可选 获取属性
   */
  fieldKey: string;
  // 如果fieldkey 格式为fieldKey uiSchema vcontrol，则value为boolean类型
  value: unknown;
};

type TSubAction = {
  type: "subAction";
  actions: Array<TFlowAction>;
};

type TEffect = Array<TSetEffect | TSubAction>;

export type TControlFlowAction = {
  type: "controlFlow";
  condition: Array<TCondition>;
  effect: TEffect;
};

export type TFlow = {
  // 版本号
  version: string;
  trigger: {
    event: "globalChange";
  };
  actions: Array<TFlowAction>;
};
