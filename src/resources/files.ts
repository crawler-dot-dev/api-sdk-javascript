// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { type Uploadable } from '../core/uploads';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';

export class Files extends APIResource {
  /**
   * Upload a file and extract text content from it. Supports PDF, DOC, DOCX, TXT and
   * other text-extractable document formats.
   *
   * @example
   * ```ts
   * const response = await client.files.extractText({
   *   file: fs.createReadStream('path/to/file'),
   * });
   * ```
   */
  extractText(body: FileExtractTextParams, options?: RequestOptions): APIPromise<FileExtractTextResponse> {
    return this._client.post(
      '/v1/files/text',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export interface FileExtractTextResponse {
  contentType?: string;

  extractedText?: string;

  filename?: string;

  sizeBytes?: number;

  textLength?: number;
}

export interface FileExtractTextParams {
  /**
   * The file to upload.
   */
  file: Uploadable;

  /**
   * Whether to clean the extracted text
   */
  clean_text?: boolean;
}

export declare namespace Files {
  export {
    type FileExtractTextResponse as FileExtractTextResponse,
    type FileExtractTextParams as FileExtractTextParams,
  };
}
