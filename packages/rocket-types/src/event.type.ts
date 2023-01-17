import type { TKeyStringAnyMap } from "./common.type";

type TEmitCommonParams = {
  formData: TKeyStringAnyMap;
  errors: TKeyStringAnyMap;
  checking: boolean;
};

export type TOnEmitSubmit = (params: TEmitCommonParams) => void;
export type TOnEmitCancle = (params: TEmitCommonParams) => void;

type TOnEmitEventParams = {
  type: string;
  payload: any;
};

export type TOnEmitEvent = (event: TOnEmitEventParams) => any;
