// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Zeroentropy from 'zeroentropy';
import { Response } from 'node-fetch';

const client = new Zeroentropy({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource collections', () => {
  test('list', async () => {
    const responsePromise = client.collections.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.collections.list({}, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Zeroentropy.NotFoundError,
    );
  });

  test('addCollection: only required params', async () => {
    const responsePromise = client.collections.addCollection({ collection_name: 'collection_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('addCollection: required and optional params', async () => {
    const response = await client.collections.addCollection({ collection_name: 'collection_name' });
  });

  test('deleteCollection: only required params', async () => {
    const responsePromise = client.collections.deleteCollection({ collection_name: 'collection_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('deleteCollection: required and optional params', async () => {
    const response = await client.collections.deleteCollection({ collection_name: 'collection_name' });
  });
});
