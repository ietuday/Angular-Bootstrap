import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TimepickerConfig } from 'ng2-bootstrap/timepicker';

// such override allows to keep some initial values

export function getTimepickerConfig(): TimepickerConfig {
  return Object.assign(new TimepickerConfig(), {
    hourStep: 2,
    minuteStep: 10,
    showMeridian: false,
    readonlyInput: false,
    mousewheel: true
  });
}

@Component({
  selector: 'app-bootstrap-time-picker-demo',
  templateUrl: './bootstrap-time-picker-demo.component.html',
  encapsulation : ViewEncapsulation.None,
   providers: [{provide: TimepickerConfig, useFactory: getTimepickerConfig}],
  styleUrls: ['./bootstrap-time-picker-demo.component.scss']
})
export class BootstrapTimePickerDemoComponent implements OnInit {
  public mytime: Date = new Date();
  public ismeridian:boolean = true;
  public ismeridian1: boolean = false;
  public isEnabled: boolean = true;
  public hstep: number = 1;
  public mstep: number = 15;

  public options: any = {
    hstep: [1, 2, 3],
    mstep: [1, 5, 10, 15, 25, 30]
  };

  constructor() { }

  ngOnInit() {
  }

  public toggleMode():void {
    this.ismeridian = !this.ismeridian;
  }

  public update(): void {
    let d = new Date();
    d.setHours(14);
    d.setMinutes(0);
    this.mytime = d;
  }

  public changed(): void {
    console.log('Time changed to: ' + this.mytime);
  }

  public clear(): void {
    this.mytime = void 0;
  }

}
