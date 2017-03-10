import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapSortableDemoComponent } from './bootstrap-sortable-demo.component';

describe('BootstrapSortableDemoComponent', () => {
  let component: BootstrapSortableDemoComponent;
  let fixture: ComponentFixture<BootstrapSortableDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapSortableDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapSortableDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
