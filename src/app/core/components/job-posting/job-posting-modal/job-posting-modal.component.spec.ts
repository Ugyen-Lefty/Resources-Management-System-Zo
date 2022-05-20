import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPostingModalComponent } from './job-posting-modal.component';

describe('JobPostingModalComponent', () => {
  let component: JobPostingModalComponent;
  let fixture: ComponentFixture<JobPostingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobPostingModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPostingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
