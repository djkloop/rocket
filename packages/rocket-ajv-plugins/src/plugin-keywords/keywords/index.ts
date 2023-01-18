import type { Plugin } from "ajv";
import rangeDelimiter from "./rangeDelimiter";
import gbkLength from "./gbkLength";

const rocketAjvPluginKeywords: Record<string, Plugin<any> | undefined> = {
  rangeDelimiter,
  gbkLength,
};

export default rocketAjvPluginKeywords;
