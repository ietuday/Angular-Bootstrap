import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { CarouselConfig } from 'ng2-bootstrap/carousel';

@Component({
  selector: 'app-bootstrap-carousel-demo',
  templateUrl: './bootstrap-carousel-demo.component.html',
  encapsulation:ViewEncapsulation.None,
  providers: [{provide: CarouselConfig, useValue: {interval: 1500, noPause: true}}],
  styleUrls: ['./bootstrap-carousel-demo.component.scss']
})
export class BootstrapCarouselDemoComponent implements OnInit {
  public myInterval: number = 1500;
  public slides: any[] = [];
  public activeSlideIndex: number;
  public noWrapSlides:boolean = false;
  constructor() {
    for (let i = 0; i < 4; i++) {
      this.addSlide();
    }
  }

  ngOnInit() {
  }

  public addSlide(): void {
    this.slides.push({
      image: `../assets/images/nature/${ this.slides.length % 8 + 1 }.jpg`
    });
  }

  public removeSlide(index?: number): void {
    const toRemove = index ? index : this.activeSlideIndex;
    this.slides.splice(toRemove, 1);
  }

}
