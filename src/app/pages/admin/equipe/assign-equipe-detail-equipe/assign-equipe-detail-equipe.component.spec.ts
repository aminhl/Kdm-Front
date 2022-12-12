import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignEquipeDetailEquipeComponent } from './assign-equipe-detail-equipe.component';

describe('AssignEquipeDetailEquipeComponent', () => {
  let component: AssignEquipeDetailEquipeComponent;
  let fixture: ComponentFixture<AssignEquipeDetailEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignEquipeDetailEquipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignEquipeDetailEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
