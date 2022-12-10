import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignUnivDepartementComponent } from './assign-univ-departement.component';

describe('AssignUnivDepartementComponent', () => {
  let component: AssignUnivDepartementComponent;
  let fixture: ComponentFixture<AssignUnivDepartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignUnivDepartementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignUnivDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
