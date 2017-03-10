import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapTabsDemoComponent } from './bootstrap-tabs-demo.component';

describe('BootstrapTabsDemoComponent', () => {
  let component: BootstrapTabsDemoComponent;
  let fixture: ComponentFixture<BootstrapTabsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapTabsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapTabsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
