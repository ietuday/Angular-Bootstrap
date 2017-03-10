import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapTooltipDemoComponent } from './bootstrap-tooltip-demo.component';

describe('BootstrapTooltipDemoComponent', () => {
  let component: BootstrapTooltipDemoComponent;
  let fixture: ComponentFixture<BootstrapTooltipDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapTooltipDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapTooltipDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
