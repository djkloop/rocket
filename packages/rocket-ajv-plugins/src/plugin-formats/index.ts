import formats from "./formats";
import type { formatsName } from "./formats";
import type { Plugin } from "ajv/dist/2019";

const addFormat: Plugin<Array<formatsName>> = (ajv, options) => {
  if (Array.isArray(options)) {
    Object.keys(formats)
      .filter((item) => options.includes(item as formatsName))
      .forEach((item) => {
        ajv.addFormat(item, formats[item as formatsName]);
      });
  } else if (!options) {
    Object.keys(formats).forEach((item) => {
      ajv.addFormat(item, formats[item as formatsName]);
    });
  }
  return ajv;
};

export default addFormat;
