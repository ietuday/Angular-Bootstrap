import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-button-demo',
  templateUrl: './bootstrap-button-demo.component.html',
  styleUrls: ['./bootstrap-button-demo.component.scss']
})
export class BootstrapButtonDemoComponent implements OnInit {
  public singleModel: string = '1';
  public checkModel:any = {left: false, middle: true, right: false};
  public radioModel: string = 'Middle';
  public disabled: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
