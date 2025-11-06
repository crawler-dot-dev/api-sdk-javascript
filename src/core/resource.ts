// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { APICrawlerDevSDKs } from '../client';

export abstract class APIResource {
  protected _client: APICrawlerDevSDKs;

  constructor(client: APICrawlerDevSDKs) {
    this._client = client;
  }
}
