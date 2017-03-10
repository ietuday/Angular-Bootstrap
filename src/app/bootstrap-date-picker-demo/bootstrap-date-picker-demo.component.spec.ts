import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapDatePickerDemoComponent } from './bootstrap-date-picker-demo.component';

describe('BootstrapDatePickerDemoComponent', () => {
  let component: BootstrapDatePickerDemoComponent;
  let fixture: ComponentFixture<BootstrapDatePickerDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapDatePickerDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapDatePickerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
