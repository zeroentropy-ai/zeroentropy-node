// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Zeroentropy from 'zeroentropy';
import { Response } from 'node-fetch';

const client = new Zeroentropy({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource documents', () => {
  test('addDocument: only required params', async () => {
    const responsePromise = client.documents.addDocument({
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

  test('addDocument: required and optional params', async () => {
    const response = await client.documents.addDocument({
      collection_name: 'collection_name',
      content: { text: 'text', type: 'text' },
      path: 'path',
      metadata: { foo: 'string' },
      overwrite: true,
    });
  });

  test('deleteDocument: only required params', async () => {
    const responsePromise = client.documents.deleteDocument({
      collection_name: 'collection_name',
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

  test('deleteDocument: required and optional params', async () => {
    const response = await client.documents.deleteDocument({
      collection_name: 'collection_name',
      path: 'path',
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
      id_gt: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      limit: 0,
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
      include_image: true,
    });
  });
});
