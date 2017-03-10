import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapTypeAheadDemoComponent } from './bootstrap-type-ahead-demo.component';

describe('BootstrapTypeAheadDemoComponent', () => {
  let component: BootstrapTypeAheadDemoComponent;
  let fixture: ComponentFixture<BootstrapTypeAheadDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapTypeAheadDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapTypeAheadDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
