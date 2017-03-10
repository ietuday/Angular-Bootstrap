import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-bootstrap-sortable-demo',
  templateUrl: './bootstrap-sortable-demo.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./bootstrap-sortable-demo.component.scss']
})
export class BootstrapSortableDemoComponent implements OnInit {
  public itemStringsLeft: any[] = [
    'Windstorm',
    'Bombasto',
    'Magneta',
    'Tornado'
  ];

  public itemStringsRight: any[] = [
    'Mr. O',
    'Tomato'
  ];

  public itemObjectsLeft: any[] = [
  { id: 1, name: 'Windstorm' },
  { id: 2, name: 'Bombasto' },
  { id: 3, name: 'Magneta' }
];

public itemObjectsRight: any[] = [
  { id: 4, name: 'Tornado' },
  { id: 5, name: 'Mr. O' },
  { id: 6, name: 'Tomato' }
];

public itemStringsLeft2: any[] = [
   'Windstorm',
   'Bombasto',
   'Magneta',
   'Tornado'
 ];

 public itemStringsRight2: any[] = [
   'Mr. O',
   'Tomato'
 ];

  constructor() { }

  ngOnInit() {
  }

}
