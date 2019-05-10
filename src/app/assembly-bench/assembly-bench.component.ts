import { Component, OnInit } from '@angular/core';
import { Pc } from './pc.model';
import { BenchService } from './bench-list.service';

@Component({
  selector: 'app-assembly-bench',
  templateUrl: './assembly-bench.component.html',
  styleUrls: ['./assembly-bench.component.css'],
  providers: [BenchService]
})
export class AssemblyBenchComponent implements OnInit {
  selectedPc: Pc;

  constructor(private benchService: BenchService) { }

  ngOnInit() {
    this.benchService.pcSelected
      .subscribe(
        (pc: Pc) => {
          this.selectedPc = pc;
        }
      )
  }

}