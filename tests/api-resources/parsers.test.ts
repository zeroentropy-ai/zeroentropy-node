// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Zeroentropy from 'zeroentropy';
import { Response } from 'node-fetch';

const client = new Zeroentropy({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource parsers', () => {
  test('parse: only required params', async () => {
    const responsePromise = client.parsers.parse({ base64_data: 'base64_data' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('parse: required and optional params', async () => {
    const response = await client.parsers.parse({ base64_data: 'base64_data' });
  });
});
