import type { Plugin } from "ajv/dist/2019";
import type { KeywordDefinition } from "ajv";
import type { GetDefinition } from "../../types";
const getDef: GetDefinition<KeywordDefinition> = (): KeywordDefinition => {
  return {
    keyword: "rangeDelimiter",
    type: "string",
    validate: (
      schema: { delimiter: string; max: number; min: number },
      data: string
    ) => {
      const { delimiter, max, min } = schema;
      const dataList = data.split(delimiter).filter((item) => item).length;
      return !(dataList > max || dataList < min);
    },
  };
};

const rangeDelimiter: Plugin<undefined> = (ajv) => ajv.addKeyword(getDef());

export default rangeDelimiter;
