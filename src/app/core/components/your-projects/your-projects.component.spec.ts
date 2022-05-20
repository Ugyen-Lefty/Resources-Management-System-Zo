import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourProjectsComponent } from './your-projects.component';

describe('YourProjectsComponent', () => {
  let component: YourProjectsComponent;
  let fixture: ComponentFixture<YourProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
