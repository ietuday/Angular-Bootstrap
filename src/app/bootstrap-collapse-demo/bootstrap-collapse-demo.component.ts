import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-collapse-demo',
  templateUrl: './bootstrap-collapse-demo.component.html',
  styleUrls: ['./bootstrap-collapse-demo.component.scss']
})
export class BootstrapCollapseDemoComponent implements OnInit {
  public isCollapsed:boolean = false;


  constructor() { }

  ngOnInit() {
  }

  public collapsed(event:any):void {
    console.log(event);
  }

  public expanded(event:any):void {
    console.log(event);
  }

}
