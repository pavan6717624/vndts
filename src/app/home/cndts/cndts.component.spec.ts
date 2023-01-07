import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CndtsComponent } from './cndts.component';

describe('CndtsComponent', () => {
  let component: CndtsComponent;
  let fixture: ComponentFixture<CndtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CndtsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CndtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
