import dotenv from 'dotenv';
dotenv.config();
import type { CodegenConfig } from '@graphql-codegen/cli';

const token = process.env.DATOCMS_API_TOKEN;

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      "https://graphql.datocms.com/": {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    }
  ],
  documents: "./graphql/**/*.graphql",
  generates: {
    "graphql/generated.ts": {
      plugins: [
        "typescript", "typescript-operations", "typed-document-node"
      ],
      config: {
        strictScalars: true,
        scalars: {
          BooleanType: "boolean",
          CustomData: "Record<string, unknown>",
          Date: "string",
          DateTime: "string",
          FloatType: "number",
          IntType: "number",
          ItemId: "string",
          JsonField: "unknown",
          MetaTagAttributes: "Record<string, string>",
          UploadId: "string",
        }
      }
    }
  }
};

export default config;
