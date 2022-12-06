import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUnivEtudiantsComponent } from './show-univ-etudiants.component';

describe('ShowUnivEtudiantsComponent', () => {
  let component: ShowUnivEtudiantsComponent;
  let fixture: ComponentFixture<ShowUnivEtudiantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowUnivEtudiantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUnivEtudiantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
