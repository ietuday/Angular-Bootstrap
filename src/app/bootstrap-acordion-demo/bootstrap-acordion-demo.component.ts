import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { AccordionConfig } from 'ng2-bootstrap/accordion';


// such override allows to keep some initial values

export function getAccordionConfig(): AccordionConfig {
  return Object.assign(new AccordionConfig(), {closeOthers: true});
}

@Component({
  selector: 'app-bootstrap-acordion-demo',
  templateUrl: './bootstrap-acordion-demo.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./bootstrap-acordion-demo.component.scss']
})
export class BootstrapAcordionDemoComponent implements OnInit {
  public items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  public customClass: string = 'customClass';
  public isFirstOpen: boolean = true;
  public oneAtATime: boolean = true;
  public status: any = {
    isFirstOpen: true,
    isFirstDisabled: false,
    isOpen: false
  };
  public groups: any[] = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  constructor() { }

  ngOnInit() {
  }
  public addItem(): void {
    this.items.push(`Items ${this.items.length + 1}`);
  }

}
