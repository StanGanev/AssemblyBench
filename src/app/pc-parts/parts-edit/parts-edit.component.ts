import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Part } from 'src/app/shared/part.model';


@Component({
  selector: 'app-parts-edit',
  templateUrl: './parts-edit.component.html',
  styleUrls: ['./parts-edit.component.css']
})
export class PartsEditComponent implements OnInit {
  @ViewChild('partName') partNameRef: ElementRef;
  @ViewChild('partPrice') partPriceRef: ElementRef;
  @Output() partAdded = new EventEmitter<Part>();

  constructor() { }

  ngOnInit() {
  }

  onAddPart() {
    const name = this.partNameRef.nativeElement.value;
    const price = this.partPriceRef.nativeElement.value;
    const newPart = new Part(name,price);
    this.partAdded.emit(newPart); 
  }

}
