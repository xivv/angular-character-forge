import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialisationCreationComponent } from './specialisation-creation.component';

describe('SpecialisationCreationComponent', () => {
  let component: SpecialisationCreationComponent;
  let fixture: ComponentFixture<SpecialisationCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpecialisationCreationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialisationCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
