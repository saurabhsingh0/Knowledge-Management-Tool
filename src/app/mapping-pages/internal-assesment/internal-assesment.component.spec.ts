import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalAssesmentComponent } from './internal-assesment.component';

describe('InternalAssesmentComponent', () => {
  let component: InternalAssesmentComponent;
  let fixture: ComponentFixture<InternalAssesmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalAssesmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalAssesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
