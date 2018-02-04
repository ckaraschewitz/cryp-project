import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCryptoBarComponent } from './add-crypto-bar.component';

describe('AddCryptoBarComponent', () => {
  let component: AddCryptoBarComponent;
  let fixture: ComponentFixture<AddCryptoBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCryptoBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCryptoBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
