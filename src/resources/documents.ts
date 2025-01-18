// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Documents extends APIResource {
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
  addDocument(
    body: DocumentAddDocumentParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DocumentAddDocumentResponse> {
    return this._client.post('/documents/add-document', { body, ...options });
  }

  /**
   * Deletes a document
   *
   * A `404 Not Found` status code will be returned, if the provided collection name
   * or document path does not exist.
   */
  deleteDocument(
    body: DocumentDeleteDocumentParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DocumentDeleteDocumentResponse> {
    return this._client.post('/documents/delete-document', { body, ...options });
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
   * The documents returned will be sorted by ID in ascending order. `id_gt` can be
   * used for pagination, and should be set to the ID of the last document returned
   * in the previous call.
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

export interface DocumentAddDocumentResponse {
  /**
   * This string will always be "Success!". This may change in the future.
   */
  message?: string;
}

export interface DocumentDeleteDocumentResponse {
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

    index_status: 'parsing_failed' | 'not_parsed' | 'not_indexed' | 'indexing' | 'indexed';

    metadata: Record<string, string | Array<string>>;

    /**
     * The number of pages in this document. This will be `null` if the document is
     * parsing or failed to parse. It can also be `null` if the document is a filetype
     * that does not support pages.
     */
    num_pages: number | null;

    path: string;

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

    index_status: 'parsing_failed' | 'not_parsed' | 'not_indexed' | 'indexing' | 'indexed';

    metadata: Record<string, string | Array<string>>;

    /**
     * The number of pages in this document. This will be `null` if the document is
     * parsing or failed to parse. It can also be `null` if the document is a filetype
     * that does not support pages.
     */
    num_pages: number | null;

    path: string;
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

    /**
     * An image of the page. This will be a base64-encoded string. Currently, this data
     * is guaranteed to be a JPEG-encoded image. This field will only be provided if
     * `include_image` was set to `true`, and the document has finished parsing. Also,
     * the document must be a datatype that supports images (PDF, DOCX, PPT, but not
     * .txt). In all other cases, this field will be `null`.
     */
    image_base64_data?: string | null;
  }
}

export interface DocumentAddDocumentParams {
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
    | DocumentAddDocumentParams.APITextDocument
    | DocumentAddDocumentParams.APITextPagesDocument
    | DocumentAddDocumentParams.APIBinaryDocument;

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

export namespace DocumentAddDocumentParams {
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

export interface DocumentDeleteDocumentParams {
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
   * All documents returned will have a UUID strictly greater than the provided UUID.
   * (Comparison will be on the binary representations of the UUIDs)
   */
  id_gt?: string | null;

  /**
   * The maximum number of documents to return. This field is by default 1024, and
   * cannot be set larger than 1024
   */
  limit?: number;
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

  /**
   * If `true`, then the response will have the `image_base64_data` attribute be a
   * `string`\*, rather than `null`. This string will contain the image data of the
   * document, as a base64-encoded string. Currently, this data is guaranteed to be a
   * JPEG-encoded image.
   *
   * \*Note that the response may still be `null`, if the page has no image data,
   * such as if the document was uploaded with raw text rather than as a PDF.
   */
  include_image?: boolean;
}

export declare namespace Documents {
  export {
    type DocumentAddDocumentResponse as DocumentAddDocumentResponse,
    type DocumentDeleteDocumentResponse as DocumentDeleteDocumentResponse,
    type DocumentGetInfoResponse as DocumentGetInfoResponse,
    type DocumentGetInfoListResponse as DocumentGetInfoListResponse,
    type DocumentGetPageInfoResponse as DocumentGetPageInfoResponse,
    type DocumentAddDocumentParams as DocumentAddDocumentParams,
    type DocumentDeleteDocumentParams as DocumentDeleteDocumentParams,
    type DocumentGetInfoParams as DocumentGetInfoParams,
    type DocumentGetInfoListParams as DocumentGetInfoListParams,
    type DocumentGetPageInfoParams as DocumentGetPageInfoParams,
  };
}
