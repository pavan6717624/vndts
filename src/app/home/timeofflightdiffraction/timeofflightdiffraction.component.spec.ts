import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeofflightdiffractionComponent } from './timeofflightdiffraction.component';

describe('TimeofflightdiffractionComponent', () => {
  let component: TimeofflightdiffractionComponent;
  let fixture: ComponentFixture<TimeofflightdiffractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeofflightdiffractionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeofflightdiffractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
