import { TestBed, async, inject } from '@angular/core/testing';

import { SecureInnerPagesGuard } from '../guard/secured-inner-pages.guard';

describe('SecuredInnerPagesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecureInnerPagesGuard]
    });
  });

  it('should ...', inject([SecureInnerPagesGuard], (guard: SecureInnerPagesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
