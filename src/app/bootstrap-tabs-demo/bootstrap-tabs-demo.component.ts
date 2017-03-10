import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TabsetConfig } from 'ng2-bootstrap/tabs';

// such override allows to keep some initial values

export function getTabsetConfig(): TabsetConfig {
  return Object.assign(new TabsetConfig(), {type: 'pills'});
}
@Component({
  selector: 'app-bootstrap-tabs-demo',
  templateUrl: './bootstrap-tabs-demo.component.html',
  encapsulation:ViewEncapsulation.None,
   providers: [{provide: TabsetConfig, useFactory: getTabsetConfig}],
  styleUrls: ['./bootstrap-tabs-demo.component.scss']
})
export class BootstrapTabsDemoComponent implements OnInit {
  public tabs: any[] = [
    {title: 'Dynamic Title 1', content: 'Dynamic content 1'},
    {title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true},
    {title: 'Dynamic Title 3', content: 'Dynamic content 3', removable: true}
  ];

  public tabs2: any[] = [
  {title: 'Dynamic Title 1', content: 'Dynamic content 1', customClass: 'customClass'},
  {title: 'Dynamic Title 2', content: 'Dynamic content 2', customClass: 'customClass'}
];
  constructor() { }

  ngOnInit() {
  }

  public alertMe(): void {
  setTimeout(function (): void {
    alert('You\'ve selected the alert tab!');
  });
}

public setActiveTab(index: number): void {
  this.tabs[index].active = true;
}

public removeTabHandler(/*tab:any*/): void {
  console.log('Remove Tab handler');
}


}
