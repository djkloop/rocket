import type { TKeyStringAnyMap } from "./common.type";

// 表单渲染前需要格式化数据
export type TOnRenderBeforeParse = (
  formData: TKeyStringAnyMap | undefined
) => TKeyStringAnyMap;

// 表单提交时需要对数据格式化
export type TOnRenderTransformParse = (
  formData: TKeyStringAnyMap | undefined
) => void | TKeyStringAnyMap;
