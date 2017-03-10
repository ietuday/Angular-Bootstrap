import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapProgressBarDemoComponent } from './bootstrap-progress-bar-demo.component';

describe('BootstrapProgressBarDemoComponent', () => {
  let component: BootstrapProgressBarDemoComponent;
  let fixture: ComponentFixture<BootstrapProgressBarDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapProgressBarDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapProgressBarDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
