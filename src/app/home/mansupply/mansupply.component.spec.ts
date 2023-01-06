import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MansupplyComponent } from './mansupply.component';

describe('MansupplyComponent', () => {
  let component: MansupplyComponent;
  let fixture: ComponentFixture<MansupplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MansupplyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MansupplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
