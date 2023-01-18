import type { Plugin } from "ajv/dist/2019";
import type { FuncKeywordDefinition } from "ajv";
import type { GetDefinition } from "../../types";

type TKeywordName = "gbkLength";

const getGbkLength =
  (keyword: TKeywordName): GetDefinition<FuncKeywordDefinition> =>
  () => ({
    keyword,
    type: "string",
    validate: (schema: { max: number; min: number }, data: string): boolean => {
      const { max, min } = schema;

      const len = data.trim().replace(/[^\x00-\xff]/g, "aa").length;

      if (min !== void 0 && min > len) {
        return false;
      } else if (max !== void 0 && max < len) {
        return false;
      }
      return true;
    },
  });

const getDef: GetDefinition<FuncKeywordDefinition> = getGbkLength("gbkLength");

const gbkLength: Plugin<undefined> = (ajv) => ajv.addKeyword(getDef());

export default gbkLength;
