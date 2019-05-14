import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  /* Old just for reference
  @Output() argumentSelected = new EventEmitter<string>();

  onSelect(argument: string) {
    this.argumentSelected.emit(argument);
  } */

  constructor() { }

  ngOnInit() {
  }

}
