import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceComponent } from './pricae.component';

describe('PricaeComponent', () => {
  let component: PriceComponent;
  let fixture: ComponentFixture<PriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
