import { Component, OnInit } from '@angular/core';
import { Pc } from './pc.model';

@Component({
  selector: 'app-assembly-bench',
  templateUrl: './assembly-bench.component.html',
  styleUrls: ['./assembly-bench.component.css']
})
export class AssemblyBenchComponent implements OnInit {
  selectedPc: Pc;

  constructor() { }

  ngOnInit() {
    
  }

  

}
