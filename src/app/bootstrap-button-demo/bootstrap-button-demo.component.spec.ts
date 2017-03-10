import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapButtonDemoComponent } from './bootstrap-button-demo.component';

describe('BootstrapButtonDemoComponent', () => {
  let component: BootstrapButtonDemoComponent;
  let fixture: ComponentFixture<BootstrapButtonDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapButtonDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapButtonDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
