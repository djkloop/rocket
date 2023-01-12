import type { TKeyStringAnyMap } from "./common.type";
import type { TDataSchema } from "./schema.type";
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

export type TGetKey = (
  fieldKey: string,
  type: "uiSchema" | "dataSchema" | "data" | "unitedSchema"
) => string;
