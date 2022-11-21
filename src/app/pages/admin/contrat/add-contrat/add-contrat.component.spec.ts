import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContratComponent } from './add-contrat.component';

describe('AddContratComponent', () => {
  let component: AddContratComponent;
  let fixture: ComponentFixture<AddContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddContratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
