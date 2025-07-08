// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ZeroEntropy from 'zeroentropy';
import { Response } from 'node-fetch';

const client = new ZeroEntropy({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource queries', () => {
  test('topDocuments: only required params', async () => {
    const responsePromise = client.queries.topDocuments({
      collection_name: 'collection_name',
      k: 0,
      query: 'query',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('topDocuments: required and optional params', async () => {
    const response = await client.queries.topDocuments({
      collection_name: 'collection_name',
      k: 0,
      query: 'query',
      filter: { foo: 'bar' },
      include_metadata: true,
      latency_mode: 'low',
      reranker: 'reranker',
    });
  });

  test('topPages: only required params', async () => {
    const responsePromise = client.queries.topPages({
      collection_name: 'collection_name',
      k: 0,
      query: 'query',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('topPages: required and optional params', async () => {
    const response = await client.queries.topPages({
      collection_name: 'collection_name',
      k: 0,
      query: 'query',
      filter: { foo: 'bar' },
      include_content: true,
      latency_mode: 'low',
    });
  });

  test('topSnippets: only required params', async () => {
    const responsePromise = client.queries.topSnippets({
      collection_name: 'collection_name',
      k: 0,
      query: 'query',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('topSnippets: required and optional params', async () => {
    const response = await client.queries.topSnippets({
      collection_name: 'collection_name',
      k: 0,
      query: 'query',
      filter: { foo: 'bar' },
      include_document_metadata: true,
      precise_responses: true,
      reranker: 'reranker',
    });
  });
});
