import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhasedarrayComponent } from './phasedarray.component';

describe('PhasedarrayComponent', () => {
  let component: PhasedarrayComponent;
  let fixture: ComponentFixture<PhasedarrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhasedarrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhasedarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
