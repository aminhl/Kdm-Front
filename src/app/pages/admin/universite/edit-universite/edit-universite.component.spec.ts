import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUniversiteComponent } from './edit-universite.component';

describe('EditUniversiteComponent', () => {
  let component: EditUniversiteComponent;
  let fixture: ComponentFixture<EditUniversiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUniversiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUniversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
