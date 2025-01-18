// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Queries extends APIResource {
  /**
   * Get the top K documents that match the given query
   */
  topDocuments(
    body: QueryTopDocumentsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<QueryTopDocumentsResponse> {
    return this._client.post('/queries/top-documents', { body, ...options });
  }

  /**
   * Get the top K pages that match the given query
   */
  topPages(body: QueryTopPagesParams, options?: Core.RequestOptions): Core.APIPromise<QueryTopPagesResponse> {
    return this._client.post('/queries/top-pages', { body, ...options });
  }

  /**
   * Get the top K snippets that match the given query.
   *
   * You may choose between coarse and precise snippets. Precise snippets will
   * average ~200 characters, while coarse snippets will average ~2000 characters.
   * The default is coarse snippets. Use the `precise_responses` parameter to adjust.
   */
  topSnippets(
    body: QueryTopSnippetsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<QueryTopSnippetsResponse> {
    return this._client.post('/queries/top-snippets', { body, ...options });
  }
}

export interface QueryTopDocumentsResponse {
  results: Array<QueryTopDocumentsResponse.Result>;
}

export namespace QueryTopDocumentsResponse {
  export interface Result {
    /**
     * The metadata for that document. Will be `None` if `include_metadata` is `False`.
     */
    metadata: Record<string, string | Array<string>> | null;

    /**
     * The path of the document.
     */
    path: string;

    /**
     * The relevancy score assigned to this document.
     */
    score: number;
  }
}

export interface QueryTopPagesResponse {
  results: Array<QueryTopPagesResponse.Result>;
}

export namespace QueryTopPagesResponse {
  /**
   * A Page's metadata.
   */
  export interface Result {
    /**
     * The contents of this page. This property will be null when `include_content` is
     * `false`, and a string when `include_content` is `true`.
     */
    content: string | null;

    /**
     * The index of this page in the document. This field is 0-indexed. So, the 1st
     * page has index 0, and the 2nd page has index 1.
     */
    page_index: number;

    /**
     * The path of the document that this page comes from.
     */
    path: string;

    /**
     * The relevancy score assigned to this page.
     */
    score: number;
  }
}

export interface QueryTopSnippetsResponse {
  results: Array<QueryTopSnippetsResponse.Result>;
}

export namespace QueryTopSnippetsResponse {
  /**
   * This is a Snippet.
   *
   * A snippet refers to a particular document path, and index range. Note that all
   * documents, regardless of filetype, are converted into `UTF-8`-encoded strings.
   * The `start_index` and `end_index` refer to the range of characters. in that
   * string, that have been matched by this snippet.
   */
  export interface Result {
    /**
     * If requested, this contains the full string content of this snippet.
     */
    content: string | null;

    /**
     * The end index of this snippet.
     */
    end_index: number;

    /**
     * The range of page indices spanned by this snippet, as a 2-tuple of integers.
     * Inclusive on the first page_index and exclusive on the second page_index.
     */
    page_span: Array<unknown>;

    /**
     * The path of the document that this snippet comes from.
     */
    path: string;

    /**
     * The relevancy score assigned to this snippet.
     */
    score: number;

    /**
     * The start index of this snippet.
     */
    start_index: number;
  }
}

export interface QueryTopDocumentsParams {
  /**
   * The name of the collection.
   */
  collection_name: string;

  /**
   * The number of documents to return. If there are not enough documents matching
   * your filters, then fewer may be returned. This number must be between 1 and
   * 2048, inclusive.
   */
  k: number;

  /**
   * The natural language query to search with. This cannot exceed 4096 characters (A
   * single UTF-8 codepoint, is considered to be 1 character).
   */
  query: string;

  /**
   * The query filter to apply. Please read [Metadata Filtering](/metadata-filtering)
   * for more information. If not provided, then all documents will be searched.
   */
  filter?: string | Array<string> | Array<unknown> | Record<string, unknown> | null;

  /**
   * Whether or not to include the metadata in the top documents response. If not
   * provided, then the default will be `False`.
   */
  include_metadata?: boolean;
}

export interface QueryTopPagesParams {
  /**
   * The name of the collection.
   */
  collection_name: string;

  /**
   * The number of pages to return. If there are not enough pages matching your
   * filters, then fewer may be returned. This number must be between 1 and 2048,
   * inclusive.
   */
  k: number;

  /**
   * The natural language query to search with. This cannot exceed 4096 characters (A
   * single UTF-8 codepoint, is considered to be 1 character).
   */
  query: string;

  /**
   * The query filter to apply. Please read [Metadata Filtering](/metadata-filtering)
   * for more information. If not provided, then all documents will be searched.
   */
  filter?: string | Array<string> | Array<unknown> | Record<string, unknown> | null;

  /**
   * If set to true, then the content of all pages will be returned.
   */
  include_content?: boolean;
}

export interface QueryTopSnippetsParams {
  /**
   * The name of the collection.
   */
  collection_name: string;

  /**
   * The number of snippets to return. If there are not enough snippets matching your
   * filters, then fewer may be returned. This number must be between 1 and 2048,
   * inclusive.
   */
  k: number;

  /**
   * The natural language query to search with. This cannot exceed 4096 characters (A
   * single UTF-8 codepoint, is considered to be 1 character).
   */
  query: string;

  /**
   * The query filter to apply. Please read [Metadata Filtering](/metadata-filtering)
   * for more information. If not provided, then all documents will be searched.
   */
  filter?: string | Array<string> | Array<unknown> | Record<string, unknown> | null;

  /**
   * Enable precise responses. Precise responses will have higher latency, but
   * provide much more precise snippets. When `precise_responses` is set to `true`,
   * the responses will average 200 characters. If set to `false`, the responses will
   * average 2000 characters. The default is `false`.
   */
  precise_responses?: boolean;
}

export declare namespace Queries {
  export {
    type QueryTopDocumentsResponse as QueryTopDocumentsResponse,
    type QueryTopPagesResponse as QueryTopPagesResponse,
    type QueryTopSnippetsResponse as QueryTopSnippetsResponse,
    type QueryTopDocumentsParams as QueryTopDocumentsParams,
    type QueryTopPagesParams as QueryTopPagesParams,
    type QueryTopSnippetsParams as QueryTopSnippetsParams,
  };
}
