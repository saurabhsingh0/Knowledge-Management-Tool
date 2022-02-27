import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseServeyComponent } from './course-servey.component';

describe('CourseServeyComponent', () => {
  let component: CourseServeyComponent;
  let fixture: ComponentFixture<CourseServeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseServeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseServeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
