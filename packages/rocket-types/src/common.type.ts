import { ESchemaType, ESetSchemaType } from "./enum.type";
import type { TDataSchema, TUiSchema } from "./schema.type";

// ???
export type TClosestEdge = "top" | "bottom" | "left" | "right" | "over";

// 函数
export type TFunction = {
  [propName: string]: (...args: any[]) => any;
};

// 拓展对象属性
export type TKeyStringAnyMap = {
  [key: string]: any;
};

export type TStaticValue =
  | undefined
  | null
  | string
  | number
  | boolean
  | Record<string, unknown>
  | Array<unknown>;

/************************************* Get *********************************************/
/**
 * 获取单个fieldkey
 */
export type TGetFieldKey = (fieldKey?: string) => {
  data: TKeyStringAnyMap | undefined;
  dataSchema: TDataSchema;
  uiSchema: TUiSchema;
};

// 获取指定字段的 schema
export type TGetSchemaKey = (fieldKey: string, type: ESchemaType) => string;

// 获取指定字段的类型
export type TGetTypeKey = (fieldKey: string) => string | never;

/************************************* Set *********************************************/
//
type TSetFn = (value: unknown) => void;

// 设置某个fieldKey的值
export type TSetFieldKey = (
  fieldKey: string,
  type: ESetSchemaType,
  value: TSetFn | TStaticValue
) => void;

// merge 某个fieldKey 字段
export type TMergeFieldKey = (
  fieldKey: string,
  type: ESetSchemaType,
  value: TStaticValue
) => void;

/**
 * 删除某个 fieldKey
 * @param fieldKey String 某个字段key
 * @param cb Function 回调函数
 */
export type TDeleteFieldKey = (fieldKey: string, cb?: () => void) => void;

type TAddFieldKeyParams = {
  fieldKey: string;
  closestEdge: TClosestEdge;
  // TODO: 联合类型?
  unitedSchema: TKeyStringAnyMap;
  overFieldKey: string;
  shouldDelte: boolean;
  cb: () => void;
};
/**
 * 增加 fieldKey
 * @param fieldKey TAddFieldKeyParams 添加key需要的参数
 */
export type TAddFieldKey = (fieldKey: TAddFieldKeyParams) => void;

//
export type TDispatch<A> = (value: A) => void;
