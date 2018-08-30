import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialisationOverviewComponent } from './specialisation-overview.component';

describe('SpecialisationOverviewComponent', () => {
  let component: SpecialisationOverviewComponent;
  let fixture: ComponentFixture<SpecialisationOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpecialisationOverviewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialisationOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
