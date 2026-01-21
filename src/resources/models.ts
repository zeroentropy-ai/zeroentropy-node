// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Models extends APIResource {
  /**
   * Reranks the provided documents, according to the provided query.
   *
   * The results will be sorted by descending order of relevance. For each document,
   * the index and the score will be returned. The index is relative to the documents
   * array that was passed in. The score is the query-document relevancy determined
   * by the reranker model. The results will be returned in descending order of
   * relevance.
   *
   * Organizations will, by default, have a ratelimit of `2,500,000`
   * bytes-per-minute. If this is exceeded, requests will be throttled into
   * `latency: "slow"` mode, up to `20,000,000` bytes-per-minute. If even this is
   * exceeded, you will get a `429` error. To request higher ratelimits, please
   * contact [founders@zeroentropy.dev](mailto:founders@zeroentropy.dev) or message
   * us on [Discord](https://go.zeroentropy.dev/discord) or
   * [Slack](https://go.zeroentropy.dev/slack)!
   */
  rerank(body: ModelRerankParams, options?: Core.RequestOptions): Core.APIPromise<ModelRerankResponse> {
    return this._client.post('/models/rerank', { body, ...options });
  }
}

export interface ModelRerankResponse {
  /**
   * The type of inference actually used. If `auto` is requested, then `fast` will be
   * used by default, with `slow` as a fallback if your ratelimit is exceeded. Else,
   * this field will be identical to the requested latency mode.
   */
  actual_latency_mode: 'fast' | 'slow';

  /**
   * The total time, in seconds, between rerank request received and rerank response
   * returned. Client latency should equal `e2e_latency` + your ping to ZeroEntropy's
   * API.
   */
  e2e_latency: number;

  /**
   * The time, in seconds, to actually inference the request. If this is
   * significantly lower than `e2e_latency`, this is likely due to ratelimiting.
   * Please request a higher ratelimit at
   * [founders@zeroentropy.dev](mailto:founders@zeroentropy.dev) or message us on
   * [Discord](https://go.zeroentropy.dev/discord) or
   * [Slack](https://go.zeroentropy.dev/slack)!
   */
  inference_latency: number;

  /**
   * The results, ordered by descending order of relevance to the query.
   */
  results: Array<ModelRerankResponse.Result>;

  /**
   * The total number of bytes in the request. This is used for ratelimiting.
   */
  total_bytes: number;

  /**
   * The total number of tokens in the request. This is used for billing.
   */
  total_tokens: number;
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
     * document; other documents do not affect this score. This value is intended to be
     * deterministic, but it may vary slightly due to floating point error.
     */
    relevance_score: number;
  }
}

export interface ModelRerankParams {
  /**
   * The list of documents to rerank. Each document is a string.
   */
  documents: Array<string>;

  /**
   * The model ID to use for reranking. Options are: ["zerank-2", "zerank-1",
   * "zerank-1-small"]
   */
  model: string;

  /**
   * The query to rerank the documents by.
   */
  query: string;

  /**
   * Whether the call will be inferenced "fast" or "slow". RateLimits for slow API
   * calls are orders of magnitude higher, but you can expect >10 second latency.
   * Fast inferences are guaranteed subsecond, but rate limits are lower. If not
   * specified, first a "fast" call will be attempted, but if you have exceeded your
   * fast rate limit, then a slow call will be executed. If explicitly set to "fast",
   * then 429 will be returned if it cannot be executed fast.
   */
  latency?: 'fast' | 'slow' | null;

  /**
   * If provided, then only the top `n` documents will be returned in the results
   * array. Otherwise, `n` will be the length of the provided documents array.
   */
  top_n?: number | null;
}

export declare namespace Models {
  export { type ModelRerankResponse as ModelRerankResponse, type ModelRerankParams as ModelRerankParams };
}
