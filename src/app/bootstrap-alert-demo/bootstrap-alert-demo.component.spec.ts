import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapAlertDemoComponent } from './bootstrap-alert-demo.component';

describe('BootstrapAlertDemoComponent', () => {
  let component: BootstrapAlertDemoComponent;
  let fixture: ComponentFixture<BootstrapAlertDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapAlertDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapAlertDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
