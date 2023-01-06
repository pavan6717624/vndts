import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturingservicesComponent } from './manufacturingservices.component';

describe('ManufacturingservicesComponent', () => {
  let component: ManufacturingservicesComponent;
  let fixture: ComponentFixture<ManufacturingservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManufacturingservicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManufacturingservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
