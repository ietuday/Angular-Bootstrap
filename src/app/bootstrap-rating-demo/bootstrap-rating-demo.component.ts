import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-bootstrap-rating-demo',
  templateUrl: './bootstrap-rating-demo.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./bootstrap-rating-demo.component.scss']
})
export class BootstrapRatingDemoComponent implements OnInit {
  public max:number = 10;
  public rate:number = 7;
  public isReadonly:boolean = false;
  public overStar:number;
  public percent:number;
  public x: number = 5;
  public y: number = 2;

  constructor() { }

  ngOnInit() {
  }

  public hoveringOver(value:number):void {
    this.overStar = value;
    this.percent = 100 * (value / this.max);
  };

  public resetStar():void {
    this.overStar = void 0;
  }

  public ratingStates: any = [
  {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
  {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
  {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
  {stateOn: 'glyphicon-heart'},
  {stateOff: 'glyphicon-off'}
];


}
