import Ajv2019 from "ajv/dist/2019";
import draft7MetaSchema from "ajv/dist/refs/json-schema-draft-07.json";
import draft6MetaSchema from "ajv/dist/refs/json-schema-draft-06.json";

// ajv plugins
import ajvKeywords from "ajv-keywords";
import ajvErrors from "ajv-errors";
import ajvFormats from "ajv-formats";
import ajvFormatsDraft2019Apply from "ajv-formats-draft2019";
// custom ajv plugins
import rocketAjvPlugins from "@rocket/rocket-ajv-plugins";

import type Ajv from "ajv/dist/2019";
import type { Plugin, Options } from "ajv/dist/2019";

const registerAjv = (options?: Options): Ajv => {
  // 使用2019 schema 草案
  const ajv = new Ajv2019({
    // 不允许type:['string','number']等联合模式 推荐使用anyOf代替
    allowUnionTypes: false,
    //支持default关键字输出到formData
    useDefaults: true,
    // 展示所有错误信息。为false时，检测到错误立马返回，后续错误不会返回
    allErrors: true,
    // 错误信息包含schema、parentSchema
    verbose: true,
    // 支持$data引用，参考：https://ajv.js.org/guide/combining-schemas.html#data-reference
    $data: true,
    // 支持鉴别关键字 参考：https://ajv.js.org/json-schema.html#discriminator
    discriminator: true,
    // 是否删除数据中Schema未定义的字段
    removeAdditional: false,
    ...options,
  });

  // 支持草案7
  ajv.addMetaSchema(
    draft7MetaSchema,
    "http://json-schema.org/draft-07/schema#"
  );
  // 支持草案6
  ajv.addMetaSchema(draft6MetaSchema, "draft6");
  // 添加ajv-keywords关键字
  ajvKeywords(ajv);
  // 添加ajv-errors
  ajvErrors(ajv);
  // 添加ajv-formats
  ajvFormats(ajv);
  // 添加draft2019的formats
  ajvFormatsDraft2019Apply(ajv);
  // 和drip-form保持一致
  ajv.addVocabulary([
    "validateTime",
    "requiredMode",
    "$container",
    // 用于绑定generator 切换的fieldKey
    "$fieldKey",
    "customFormat",
    // v1需要过滤该字段
    "transformToObject",
    "flow",
  ]);

  rocketAjvPlugins.addKeywords(ajv);

  rocketAjvPlugins.addFormats(ajv);

  return ajv;
};

const loadAjvPlugins = (
  ajv: Ajv,
  plugins?: Plugin<Options>[] | Plugin<Options>
) => {
  if (plugins) {
    if (Array.isArray(plugins)) {
      plugins.forEach(async (plugin) => {
        try {
          plugin(ajv);
        } catch (error) {
          console.error(`load ajv plugin - ${plugins} - error`);
          console.error(error);
        }
      });
    } else if (typeof plugins === "function") {
      try {
        plugins(ajv);
      } catch (error) {
        console.error("load ajv plugin error");
        console.error(error);
      }
    }
  }
};

export default {
  registerAjv,
  loadAjvPlugins,
};
