import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProfessorComponent } from './show-professor.component';

describe('ShowProfessorComponent', () => {
  let component: ShowProfessorComponent;
  let fixture: ComponentFixture<ShowProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowProfessorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
