// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Collections extends APIResource {
  /**
   * Gets a complete list of all of your collections.
   */
  list(
    body?: CollectionListParams | null | undefined,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CollectionListResponse> {
    return this._client.post('/collections/get-collection-list', { body, ...options });
  }

  /**
   * Adds a collection.
   *
   * If the collection already exists, a `409 Conflict` status code will be returned.
   */
  addCollection(
    body: CollectionAddCollectionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CollectionAddCollectionResponse> {
    return this._client.post('/collections/add-collection', { body, ...options });
  }

  /**
   * Deletes a collection.
   *
   * A `404 Not Found` status code will be returned, if the provided collection name
   * does not exist.
   */
  deleteCollection(
    body: CollectionDeleteCollectionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CollectionDeleteCollectionResponse> {
    return this._client.post('/collections/delete-collection', { body, ...options });
  }
}

export interface CollectionListResponse {
  /**
   * The names of the matched collections.
   */
  collection_names: Array<string>;
}

export interface CollectionAddCollectionResponse {
  /**
   * This string will always be "Success!". This may change in the future.
   */
  message?: string;
}

export interface CollectionDeleteCollectionResponse {
  /**
   * This string will always be "Success!". This may change in the future.
   */
  message?: string;
}

export interface CollectionListParams {}

export interface CollectionAddCollectionParams {
  /**
   * The name of the collection to add. The maximum length of this string is 1024
   * characters. If special characters are used, then the UTF-8 encoded string cannot
   * exceed 1024 bytes.
   */
  collection_name: string;
}

export interface CollectionDeleteCollectionParams {
  /**
   * The name of the collection to delete.
   */
  collection_name: string;
}

export declare namespace Collections {
  export {
    type CollectionListResponse as CollectionListResponse,
    type CollectionAddCollectionResponse as CollectionAddCollectionResponse,
    type CollectionDeleteCollectionResponse as CollectionDeleteCollectionResponse,
    type CollectionListParams as CollectionListParams,
    type CollectionAddCollectionParams as CollectionAddCollectionParams,
    type CollectionDeleteCollectionParams as CollectionDeleteCollectionParams,
  };
}
