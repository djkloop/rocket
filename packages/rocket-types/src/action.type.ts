import type {
  TClosestEdge,
  TGetFieldKey,
  TGetSchemaKey,
  TGetTypeKey,
  TKeyStringAnyMap,
} from "./common.type";
import type { TDataSchema, TUiSchema, TUnitedSchema } from "./schema.type";
import type { TState } from "./state.type";

type ResetAction = {
  type: "reset";
  action: {
    state: Omit<TState, "visibleFieldKey">;
  };
};

type SetValidate = {
  type: "setValidate";
  action: {
    deleteKeys?: Array<string> | string;
    dataSchema?: TDataSchema;
    set?: TKeyStringAnyMap;
  };
};

type SetUiAction = {
  type: "setUi";
  action: {
    deleteKeys?: Array<string> | string;
    uiSchema?: TUiSchema;
    set?: TKeyStringAnyMap;
  };
};

type SetDataAction = {
  type: "setData";
  action: {
    deleteKeys?: Array<string> | string;
    formData?: TKeyStringAnyMap;
    set?: TKeyStringAnyMap;
  };
};

type DeleteFieldAction = {
  type: "deleteField";
  action: {
    fieldKey: string;
    get: TGetFieldKey;
    getKey: TGetSchemaKey;
    getTypeKey: TGetTypeKey;
  };
};

//
type AddFieldAction = {
  type: "addField";
  action: {
    fieldKey: string;
    closestEdge: TClosestEdge;
    unitedSchema: TUnitedSchema;
    overFieldKey: string;
    shouldDelete: boolean;
    get: TGetFieldKey;
    getKey: TGetSchemaKey;
    getTypeKey: TGetTypeKey;
  };
};

// 设置自定义错误信息
type SetErrAction = {
  type: "setErr";
  action: {
    deleteKeys?: Array<string> | string;
    errors?: Record<string, string>;
    set?: Record<string, string>;
  };
};

// 设置ajv自定错误
type SetAjvErrorAction = {
  type: "setAjvErr";
  action: {
    deleteKeys?: Array<string> | string;
    errors?: Record<string, string>;
    set?: Record<string, string>;
  };
};

type SetVisibleKeyAction = {
  type: "setVisibleKey";
  action: {
    deleteKeys?: Array<string> | string;
    fieldKey?: Array<string> | string;
  };
};

// 数组容器
type SetArrayKey = {
  type: "setArrayKey";
  action: {
    // 数组父级fieldKey
    fieldKey: string;
    // 添加或删除的位置
    order?: number;
    // 是否删除 默认添加
    isDelete?: boolean;
    // 切换数组顺序
    move?: [number, number];
  };
};

// Action
export type TAciton =
  | ResetAction
  | SetValidate
  | SetUiAction
  | SetDataAction
  | DeleteFieldAction
  | AddFieldAction
  | SetErrAction
  | SetAjvErrorAction
  | SetVisibleKeyAction
  | SetArrayKey;
