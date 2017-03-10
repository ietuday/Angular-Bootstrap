import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapPaginationDemoComponent } from './bootstrap-pagination-demo.component';

describe('BootstrapPaginationDemoComponent', () => {
  let component: BootstrapPaginationDemoComponent;
  let fixture: ComponentFixture<BootstrapPaginationDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapPaginationDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapPaginationDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
