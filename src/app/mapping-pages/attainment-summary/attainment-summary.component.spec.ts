import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttainmentSummaryComponent } from './attainment-summary.component';

describe('AttainmentSummaryComponent', () => {
  let component: AttainmentSummaryComponent;
  let fixture: ComponentFixture<AttainmentSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttainmentSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttainmentSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
