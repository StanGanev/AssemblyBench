import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Pc } from '../../pc.model';

@Component({
  selector: 'app-bench-item',
  templateUrl: './bench-item.component.html',
  styleUrls: ['./bench-item.component.css']
})
export class BenchItemComponent implements OnInit {
  @Input() personalComputer: Pc;
  @Output() pcSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.pcSelected.emit();
  }

}
