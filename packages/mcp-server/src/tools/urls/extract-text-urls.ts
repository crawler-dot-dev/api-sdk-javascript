// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'crawler.dev-mcp/filtering';
import { Metadata, asTextContentResult } from 'crawler.dev-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import CrawlerDev from 'crawler.dev';

export const metadata: Metadata = {
  resource: 'urls',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/urls/text',
  operationId: 'extractTextFromUrl',
};

export const tool: Tool = {
  name: 'extract_text_urls',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nExtract text content from a webpage or document accessible via URL. Supports HTML, PDF, and other web-accessible content types.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/url_extract_text_response',\n  $defs: {\n    url_extract_text_response: {\n      type: 'object',\n      properties: {\n        contentType: {\n          type: 'string'\n        },\n        extractedText: {\n          type: 'string'\n        },\n        finalUrl: {\n          type: 'string'\n        },\n        sizeBytes: {\n          type: 'integer'\n        },\n        statusCode: {\n          type: 'integer'\n        },\n        textLength: {\n          type: 'integer'\n        },\n        url: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      url: {
        type: 'string',
        description: 'The URL to extract text from.',
      },
      cache_age: {
        type: 'integer',
        description:
          'Maximum cache time in milliseconds for the webpage. Must be between 0 (no caching) and 259200000 (3 days). Defaults to 172800000 (2 days) if not specified.',
      },
      clean_text: {
        type: 'boolean',
        description: 'Whether to clean extracted text',
      },
      headers: {
        type: 'object',
        description: 'Custom HTTP headers to send with the request (case-insensitive)',
        additionalProperties: true,
      },
      max_redirects: {
        type: 'integer',
        description:
          'Maximum number of redirects to follow when fetching the URL. Must be between 0 (no redirects) and 20. Defaults to 5 if not specified.',
      },
      max_size: {
        type: 'integer',
        description:
          'Maximum content length in bytes for the URL response. Must be between 1024 (1KB) and 52428800 (50MB). Defaults to 10485760 (10MB) if not specified.',
      },
      max_timeout: {
        type: 'integer',
        description:
          'Maximum time in milliseconds before the crawler gives up on loading a URL. Must be between 1000 (1 second) and 30000 (30 seconds). Defaults to 10000 (10 seconds) if not specified.',
      },
      proxy: {
        type: 'object',
        description: 'Proxy configuration for the request',
        properties: {
          password: {
            type: 'string',
            description: 'Proxy password for authentication',
          },
          server: {
            type: 'string',
            description:
              'Proxy server URL (e.g., http://proxy.example.com:8080 or socks5://proxy.example.com:1080)',
          },
          username: {
            type: 'string',
            description: 'Proxy username for authentication',
          },
        },
      },
      stealth_mode: {
        type: 'boolean',
        description:
          "When enabled, we use a proxy for the request. If set to true, and the 'proxy' option is set, it will be ignored. Defaults to false if not specified.\nNote: Enabling stealth_mode consumes an additional credit/quota point (2 credits total instead of 1) for this request.\n",
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['url'],
  },
  annotations: {},
};

export const handler = async (client: CrawlerDev, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.urls.extractText(body)));
};

export default { metadata, tool, handler };
