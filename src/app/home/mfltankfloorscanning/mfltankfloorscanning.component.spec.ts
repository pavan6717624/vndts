import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfltankfloorscanningComponent } from './mfltankfloorscanning.component';

describe('MfltankfloorscanningComponent', () => {
  let component: MfltankfloorscanningComponent;
  let fixture: ComponentFixture<MfltankfloorscanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfltankfloorscanningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfltankfloorscanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
