import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantMailComponent } from './etudiant-mail.component';

describe('EtudiantMailComponent', () => {
  let component: EtudiantMailComponent;
  let fixture: ComponentFixture<EtudiantMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudiantMailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
