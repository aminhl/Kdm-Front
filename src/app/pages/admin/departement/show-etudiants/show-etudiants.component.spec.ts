import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEtudiantsComponent } from './show-etudiants.component';

describe('ShowEtudiantsComponent', () => {
  let component: ShowEtudiantsComponent;
  let fixture: ComponentFixture<ShowEtudiantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowEtudiantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEtudiantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
