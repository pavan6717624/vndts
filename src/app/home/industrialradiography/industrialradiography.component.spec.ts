import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrialradiographyComponent } from './industrialradiography.component';

describe('IndustrialradiographyComponent', () => {
  let component: IndustrialradiographyComponent;
  let fixture: ComponentFixture<IndustrialradiographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustrialradiographyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustrialradiographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
