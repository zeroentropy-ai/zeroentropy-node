// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Models extends APIResource {
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
    body: ModelParseDocumentParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ModelParseDocumentResponse> {
    return this._client.post('/parsers/parse-document', { body, ...options });
  }

  /**
   * Reranks the provided documents, according to the provided query.
   *
   * The results will be sorted by descending order of relevance. For each document,
   * the index and the score will be returned. The index is relative to the documents
   * array that was passed in. The score is the query-document relevancy determined
   * by the reranker model. The value will be returned in descending order to
   * relevance.
   */
  rerank(body: ModelRerankParams, options?: Core.RequestOptions): Core.APIPromise<ModelRerankResponse> {
    return this._client.post('/models/rerank', { body, ...options });
  }
}

export interface ModelParseDocumentResponse {
  /**
   * The parsed pages. Each string will contain the full contents of a page.
   */
  pages: Array<string>;
}

export interface ModelRerankResponse {
  /**
   * The results, ordered by descending order of relevance to the query.
   */
  results: Array<ModelRerankResponse.Result>;
}

export namespace ModelRerankResponse {
  export interface Result {
    /**
     * The index of this document, relative to the original document array passed into
     * the request.
     */
    index: number;

    /**
     * The relevance score between this document and the query. This number will range
     * between 0.0 and 1.0. This score is dependent on only the query and the scored
     * document; other documents do not affect this score. This value is deterministic,
     * but may vary slightly due to floating point error.
     */
    relevance_score: number;
  }
}

export interface ModelParseDocumentParams {
  /**
   * The document's raw data, as a base64-encoded string
   */
  base64_data: string;
}

export interface ModelRerankParams {
  /**
   * The list of documents to rerank. Each document is a string.
   */
  documents: Array<string>;

  /**
   * The query to rerank the documents by. Results will be in descending order of
   * relevance.
   */
  query: string;

  /**
   * The model ID to use for reranking. Options are: ["zerank-1-large"]
   */
  model?: string;

  /**
   * If provided, then only the top `n` documents will be returned in the results
   * array.
   */
  top_n?: number | null;
}

export declare namespace Models {
  export {
    type ModelParseDocumentResponse as ModelParseDocumentResponse,
    type ModelRerankResponse as ModelRerankResponse,
    type ModelParseDocumentParams as ModelParseDocumentParams,
    type ModelRerankParams as ModelRerankParams,
  };
}
