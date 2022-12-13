import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailsEquipeToEquipeComponent } from './show-details-equipe-to-equipe.component';

describe('ShowDetailsEquipeToEquipeComponent', () => {
  let component: ShowDetailsEquipeToEquipeComponent;
  let fixture: ComponentFixture<ShowDetailsEquipeToEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDetailsEquipeToEquipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetailsEquipeToEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
