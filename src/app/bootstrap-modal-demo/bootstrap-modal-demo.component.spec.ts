import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapModalDemoComponent } from './bootstrap-modal-demo.component';

describe('BootstrapModalDemoComponent', () => {
  let component: BootstrapModalDemoComponent;
  let fixture: ComponentFixture<BootstrapModalDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapModalDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapModalDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
