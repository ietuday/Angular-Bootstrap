import { Component, OnInit,ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal';

@Component({
  selector: 'app-bootstrap-modal-demo',
  templateUrl: './bootstrap-modal-demo.component.html',
  styleUrls: ['./bootstrap-modal-demo.component.scss']
})
export class BootstrapModalDemoComponent implements OnInit {
  @ViewChild('childModal') public childModal:ModalDirective;
  
  constructor() { }

  ngOnInit() {
  }

  public showChildModal():void {
  this.childModal.show();
}

public hideChildModal():void {
  this.childModal.hide();
}


}
