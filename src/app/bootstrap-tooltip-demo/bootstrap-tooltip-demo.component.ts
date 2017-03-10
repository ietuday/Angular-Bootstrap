import { Component, OnInit } from '@angular/core';
import { TooltipConfig } from 'ng2-bootstrap/tooltip';

// such override allows to keep some initial values

export function getAlertConfig(): TooltipConfig {
  return Object.assign(new TooltipConfig(), {placement: 'right', container: 'body'});
}

@Component({
  selector: 'app-bootstrap-tooltip-demo',
  templateUrl: './bootstrap-tooltip-demo.component.html',
  providers: [{provide: TooltipConfig, useFactory: getAlertConfig}],
  styleUrls: ['./bootstrap-tooltip-demo.component.scss']
})
export class BootstrapTooltipDemoComponent implements OnInit {
public content: string = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';
public html:string = `
<span class="btn btn-danger">Never trust not sanitized HTML!!!</span>`;
  constructor() { }

  ngOnInit() {
  }

}
