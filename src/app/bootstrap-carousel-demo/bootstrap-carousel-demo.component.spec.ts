import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapCarouselDemoComponent } from './bootstrap-carousel-demo.component';

describe('BootstrapCarouselDemoComponent', () => {
  let component: BootstrapCarouselDemoComponent;
  let fixture: ComponentFixture<BootstrapCarouselDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapCarouselDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapCarouselDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
