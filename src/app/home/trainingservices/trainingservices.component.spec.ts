import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingservicesComponent } from './trainingservices.component';

describe('TrainingservicesComponent', () => {
  let component: TrainingservicesComponent;
  let fixture: ComponentFixture<TrainingservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingservicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
