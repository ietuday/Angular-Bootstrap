import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapTimePickerDemoComponent } from './bootstrap-time-picker-demo.component';

describe('BootstrapTimePickerDemoComponent', () => {
  let component: BootstrapTimePickerDemoComponent;
  let fixture: ComponentFixture<BootstrapTimePickerDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapTimePickerDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapTimePickerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
