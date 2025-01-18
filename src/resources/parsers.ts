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
  parse(body: ParserParseParams, options?: Core.RequestOptions): Core.APIPromise<ParserParseResponse> {
    return this._client.post('/parsers/parse-document', { body, ...options });
  }
}

export interface ParserParseResponse {
  /**
   * The parsed pages. Each string will contain the full contents of a page.
   */
  pages: Array<string>;
}

export interface ParserParseParams {
  /**
   * The document's raw data, as a base64-encoded string
   */
  base64_data: string;
}

export declare namespace Parsers {
  export { type ParserParseResponse as ParserParseResponse, type ParserParseParams as ParserParseParams };
}
