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

  success?: boolean;

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
   * Whether to render JavaScript for HTML content. This parameter is ignored for
   * binary content types (PDF, DOC, etc.) since they are not HTML.
   */
  render_js?: boolean;

  /**
   * Whether to remove boilerplate text
   */
  strip_boilerplate?: boolean;
}

export declare namespace URLs {
  export {
    type URLExtractTextResponse as URLExtractTextResponse,
    type URLExtractTextParams as URLExtractTextParams,
  };
}
