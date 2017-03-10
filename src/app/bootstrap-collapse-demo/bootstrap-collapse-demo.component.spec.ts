import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapCollapseDemoComponent } from './bootstrap-collapse-demo.component';

describe('BootstrapCollapseDemoComponent', () => {
  let component: BootstrapCollapseDemoComponent;
  let fixture: ComponentFixture<BootstrapCollapseDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapCollapseDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapCollapseDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
