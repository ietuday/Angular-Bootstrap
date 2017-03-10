import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-bootstrap-pagination-demo',
  templateUrl: './bootstrap-pagination-demo.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./bootstrap-pagination-demo.component.scss']
})
export class BootstrapPaginationDemoComponent implements OnInit {
  public totalItems: number = 64;
  public currentPage: number = 4;
  public smallnumPages: number = 0;
  public maxSize:number = 5;
  public bigTotalItems:number = 175;
  public bigCurrentPage:number = 1;
  public numPages:number = 0;

  constructor() { }

  ngOnInit() {
  }

  public setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

  public pageChanged(event: any): void {
    // console.log('Page changed to: ' + event);
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
    console.log('Number items per page: ' + event.itemsPerPage);
  }

}
