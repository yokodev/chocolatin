// Simple Karma Unit Component test

import {
  inject,
  TestBed,
} from '@angular/core/testing';

import { App } from './app.component';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        providers: [
          App,
        ],
      }
    );
  });

  it('should have a url', inject([App], (app: App) => {
    expect(app.test).toEqual('test');
  }));
});
