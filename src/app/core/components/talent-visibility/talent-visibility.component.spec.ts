import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentVisibilityComponent } from './talent-visibility.component';

describe('TalentVisibilityComponent', () => {
  let component: TalentVisibilityComponent;
  let fixture: ComponentFixture<TalentVisibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalentVisibilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TalentVisibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
