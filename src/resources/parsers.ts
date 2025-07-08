// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Parsers extends APIResource {
  /**
   * This provides access to the parsers that we use for indexing. This endpoint will
   * not access any collection or search index, and the result will not be saved.
   * This will use the same parsing method as the `/documents/add-document` endpoint.
   *
   * A common use-case for this endpoint, is to use our parser in combination with
   * your own pre-processing step, before then uploading it to the search index using
   * the `text-pages` filetype.
   */
  parseDocument(
    body: ParserParseDocumentParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ParserParseDocumentResponse> {
    return this._client.post('/parsers/parse-document', { body, ...options });
  }
}

export interface ParserParseDocumentResponse {
  /**
   * The parsed pages. Each string will contain the full contents of a page.
   */
  pages: Array<string>;
}

export interface ParserParseDocumentParams {
  /**
   * The document's raw data, as a base64-encoded string
   */
  base64_data: string;
}

export declare namespace Parsers {
  export {
    type ParserParseDocumentResponse as ParserParseDocumentResponse,
    type ParserParseDocumentParams as ParserParseDocumentParams,
  };
}
