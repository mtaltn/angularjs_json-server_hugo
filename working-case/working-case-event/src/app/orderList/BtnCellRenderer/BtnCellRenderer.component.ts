import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { OnDestroy } from '@angular/core';
@Component({
  selector: 'app-BtnCellRenderer',
  templateUrl: './BtnCellRenderer.component.html',
  styleUrls: ['./BtnCellRenderer.component.css']
})
export class BtnCellRendererComponent implements ICellRendererAngularComp, OnDestroy {

  private params: any;
  refresh:any;
  constructor() { }

  agInit(params: any): void {
    this.params = params;
  }

  btnClickedHandler() {
    this.params.clicked(this.params.value);
  }
  ngOnDestroy() {
    // no need to remove the button click handler 
    // https://stackoverflow.com/questions/49083993/does-angular-automatically-remove-template-event-listeners
  }
}
