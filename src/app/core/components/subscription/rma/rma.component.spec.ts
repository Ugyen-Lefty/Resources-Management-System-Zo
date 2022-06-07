import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmaComponent } from './rma.component';

describe('RmaComponent', () => {
  let component: RmaComponent;
  let fixture: ComponentFixture<RmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
