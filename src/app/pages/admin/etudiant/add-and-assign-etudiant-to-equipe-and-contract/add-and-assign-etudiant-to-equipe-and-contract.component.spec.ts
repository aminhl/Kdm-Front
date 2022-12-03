import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAndAssignEtudiantToEquipeAndContractComponent } from './add-and-assign-etudiant-to-equipe-and-contract.component';

describe('AddAndAssignEtudiantToEquipeAndContractComponent', () => {
  let component: AddAndAssignEtudiantToEquipeAndContractComponent;
  let fixture: ComponentFixture<AddAndAssignEtudiantToEquipeAndContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAndAssignEtudiantToEquipeAndContractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAndAssignEtudiantToEquipeAndContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
