import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipeDetailsStudComponent } from './equipe-details-stud.component';

describe('EquipeDetailsStudComponent', () => {
  let component: EquipeDetailsStudComponent;
  let fixture: ComponentFixture<EquipeDetailsStudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipeDetailsStudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipeDetailsStudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
