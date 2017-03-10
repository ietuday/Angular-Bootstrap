import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PopoverConfig } from 'ng2-bootstrap/popover';

// such override allows to keep some initial values

export function getPopoverConfig(): PopoverConfig {
  return Object.assign(new PopoverConfig(), {placement: 'right', container: 'body', triggers: 'focus'});
}

@Component({
  selector: 'app-bootstrap-pop-over-demo',
  templateUrl: './bootstrap-pop-over-demo.component.html',
  encapsulation:ViewEncapsulation.None,
   providers: [{provide: PopoverConfig, useFactory: getPopoverConfig}],
  styleUrls: ['./bootstrap-pop-over-demo.component.scss']
})
export class BootstrapPopOverDemoComponent implements OnInit {
  public title:string = 'Welcome word';
  public content: string = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';
  public html:string = `
<span class="btn btn-danger">Never trust not sanitized HTML!!!</span>`;
  constructor() { }

  ngOnInit() {
  }

}
