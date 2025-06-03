// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Documents extends APIResource {
  /**
   * Updates a document. This endpoint is atomic.
   *
   * The only attribute currently supported for update is `metadata`. This endpoint
   * can only be called with a non-null `metadata` if the document status is
   * `indexed`.
   *
   * Sometimes, when updating a document, a new document ID will be assigned and the
   * previous will be deleted. For this reason, the previous and the new document ID
   * will both be returned in the response. If the document ID was not updated, then
   * these two IDs will be identical.
   *
   * A `404 Not Found` status code will be returned, if the provided collection name
   * or document path does not exist.
   */
  update(body: DocumentUpdateParams, options?: Core.RequestOptions): Core.APIPromise<DocumentUpdateResponse> {
    return this._client.post('/documents/update-document', { body, ...options });
  }

  /**
   * Deletes a document
   *
   * A `404 Not Found` status code will be returned, if the provided collection name
   * or document path does not exist.
   */
  delete(body: DocumentDeleteParams, options?: Core.RequestOptions): Core.APIPromise<DocumentDeleteResponse> {
    return this._client.post('/documents/delete-document', { body, ...options });
  }

  /**
   * Adds a document to a given collection.
   *
   * A status code of `201 Created` will be returned if a document was successfully
   * added. A status code of `409 Conflict` will be returned if the given collection
   * already has a document with the same path.
   *
   * If `overwrite` is given a value of `true`, then a status code of `200 OK` will
   * be returned if a document was overwritten (Rather than a status code of
   * `409 Conflict`).
   *
   * When a document is inserted, it can take time to appear in the index. Check the
   * `/status/get-status` endpoint to see progress.
   */
  add(body: DocumentAddParams, options?: Core.RequestOptions): Core.APIPromise<DocumentAddResponse> {
    return this._client.post('/documents/add-document', { body, ...options });
  }

  /**
   * Retrieves information about a specific document. The request parameters define
   * what information you would like to receive.
   *
   * A `404 Not Found` will be returned if either the collection name does not exist,
   * or the document path does not exist within the provided collection.
   */
  getInfo(
    body: DocumentGetInfoParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DocumentGetInfoResponse> {
    return this._client.post('/documents/get-document-info', { body, ...options });
  }

  /**
   * Retrives a list of document metadata information that matches the provided
   * filters.
   *
   * The documents returned will be sorted by path in lexicographically ascending
   * order. `path_gt` can be used for pagination, and should be set to the path of
   * the last document returned in the previous call.
   *
   * A `404 Not Found` will be returned if either the collection name does not exist,
   * or the document path does not exist within the provided collection.
   */
  getInfoList(
    body: DocumentGetInfoListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DocumentGetInfoListResponse> {
    return this._client.post('/documents/get-document-info-list', { body, ...options });
  }

  /**
   * Retrieves information about a specific page. The request parameters define what
   * information you would like to receive.
   *
   * A `404 Not Found` will be returned if either the collection name does not exist,
   * or the document path does not exist within the provided collection.
   */
  getPageInfo(
    body: DocumentGetPageInfoParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DocumentGetPageInfoResponse> {
    return this._client.post('/documents/get-page-info', { body, ...options });
  }
}

export interface DocumentUpdateResponse {
  new_id: string;

  previous_id: string;
}

export interface DocumentDeleteResponse {
  /**
   * This string will always be "Success!". This may change in the future.
   */
  message?: string;
}

export interface DocumentAddResponse {
  /**
   * This string will always be "Success!". This may change in the future.
   */
  message?: string;
}

export interface DocumentGetInfoResponse {
  document: DocumentGetInfoResponse.Document;
}

export namespace DocumentGetInfoResponse {
  export interface Document {
    id: string;

    collection_name: string;

    /**
     * A URL to the document data, which can be used to download the raw document
     * content or to display the document in frontend applications.
     *
     * NOTE: If a `/documents/update-document` call returned a new document id, then
     * this url will be invalidated and must be retrieved again.
     */
    file_url: string;

    index_status:
      | 'not_parsed'
      | 'parsing'
      | 'not_indexed'
      | 'indexing'
      | 'indexed'
      | 'parsing_failed'
      | 'indexing_failed';

    metadata: Record<string, string | Array<string>>;

    /**
     * The number of pages in this document. This will be `null` if the document is
     * parsing or failed to parse. It can also be `null` if the document is a filetype
     * that does not support pages.
     */
    num_pages: number | null;

    path: string;

    /**
     * The total size of the raw document data, in bytes.
     */
    size: number;

    /**
     * This will be `null`, unless `include_content` was available and set to `true`.
     */
    content?: string | null;
  }
}

export interface DocumentGetInfoListResponse {
  documents: Array<DocumentGetInfoListResponse.Document>;
}

export namespace DocumentGetInfoListResponse {
  export interface Document {
    id: string;

    collection_name: string;

    created_at: string;

    /**
     * A URL to the document data, which can be used to download the raw document
     * content or to display the document in frontend applications.
     *
     * NOTE: If a `/documents/update-document` call returned a new document id, then
     * this url will be invalidated and must be retrieved again.
     */
    file_url: string;

    index_status:
      | 'not_parsed'
      | 'parsing'
      | 'not_indexed'
      | 'indexing'
      | 'indexed'
      | 'parsing_failed'
      | 'indexing_failed';

    metadata: Record<string, string | Array<string>>;

    /**
     * The number of pages in this document. This will be `null` if the document is
     * parsing or failed to parse. It can also be `null` if the document is a filetype
     * that does not support pages.
     */
    num_pages: number | null;

    path: string;

    /**
     * The total size of the raw document data, in bytes.
     */
    size: number;
  }
}

export interface DocumentGetPageInfoResponse {
  page: DocumentGetPageInfoResponse.Page;
}

export namespace DocumentGetPageInfoResponse {
  export interface Page {
    id: string;

    /**
     * The name of the collection.
     */
    collection_name: string;

    /**
     * A URL to an image of the page. This field will only be provided if the document
     * has finished parsing, and if it is a filetype that is capable of producing
     * images (e.g. PDF, DOCX, PPT, etc). In all other cases, this field will be
     * `null`.
     *
     * NOTE: If a `/documents/update-document` call returned a new document id, then
     * this url will be invalidated and must be retrieved again.
     */
    image_url: string | null;

    /**
     * The specific page index of this page. Pages are 0-indexed, so that the 1st page
     * of a PDF is of page index 0.
     */
    page_index: number;

    /**
     * The filepath of the document associated with this page.
     */
    path: string;

    /**
     * The content of the page. This field will only be provided if `include_content`
     * was set to `true`, and the document has finished parsing. Otherwise, this field
     * will be set to `null`.
     */
    content?: string | null;
  }
}

export interface DocumentUpdateParams {
  /**
   * The name of the collection.
   */
  collection_name: string;

  /**
   * The filepath of the document that you are updating. A `404 Not Found` status
   * code will be returned if no document with this path was found.
   */
  path: string;

  /**
   * If this field is provided, the given metadata json will replace the document's
   * existing metadata json. In other words, if you want to add a new field, you will
   * need to provide the entire metadata object (Both the original fields, and the
   * new field).
   */
  metadata?: Record<string, string | Array<string>> | null;
}

export interface DocumentDeleteParams {
  /**
   * The name of the collection.
   */
  collection_name: string;

  /**
   * The filepath of the document that you are deleting. A `404 Not Found` status
   * code will be returned if no document with this path was found.
   */
  path: string;
}

export interface DocumentAddParams {
  /**
   * The name of the collection to be used for this request. A `404 Not Found` status
   * code will be returned if this collection name does not exist.
   */
  collection_name: string;

  /**
   * The content of the document. There are three possible JSON types that can be
   * passed into this parameter: `APITextDocument`, `APITextPagesDocument`,
   * `APIBinaryDocument`. The `type` field is how ZeroEntropy will know which
   * document object you have passed in.
   */
  content:
    | DocumentAddParams.APITextDocument
    | DocumentAddParams.APITextPagesDocument
    | DocumentAddParams.APIBinaryDocument;

  /**
   * The filepath of the document that you are adding. A `409 Conflict` status code
   * will be returned if this path already exists, unless `overwrite` is set to
   * `true`.
   */
  path: string;

  /**
   * This is a metadata JSON object that can be used to assign various metadata
   * attributes to your document. The provided object must match the type
   * `dict[str, str | list[str]]`. Please read
   * [Metadata Filtering](/metadata-filtering) for more details. By default, the
   * metadata will be set to `{}`.
   *
   * NOTE: The UTF-8-encoded JSON string must be less than 65536 bytes (Whitespace
   * does not count). This limit can be increased upon request.
   */
  metadata?: Record<string, string | Array<string>>;

  /**
   * Setting this property to true will put this endpoint in "upsert" mode: If the
   * document already exists, this action will atomically replace it.
   */
  overwrite?: boolean;
}

export namespace DocumentAddParams {
  export interface APITextDocument {
    /**
     * The content of this document, as a text string
     */
    text: string;

    /**
     * This field must be `text`
     */
    type: 'text';
  }

  export interface APITextPagesDocument {
    /**
     * The content of this document, as an array of strings. Each string will be the
     * content of a full page, and can be retrieved using the Top Pages endpoint. Pages
     * are 0-indexed, so that the first string has index 0, the second string has
     * index 1.
     */
    pages: Array<string>;

    /**
     * This field must be `text-pages`
     */
    type: 'text-pages';
  }

  export interface APIBinaryDocument {
    /**
     * The file's raw data, as a base64-encoded string
     */
    base64_data: string;

    /**
     * When this is set to `auto`, then the file extension and binary data will be used
     * to deduce a filetype automatically. Currently, only `auto` is supported.
     */
    type: 'auto';
  }
}

export interface DocumentGetInfoParams {
  /**
   * The name of the collection.
   */
  collection_name: string;

  /**
   * The filepath of the document that you're requesting. A `404 Not Found` status
   * code will be returned if no document with this path was found.
   */
  path: string;

  /**
   * If `true`, then the document response will have the `content` attribute be a
   * `string`, rather than `null`. This string will contain the full contents of the
   * document.
   */
  include_content?: boolean;
}

export interface DocumentGetInfoListParams {
  /**
   * The name of the collection.
   */
  collection_name: string;

  /**
   * The maximum number of documents to return. This field is by default 1024, and
   * cannot be set larger than 1024
   */
  limit?: number;

  /**
   * All documents returned will have a path strictly greater than the provided
   * `path_gt` argument. (Comparison will be based on lexicographic comparison. It is
   * guaranteed that two strings are lexicographically equal if and only if they have
   * identical binary representations.).
   */
  path_gt?: string | null;

  /**
   * All documents returned will have a path that starts with the provided path
   * prefix.
   */
  path_prefix?: string | null;
}

export interface DocumentGetPageInfoParams {
  /**
   * The name of the collection.
   */
  collection_name: string;

  /**
   * The specific page index whose info is being requested. Pages are 0-indexed, so
   * that the 1st page of a PDF is of page index 0. You may use the `num_pages`
   * attribute of `/documents/get-document-info` or
   * `/documents/get-document-info-list` to know what the range of valid indices are.
   * A `404 Not Found` status code will be returned if no such page index exists.
   */
  page_index: number;

  /**
   * The filepath of the document whose page you are requesting. A `404 Not Found`
   * status code will be returned if no document with this path was found.
   */
  path: string;

  /**
   * If `true`, then the response will have the `content` attribute be a `string`,
   * rather than `null`. This string will contain the full contents of the page.
   */
  include_content?: boolean;
}

export declare namespace Documents {
  export {
    type DocumentUpdateResponse as DocumentUpdateResponse,
    type DocumentDeleteResponse as DocumentDeleteResponse,
    type DocumentAddResponse as DocumentAddResponse,
    type DocumentGetInfoResponse as DocumentGetInfoResponse,
    type DocumentGetInfoListResponse as DocumentGetInfoListResponse,
    type DocumentGetPageInfoResponse as DocumentGetPageInfoResponse,
    type DocumentUpdateParams as DocumentUpdateParams,
    type DocumentDeleteParams as DocumentDeleteParams,
    type DocumentAddParams as DocumentAddParams,
    type DocumentGetInfoParams as DocumentGetInfoParams,
    type DocumentGetInfoListParams as DocumentGetInfoListParams,
    type DocumentGetPageInfoParams as DocumentGetPageInfoParams,
  };
}
