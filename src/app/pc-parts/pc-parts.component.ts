import { Component, OnInit } from '@angular/core';
import { Part } from '../shared/part.model';

@Component({
  selector: 'app-pc-parts',
  templateUrl: './pc-parts.component.html',
  styleUrls: ['./pc-parts.component.css']
})
export class PcPartsComponent implements OnInit {
  parts: Part[] = [
    new Part('GTX 1050 Ti',320),
    new Part('AMD Ryzen 5',210)
  ]

  constructor() { }

  ngOnInit() {
  }

  onPartAdded(part: Part) {
    this.parts.push(part);
  }

}
