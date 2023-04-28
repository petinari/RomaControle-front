import { TestBed } from '@angular/core/testing';

import { SubGrupoService } from './sub-grupo.service';

describe('SubGrupoService', () => {
  let service: SubGrupoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubGrupoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
