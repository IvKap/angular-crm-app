import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCustomerByIdComponent } from './show-customer-by-id.component';

describe('ShowCustomerByIdComponent', () => {
  let component: ShowCustomerByIdComponent;
  let fixture: ComponentFixture<ShowCustomerByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCustomerByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCustomerByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
