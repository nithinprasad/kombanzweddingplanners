import { TestBed } from '@angular/core/testing';

import { InstagramDOMServiceService } from './instagram-domservice.service';

describe('InstagramDOMServiceService', () => {
  let service: InstagramDOMServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstagramDOMServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
