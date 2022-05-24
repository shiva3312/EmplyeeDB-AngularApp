import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output('stateSelected') stateSelected = new EventEmitter<string>();
 
  constructor() { }

  ngOnInit(): void {
  }

  setState(state : string ){
    this.stateSelected.emit(state);
  }

}
