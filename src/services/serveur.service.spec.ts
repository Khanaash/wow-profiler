import { TestBed, inject } from '@angular/core/testing';

import { ServeurService } from './serveur.service';

describe('ServeurServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServeurService]
    });
  });

  it('should ...', inject([ServeurService], (service: ServeurService) => {
    expect(service).toBeTruthy();
  }));
});
