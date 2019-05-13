import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Part } from 'src/app/shared/part.model';
import { PcPartsService } from '../pc-parts.service';


@Component({
  selector: 'app-parts-edit',
  templateUrl: './parts-edit.component.html',
  styleUrls: ['./parts-edit.component.css']
})
export class PartsEditComponent implements OnInit {
  @ViewChild('partName') partNameRef: ElementRef;
  @ViewChild('partPrice') partPriceRef: ElementRef;
  /* Old just for reference
  @Output() partAdded = new EventEmitter<Part>(); */

  constructor(private pcPartsService: PcPartsService) { }

  ngOnInit() {
  }

  onAddPart() {
    const name = this.partNameRef.nativeElement.value;
    const price = this.partPriceRef.nativeElement.value;
    const newPart = new Part(name,price);
    /* Old just for reference
    this.partAdded.emit(newPart); */ 
    this.pcPartsService.addPart(newPart);
  }

}
