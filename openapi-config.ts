import type { ConfigFile } from "@rtk-query/codegen-openapi";
import { config as envConfig } from "dotenv";

envConfig();

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const generateOutputFile = (name: string) => {
  return {
    [`./src/store/api/generated/generatedApi${name}.ts`]: {
      filterEndpoints: [new RegExp(name, `i`)],
      exportName: `generated${name}`,
    },
  };
};

const config: ConfigFile = {
  schemaFile: "https://localhost:7051/swagger/v1/swagger.json",
  apiFile: "./src/store/api/customerSupportAppApi.ts",
  apiImport: "customerSupportAppApi",
  outputFiles: {
    ...generateOutputFile("Admin"),
    ...generateOutputFile("Auth"),
    ...generateOutputFile("Category"),
    ...generateOutputFile("Comment"),
    ...generateOutputFile("Ticket"),
    ...generateOutputFile("User"),
    ...generateOutputFile("Notification"),
  },
  exportName: "customerSupportAppApi",
};

export default config;
