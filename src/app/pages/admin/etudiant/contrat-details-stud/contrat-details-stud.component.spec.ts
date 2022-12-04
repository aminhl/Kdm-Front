import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratDetailsStudComponent } from './contrat-details-stud.component';

describe('ContratDetailsStudComponent', () => {
  let component: ContratDetailsStudComponent;
  let fixture: ComponentFixture<ContratDetailsStudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratDetailsStudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratDetailsStudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
