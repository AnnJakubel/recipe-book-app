import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  collapsed = true;
  @Output() featureSelected = new EventEmitter<string>(); 
  // featureSelected can be used in other components' html files by (featureSelected)="otherFunction($event)" ...
  // @Output enables this and via $event the data is passed into a new function

  onSelect(feature: string) {
    this.featureSelected.emit(feature); 
    //feature is passed from html when clicked. EventEmitter will emit the string passed here
  }
}
