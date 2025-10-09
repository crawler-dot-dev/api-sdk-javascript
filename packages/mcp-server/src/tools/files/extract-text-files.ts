// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'crawler.dev-mcp/filtering';
import { Metadata, asTextContentResult } from 'crawler.dev-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import CrawlerDev from 'crawler.dev';

export const metadata: Metadata = {
  resource: 'files',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/files/text',
  operationId: 'extractTextFromFile',
};

export const tool: Tool = {
  name: 'extract_text_files',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpload a file and extract text content from it. Supports PDF, DOC, DOCX, TXT and other text-extractable document formats.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/file_extract_text_response',\n  $defs: {\n    file_extract_text_response: {\n      type: 'object',\n      properties: {\n        contentType: {\n          type: 'string'\n        },\n        extractedText: {\n          type: 'string'\n        },\n        filename: {\n          type: 'string'\n        },\n        sizeBytes: {\n          type: 'integer'\n        },\n        success: {\n          type: 'boolean'\n        },\n        textLength: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      file: {
        type: 'string',
        description: 'The file to upload.',
      },
      clean_text: {
        type: 'boolean',
        description: 'Whether to clean the extracted text',
      },
      strip_boilerplate: {
        type: 'boolean',
        description: 'Whether to remove boilerplate text',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['file'],
  },
  annotations: {},
};

export const handler = async (client: CrawlerDev, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.files.extractText(body)));
};

export default { metadata, tool, handler };
