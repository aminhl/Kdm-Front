import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowChefdepartementComponent } from './show-chefdepartement.component';

describe('ShowChefdepartementComponent', () => {
  let component: ShowChefdepartementComponent;
  let fixture: ComponentFixture<ShowChefdepartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowChefdepartementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowChefdepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
