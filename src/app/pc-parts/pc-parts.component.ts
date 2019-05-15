import { Component, OnInit } from '@angular/core';
import { Part } from '../shared/part.model';
import { PcPartsService } from './pc-parts.service';

@Component({
  selector: 'app-pc-parts',
  templateUrl: './pc-parts.component.html',
  styleUrls: ['./pc-parts.component.css']
})
export class PcPartsComponent implements OnInit {
  public parts: Part[] = [];
  /* Old just for reference
  parts: Part[] = [
    new Part('GTX 1050 Ti',320),
    new Part('AMD Ryzen 5',210)
  ] */

  constructor(private pcPartsService: PcPartsService) { }

  ngOnInit() {
    this.parts = this.pcPartsService.getParts();
    this.pcPartsService.partsChanged
      .subscribe(
        (parts: Part[]) => {
          this.parts = parts;
        }
      );
  }

  /* Old just for reference
  onPartAdded(part: Part) {
    this.parts.push(part);
  } */

}
