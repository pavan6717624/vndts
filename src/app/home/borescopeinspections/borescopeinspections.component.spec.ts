import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorescopeinspectionsComponent } from './borescopeinspections.component';

describe('BorescopeinspectionsComponent', () => {
  let component: BorescopeinspectionsComponent;
  let fixture: ComponentFixture<BorescopeinspectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorescopeinspectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorescopeinspectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
