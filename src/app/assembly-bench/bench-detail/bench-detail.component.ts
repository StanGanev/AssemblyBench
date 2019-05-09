import { Component, OnInit, Input } from '@angular/core';
import { Pc } from '../pc.model';

@Component({
  selector: 'app-bench-detail',
  templateUrl: './bench-detail.component.html',
  styleUrls: ['./bench-detail.component.css']
})
export class BenchDetailComponent implements OnInit {
  @Input() pc: Pc;

  constructor() { }

  ngOnInit() {
  }

}
