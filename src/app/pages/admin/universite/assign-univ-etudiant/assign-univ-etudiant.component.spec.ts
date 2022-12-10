import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignUnivEtudiantComponent } from './assign-univ-etudiant.component';

describe('AssignUnivEtudiantComponent', () => {
  let component: AssignUnivEtudiantComponent;
  let fixture: ComponentFixture<AssignUnivEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignUnivEtudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignUnivEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
