// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { type Uploadable } from '../core/uploads';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';

export class Extract extends APIResource {
  /**
   * Upload a file and extract text content from it. Supports PDF, DOC, DOCX, TXT and
   * other text-extractable document formats.
   *
   * @example
   * ```ts
   * const response = await client.extract.extractFromFile({
   *   file: fs.createReadStream('path/to/file'),
   * });
   * ```
   */
  extractFromFile(
    body: ExtractExtractFromFileParams,
    options?: RequestOptions,
  ): APIPromise<ExtractExtractFromFileResponse> {
    return this._client.post(
      '/v1/extract/file',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Extract text content from a webpage or document accessible via URL. Supports
   * HTML, PDF, and other web-accessible content types.
   *
   * @example
   * ```ts
   * const response = await client.extract.extractFromURL({
   *   url: 'url',
   * });
   * ```
   */
  extractFromURL(
    body: ExtractExtractFromURLParams,
    options?: RequestOptions,
  ): APIPromise<ExtractExtractFromURLResponse> {
    return this._client.post('/v1/extract/url', { body, ...options });
  }
}

export interface ExtractExtractFromFileResponse {
  contentType?: string;

  filename?: string;

  /**
   * Markdown representation (included when 'markdown' is in formats array, empty
   * string for non-HTML content)
   */
  markdown?: string;

  sizeBytes?: number;

  /**
   * Extracted plain text (included when 'text' is in formats array)
   */
  text?: string;
}

export interface ExtractExtractFromURLResponse {
  contentType?: string;

  finalUrl?: string;

  /**
   * Markdown representation (included when 'markdown' is in formats array, empty
   * string for non-HTML content)
   */
  markdown?: string;

  sizeBytes?: number;

  statusCode?: number;

  /**
   * Extracted plain text (included when 'text' is in formats array)
   */
  text?: string;

  url?: string;
}

export interface ExtractExtractFromFileParams {
  /**
   * The file to upload.
   */
  file: Uploadable;

  /**
   * Whether to clean and normalize the extracted text. When enabled (true):
   *
   * - For HTML content: Removes script, style, and other non-text elements before
   *   extraction
   * - Normalizes whitespace (collapses multiple spaces/tabs, normalizes newlines)
   * - Removes empty lines and trims leading/trailing whitespace
   * - Normalizes Unicode characters (NFC)
   * - For JSON content: Only minimal cleaning to preserve structure When disabled
   *   (false): Returns raw extracted text without any processing.
   */
  cleanText?: boolean;

  /**
   * Array of output formats to include in the response. Options: 'text', 'markdown'.
   *
   * - 'text': Extracted plain text (always available)
   * - 'markdown': Markdown representation (only available for HTML content, empty
   *   string otherwise) Defaults to ['text'] if not specified.
   */
  formats?: Array<'text' | 'markdown'>;
}

export interface ExtractExtractFromURLParams {
  /**
   * The URL to extract text from.
   */
  url: string;

  /**
   * Maximum cache time in milliseconds for the webpage. Must be between 0 (no
   * caching) and 259200000 (3 days). Defaults to 172800000 (2 days) if not
   * specified.
   */
  cacheAge?: number;

  /**
   * Whether to clean extracted text
   */
  cleanText?: boolean;

  /**
   * Array of output formats to include in the response. Options: 'text', 'markdown'.
   *
   * - 'text': Extracted plain text (always available)
   * - 'markdown': Markdown representation (only available for HTML content, empty
   *   string otherwise) Defaults to ['text'] if not specified.
   */
  formats?: Array<'text' | 'markdown'>;

  /**
   * Custom HTTP headers to send with the request (case-insensitive)
   */
  headers?: { [key: string]: string };

  /**
   * Maximum number of redirects to follow when fetching the URL. Must be between 0
   * (no redirects) and 20. Defaults to 5 if not specified.
   */
  maxRedirects?: number;

  /**
   * Maximum content length in bytes for the URL response. Must be between 1024 (1KB)
   * and 52428800 (50MB). Defaults to 10485760 (10MB) if not specified.
   */
  maxSize?: number;

  /**
   * Maximum time in milliseconds before the crawler gives up on loading a URL. Must
   * be between 1000 (1 second) and 30000 (30 seconds). Defaults to 10000 (10
   * seconds) if not specified.
   */
  maxTimeout?: number;

  /**
   * Proxy configuration for the request
   */
  proxy?: ExtractExtractFromURLParams.Proxy;

  /**
   * When enabled, we use a proxy for the request. If set to true, and the 'proxy'
   * option is set, it will be ignored. Defaults to false if not specified. Note:
   * Enabling stealthMode consumes an additional credit/quota point (2 credits total
   * instead of 1) for this request.
   */
  stealthMode?: boolean;
}

export namespace ExtractExtractFromURLParams {
  /**
   * Proxy configuration for the request
   */
  export interface Proxy {
    /**
     * Proxy password for authentication
     */
    password?: string;

    /**
     * Proxy server URL (e.g., http://proxy.example.com:8080 or
     * socks5://proxy.example.com:1080)
     */
    server?: string;

    /**
     * Proxy username for authentication
     */
    username?: string;
  }
}

export declare namespace Extract {
  export {
    type ExtractExtractFromFileResponse as ExtractExtractFromFileResponse,
    type ExtractExtractFromURLResponse as ExtractExtractFromURLResponse,
    type ExtractExtractFromFileParams as ExtractExtractFromFileParams,
    type ExtractExtractFromURLParams as ExtractExtractFromURLParams,
  };
}
