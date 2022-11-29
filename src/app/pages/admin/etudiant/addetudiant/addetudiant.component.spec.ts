import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddetudiantComponent } from './addetudiant.component';

describe('AddetudiantComponent', () => {
  let component: AddetudiantComponent;
  let fixture: ComponentFixture<AddetudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddetudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddetudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
