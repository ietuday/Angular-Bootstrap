import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProgressbarConfig } from 'ng2-bootstrap/progressbar';

// such override allows to keep some initial values

export function getProgressbarConfig(): ProgressbarConfig {
  return Object.assign(new ProgressbarConfig(), {animate: false, max: 150});
}
@Component({
  selector: 'app-bootstrap-progress-bar-demo',
  templateUrl: './bootstrap-progress-bar-demo.component.html',
  encapsulation:ViewEncapsulation.None,
   providers: [{provide: ProgressbarConfig, useFactory: getProgressbarConfig}],
  styleUrls: ['./bootstrap-progress-bar-demo.component.scss']
})
export class BootstrapProgressBarDemoComponent implements OnInit {
  public max: number = 200;
  public showWarning: boolean;
  public dynamic: number;
  public type: string;
  public stacked: any[] = [];

  constructor() {
    this.random();
  }

  ngOnInit() {
  }

  public random(): void {
    let value = Math.floor((Math.random() * 100) + 1);
    let type: string;

    if (value < 25) {
      type = 'success';
    } else if (value < 50) {
      type = 'info';
    } else if (value < 75) {
      type = 'warning';
    } else {
      type = 'danger';
    }

    this.showWarning = (type === 'danger' || type === 'warning');
    this.dynamic = value;
    this.type = type;
  }

  public randomStacked(): void {
    let types = ['success', 'info', 'warning', 'danger'];

    this.stacked = [];
    let total = 0;
    let n = Math.floor((Math.random() * 4) + 1);
    for (let i = 0; i < n; i++) {
      let index = Math.floor((Math.random() * 4));
      let value = Math.floor((Math.random() * 30) + 1);
      total += value;
      this.stacked.push({
        value,
        max: value, // i !== (n - 1) ? value : 100,
        type: types[index]
      });
    }
  }

}
