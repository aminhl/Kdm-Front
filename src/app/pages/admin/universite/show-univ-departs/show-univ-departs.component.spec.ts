import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUnivDepartsComponent } from './show-univ-departs.component';

describe('ShowUnivDepartsComponent', () => {
  let component: ShowUnivDepartsComponent;
  let fixture: ComponentFixture<ShowUnivDepartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowUnivDepartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUnivDepartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
