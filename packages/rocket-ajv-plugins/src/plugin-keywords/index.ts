import plugins from "./keywords";

import type { Plugin } from "ajv";
import type Ajv from "ajv";

const addKeywords: Plugin<string | string[]> = (
  ajv: Ajv,
  keyword?: string | string[]
): Ajv => {
  if (Array.isArray(keyword)) {
    for (const k of keyword) get(k)(ajv);
    return ajv;
  }

  if (keyword) {
    get(keyword)(ajv);
    return ajv;
  }

  for (keyword in plugins) get(keyword)(ajv);
  return ajv;
};

addKeywords.get = get;

function get(keyword: string): Plugin<any> {
  const defFunc = plugins[keyword];
  if (!defFunc) throw new Error("Unknown keyword " + keyword);
  return defFunc;
}

export default addKeywords;
