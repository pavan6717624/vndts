import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndtsComponent } from './andts.component';

describe('AndtsComponent', () => {
  let component: AndtsComponent;
  let fixture: ComponentFixture<AndtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndtsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AndtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
