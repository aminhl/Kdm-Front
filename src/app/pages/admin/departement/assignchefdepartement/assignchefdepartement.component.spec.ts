import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignchefdepartementComponent } from './assignchefdepartement.component';

describe('AssignchefdepartementComponent', () => {
  let component: AssignchefdepartementComponent;
  let fixture: ComponentFixture<AssignchefdepartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignchefdepartementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignchefdepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
