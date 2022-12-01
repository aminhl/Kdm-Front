import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartDetailsStudComponent } from './depart-details-stud.component';

describe('DepartDetailsStudComponent', () => {
  let component: DepartDetailsStudComponent;
  let fixture: ComponentFixture<DepartDetailsStudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartDetailsStudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartDetailsStudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
