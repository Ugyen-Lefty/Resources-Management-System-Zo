import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTrackerComponent } from './work-tracker.component';

describe('WorkTrackerComponent', () => {
  let component: WorkTrackerComponent;
  let fixture: ComponentFixture<WorkTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
