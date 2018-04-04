import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForemanComponent } from './foreman.component';

describe('ForemanComponent', () => {
  let component: ForemanComponent;
  let fixture: ComponentFixture<ForemanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForemanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForemanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
