import { ESchemaType } from "./enum.type";
import type { TDataSchema, TUiSchema } from "./schema.type";

// 拓展对象属性
export type TKeyStringAnyMap = {
  [key: string]: any;
};

// xxxx
// export type TGetKey = (fieldKey: string, type: ESchemaType) => string;

// 获取
export type TGetFieldKey = (fieldKey?: string) => {
  data: TKeyStringAnyMap | undefined;
  dataSchema: TDataSchema;
  uiSchema: TUiSchema;
};

// 获取指定字段的 schema
export type TGetSchemaKey = (fieldKey: string, type: ESchemaType) => string;

// 获取指定字段的类型
export type TGetTypeKey = (fieldKey: string) => string | never;

// ???
export type TClosestEdge = "top" | "bottom" | "left" | "right" | "over";

//
export type TDispatch<A> = (value: A) => void;
