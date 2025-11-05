// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class URLs extends APIResource {
  /**
   * Extract text content from a webpage or document accessible via URL. Supports
   * HTML, PDF, and other web-accessible content types.
   *
   * @example
   * ```ts
   * const response = await client.urls.extractText({
   *   url: 'url',
   * });
   * ```
   */
  extractText(body: URLExtractTextParams, options?: RequestOptions): APIPromise<URLExtractTextResponse> {
    return this._client.post('/v1/urls/text', { body, ...options });
  }
}

export interface URLExtractTextResponse {
  contentType?: string;

  extractedText?: string;

  finalUrl?: string;

  sizeBytes?: number;

  statusCode?: number;

  textLength?: number;

  url?: string;
}

export interface URLExtractTextParams {
  /**
   * The URL to extract text from.
   */
  url: string;

  /**
   * Maximum cache time in milliseconds for the webpage. Must be between 0 (no
   * caching) and 259200000 (3 days). Defaults to 172800000 (2 days) if not
   * specified.
   */
  cache_age?: number;

  /**
   * Whether to clean extracted text
   */
  clean_text?: boolean;

  /**
   * Custom HTTP headers to send with the request (case-insensitive)
   */
  headers?: { [key: string]: string };

  /**
   * Maximum number of redirects to follow when fetching the URL. Must be between 0
   * (no redirects) and 20. Defaults to 5 if not specified.
   */
  max_redirects?: number;

  /**
   * Maximum content length in bytes for the URL response. Must be between 1024 (1KB)
   * and 52428800 (50MB). Defaults to 10485760 (10MB) if not specified.
   */
  max_size?: number;

  /**
   * Maximum time in milliseconds before the crawler gives up on loading a URL. Must
   * be between 1000 (1 second) and 30000 (30 seconds). Defaults to 10000 (10
   * seconds) if not specified.
   */
  max_timeout?: number;

  /**
   * Proxy configuration for the request
   */
  proxy?: URLExtractTextParams.Proxy;

  /**
   * When enabled, we use a proxy for the request. If set to true, and the 'proxy'
   * option is set, it will be ignored. Defaults to false if not specified. Note:
   * Enabling stealth_mode consumes an additional credit/quota point (2 credits total
   * instead of 1) for this request.
   */
  stealth_mode?: boolean;
}

export namespace URLExtractTextParams {
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

export declare namespace URLs {
  export {
    type URLExtractTextResponse as URLExtractTextResponse,
    type URLExtractTextParams as URLExtractTextParams,
  };
}
