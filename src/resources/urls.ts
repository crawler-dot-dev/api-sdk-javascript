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
   * Whether to clean extracted text
   */
  clean_text?: boolean;

  /**
   * Custom HTTP headers to send with the request (case-insensitive)
   */
  headers?: { [key: string]: string };

  /**
   * Proxy configuration for the request
   */
  proxy?: URLExtractTextParams.Proxy;
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
