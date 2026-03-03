// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ZeroEntropy from 'zeroentropy';
import { Response } from 'node-fetch';

const client = new ZeroEntropy({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource models', () => {
  test('embed: only required params', async () => {
    const responsePromise = client.models.embed({
      input: 'string',
      input_type: 'query',
      model: 'model',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('embed: required and optional params', async () => {
    const response = await client.models.embed({
      input: 'string',
      input_type: 'query',
      model: 'model',
      latency: 'fast',
      output_dimensions: 0,
      output_format: 'float',
    });
  });

  test('rerank: only required params', async () => {
    const responsePromise = client.models.rerank({
      documents: ['string'],
      model: 'model',
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

  test('rerank: required and optional params', async () => {
    const response = await client.models.rerank({
      documents: ['string'],
      model: 'model',
      query: 'query',
      latency: 'fast',
      top_n: 0,
    });
  });
});
