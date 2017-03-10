import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapPopOverDemoComponent } from './bootstrap-pop-over-demo.component';

describe('BootstrapPopOverDemoComponent', () => {
  let component: BootstrapPopOverDemoComponent;
  let fixture: ComponentFixture<BootstrapPopOverDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapPopOverDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapPopOverDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
