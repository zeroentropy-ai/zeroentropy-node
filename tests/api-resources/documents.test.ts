// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ZeroEntropy from 'zeroentropy';
import { Response } from 'node-fetch';

const client = new ZeroEntropy({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource documents', () => {
  test('update: only required params', async () => {
    const responsePromise = client.documents.update({ collection_name: 'collection_name', path: 'path' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.documents.update({
      collection_name: 'collection_name',
      path: 'path',
      index_status: 'not_parsed',
      metadata: { foo: 'string' },
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.documents.delete({ collection_name: 'collection_name', path: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.documents.delete({ collection_name: 'collection_name', path: 'string' });
  });

  test('add: only required params', async () => {
    const responsePromise = client.documents.add({
      collection_name: 'collection_name',
      content: { text: 'text', type: 'text' },
      path: 'path',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('add: required and optional params', async () => {
    const response = await client.documents.add({
      collection_name: 'collection_name',
      content: { text: 'text', type: 'text' },
      path: 'path',
      metadata: { foo: 'string' },
      overwrite: true,
    });
  });

  test('getInfo: only required params', async () => {
    const responsePromise = client.documents.getInfo({ collection_name: 'collection_name', path: 'path' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getInfo: required and optional params', async () => {
    const response = await client.documents.getInfo({
      collection_name: 'collection_name',
      path: 'path',
      include_content: true,
    });
  });

  test('getInfoList: only required params', async () => {
    const responsePromise = client.documents.getInfoList({ collection_name: 'collection_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getInfoList: required and optional params', async () => {
    const response = await client.documents.getInfoList({
      collection_name: 'collection_name',
      limit: 0,
      path_gt: 'path_gt',
      path_prefix: 'path_prefix',
    });
  });

  test('getPageInfo: only required params', async () => {
    const responsePromise = client.documents.getPageInfo({
      collection_name: 'collection_name',
      page_index: 0,
      path: 'path',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getPageInfo: required and optional params', async () => {
    const response = await client.documents.getPageInfo({
      collection_name: 'collection_name',
      page_index: 0,
      path: 'path',
      include_content: true,
    });
  });
});
