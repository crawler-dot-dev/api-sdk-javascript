// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { CrawlerDev } from '../client';

export abstract class APIResource {
  protected _client: CrawlerDev;

  constructor(client: CrawlerDev) {
    this._client = client;
  }
}
