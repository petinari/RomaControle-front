import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoProdutosComponent } from './grupo-produtos.component';

describe('GrupoProdutosComponent', () => {
  let component: GrupoProdutosComponent;
  let fixture: ComponentFixture<GrupoProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrupoProdutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrupoProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
