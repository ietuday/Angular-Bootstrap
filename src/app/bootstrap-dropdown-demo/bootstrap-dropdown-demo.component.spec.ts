import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapDropdownDemoComponent } from './bootstrap-dropdown-demo.component';

describe('BootstrapDropdownDemoComponent', () => {
  let component: BootstrapDropdownDemoComponent;
  let fixture: ComponentFixture<BootstrapDropdownDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapDropdownDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapDropdownDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
