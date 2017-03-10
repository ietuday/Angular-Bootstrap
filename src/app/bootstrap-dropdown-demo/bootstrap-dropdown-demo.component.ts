import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DropdownConfig } from 'ng2-bootstrap/dropdown';

export function getDropdownConfig(): DropdownConfig {
  return Object.assign(new DropdownConfig(), {autoClose: 'disabled', keyboardNav: true});
}


@Component({
  selector: 'app-bootstrap-dropdown-demo',
  templateUrl: './bootstrap-dropdown-demo.component.html',
  encapsulation:ViewEncapsulation.None,
  providers: [{provide: DropdownConfig, useFactory: getDropdownConfig}],
  styleUrls: ['./bootstrap-dropdown-demo.component.scss']
})
export class BootstrapDropdownDemoComponent implements OnInit {
  public items:string[] = ['The first choice!',
  'And another choice for you.', 'but wait! A third!'];

  public status: {isopen: boolean} = {isopen: false};

  public disabled: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public toggled(open:boolean):void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }
}
