import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDetailEquipeComponent } from './add-detail-equipe.component';

describe('AddDetailEquipeComponent', () => {
  let component: AddDetailEquipeComponent;
  let fixture: ComponentFixture<AddDetailEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDetailEquipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDetailEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
