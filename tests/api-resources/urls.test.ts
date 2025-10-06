// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import CrawlerDev from 'crawler.dev';

const client = new CrawlerDev({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource urls', () => {
  // Prism tests are disabled
  test.skip('extractText: only required params', async () => {
    const responsePromise = client.urls.extractText({ url: 'url' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('extractText: required and optional params', async () => {
    const response = await client.urls.extractText({
      url: 'url',
      clean_text: true,
      render_js: true,
      strip_boilerplate: true,
    });
  });
});
