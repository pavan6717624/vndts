import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TubeinspectionservicesComponent } from './tubeinspectionservices.component';

describe('TubeinspectionservicesComponent', () => {
  let component: TubeinspectionservicesComponent;
  let fixture: ComponentFixture<TubeinspectionservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TubeinspectionservicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TubeinspectionservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
