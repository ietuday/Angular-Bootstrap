import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapAcordionDemoComponent } from './bootstrap-acordion-demo.component';

describe('BootstrapAcordionDemoComponent', () => {
  let component: BootstrapAcordionDemoComponent;
  let fixture: ComponentFixture<BootstrapAcordionDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapAcordionDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapAcordionDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
