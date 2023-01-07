import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagneticparticleinspectionComponent } from './magneticparticleinspection.component';

describe('MagneticparticleinspectionComponent', () => {
  let component: MagneticparticleinspectionComponent;
  let fixture: ComponentFixture<MagneticparticleinspectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagneticparticleinspectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagneticparticleinspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
