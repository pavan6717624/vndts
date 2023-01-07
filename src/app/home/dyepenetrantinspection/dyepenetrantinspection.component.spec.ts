import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DyepenetrantinspectionComponent } from './dyepenetrantinspection.component';

describe('DyepenetrantinspectionComponent', () => {
  let component: DyepenetrantinspectionComponent;
  let fixture: ComponentFixture<DyepenetrantinspectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DyepenetrantinspectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DyepenetrantinspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
