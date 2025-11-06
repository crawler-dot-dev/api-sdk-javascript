// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import APICrawlerDevSDKs, { toFile } from 'api.crawler.dev-sdks';

const client = new APICrawlerDevSDKs({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource extract', () => {
  // Prism tests are disabled
  test.skip('extractFromFile: only required params', async () => {
    const responsePromise = client.extract.extractFromFile({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('extractFromFile: required and optional params', async () => {
    const response = await client.extract.extractFromFile({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      cleanText: true,
      formats: ['text', 'markdown'],
    });
  });

  // Prism tests are disabled
  test.skip('extractFromURL: only required params', async () => {
    const responsePromise = client.extract.extractFromURL({ url: 'url' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('extractFromURL: required and optional params', async () => {
    const response = await client.extract.extractFromURL({
      url: 'url',
      cacheAge: 86400000,
      cleanText: true,
      formats: ['text', 'markdown'],
      headers: { 'User-Agent': 'Custom Bot/1.0', 'X-API-Key': 'my-api-key', 'Accept-Language': 'en-US' },
      maxRedirects: 5,
      maxSize: 10485760,
      maxTimeout: 15000,
      proxy: { password: 'password', server: 'server', username: 'username' },
      stealthMode: true,
    });
  });
});
