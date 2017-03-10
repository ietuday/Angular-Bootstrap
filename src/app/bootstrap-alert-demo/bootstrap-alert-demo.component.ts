import { Component, OnInit,SecurityContext,ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertConfig } from 'ng2-bootstrap/alert';

// such override allows to keep some initial values

export function getAlertConfig(): AlertConfig {
  return Object.assign(new AlertConfig(), {type: 'success'});
}

@Component({
  selector: 'app-bootstrap-alert-demo',
  templateUrl: './bootstrap-alert-demo.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [{provide: AlertConfig, useFactory: getAlertConfig}],
  styleUrls: ['./bootstrap-alert-demo.component.scss']
})
export class BootstrapAlertDemoComponent implements OnInit {
 public alertss: any = [];
  public alerts: any = [
    {
      type: 'success',
      msg: `<strong>Well done!</strong> You successfully read this important alert message.`
    },
    {
      type: 'info',
      msg: `<strong>Heads up!</strong> This alert needs your attention, but it's not super important.`
    },
    {
      type: 'danger',
      msg: `<strong>Warning!</strong> Better check yourself, you're not looking too good.`
    }
  ];


  public constructor(sanitizer: DomSanitizer) {
    this.alerts = this.alerts.map((alert:any) => ({
      type: alert.type,
      msg: sanitizer.sanitize(SecurityContext.HTML, alert.msg)
    }));
  }


  ngOnInit() {
  }

  public reset(): void {
   this.alerts = this.alerts.map((alert: any) => Object.assign({}, alert));
 }

 public add(): void {
  this.alertss.push({
    type: 'info',
    msg: `This alert will be closed in 5 seconds (added: ${(new Date()).toLocaleTimeString()})`,
    timeout: 5000
  });
}

}
