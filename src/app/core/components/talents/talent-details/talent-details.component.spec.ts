import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentDetailsComponent } from './talent-details.component';

describe('TalentDetailsComponent', () => {
  let component: TalentDetailsComponent;
  let fixture: ComponentFixture<TalentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TalentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
