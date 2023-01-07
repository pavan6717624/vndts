import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltrasonicinspectionComponent } from './ultrasonicinspection.component';

describe('UltrasonicinspectionComponent', () => {
  let component: UltrasonicinspectionComponent;
  let fixture: ComponentFixture<UltrasonicinspectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltrasonicinspectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UltrasonicinspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
