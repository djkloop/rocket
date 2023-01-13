import type {
  TClosestEdge,
  TGetFieldKey,
  TGetSchemaKey,
  TGetTypeKey,
  TKeyStringAnyMap,
} from "./common.type";
import { ESchemaType } from "./enum.type";
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

type SetErrAction = {
  type: "setErr";
  action: {
    deleteKey?: Array<string> | string;
    errors?: Record<string, string>;
    set?: Record<string, string>;
  };
};
