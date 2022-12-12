import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentDetailsProfComponent } from './department-details-prof.component';

describe('DepartmentDetailsProfComponent', () => {
  let component: DepartmentDetailsProfComponent;
  let fixture: ComponentFixture<DepartmentDetailsProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentDetailsProfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentDetailsProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
