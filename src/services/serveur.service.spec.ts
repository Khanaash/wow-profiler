import { TestBed, inject } from '@angular/core/testing';

import { ServeurServiceService } from './serveur.service';

describe('ServeurServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServeurServiceService]
    });
  });

  it('should ...', inject([ServeurServiceService], (service: ServeurServiceService) => {
    expect(service).toBeTruthy();
  }));
});
