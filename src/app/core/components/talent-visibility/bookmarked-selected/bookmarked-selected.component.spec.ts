import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkedSelectedComponent } from './bookmarked-selected.component';

describe('BookmarkedSelectedComponent', () => {
  let component: BookmarkedSelectedComponent;
  let fixture: ComponentFixture<BookmarkedSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkedSelectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkedSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
