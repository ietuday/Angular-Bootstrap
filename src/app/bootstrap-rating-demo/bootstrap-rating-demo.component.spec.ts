import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapRatingDemoComponent } from './bootstrap-rating-demo.component';

describe('BootstrapRatingDemoComponent', () => {
  let component: BootstrapRatingDemoComponent;
  let fixture: ComponentFixture<BootstrapRatingDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapRatingDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapRatingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
