import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignProfessorToContractComponent } from './assign-professor-to-contract.component';

describe('AssignProfessorToContractComponent', () => {
  let component: AssignProfessorToContractComponent;
  let fixture: ComponentFixture<AssignProfessorToContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignProfessorToContractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignProfessorToContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
