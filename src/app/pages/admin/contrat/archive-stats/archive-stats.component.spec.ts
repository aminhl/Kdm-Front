import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveStatsComponent } from './archive-stats.component';

describe('ArchiveStatsComponent', () => {
  let component: ArchiveStatsComponent;
  let fixture: ComponentFixture<ArchiveStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
