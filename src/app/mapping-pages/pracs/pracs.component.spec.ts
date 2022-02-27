import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracsComponent } from './pracs.component';

describe('PracsComponent', () => {
  let component: PracsComponent;
  let fixture: ComponentFixture<PracsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
