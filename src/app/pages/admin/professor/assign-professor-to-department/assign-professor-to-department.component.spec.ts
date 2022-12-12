import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignProfessorToDepartmentComponent } from './assign-professor-to-department.component';

describe('AssignProfessorToDepartmentComponent', () => {
  let component: AssignProfessorToDepartmentComponent;
  let fixture: ComponentFixture<AssignProfessorToDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignProfessorToDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignProfessorToDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
