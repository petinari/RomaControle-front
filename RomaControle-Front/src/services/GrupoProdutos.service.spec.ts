/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GrupoProdutosService } from './GrupoProdutos.service';

describe('Service: GrupoProdutos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GrupoProdutosService]
    });
  });

  it('should ...', inject([GrupoProdutosService], (service: GrupoProdutosService) => {
    expect(service).toBeTruthy();
  }));
});
