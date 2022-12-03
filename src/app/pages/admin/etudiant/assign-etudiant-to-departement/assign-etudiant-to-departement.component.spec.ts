import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignEtudiantToDepartementComponent } from './assign-etudiant-to-departement.component';

describe('AssignEtudiantToDepartementComponent', () => {
  let component: AssignEtudiantToDepartementComponent;
  let fixture: ComponentFixture<AssignEtudiantToDepartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignEtudiantToDepartementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignEtudiantToDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
