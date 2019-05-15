import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Pc } from '../pc.model';
import { BenchService } from '../bench-list.service';


@Component({
  selector: 'app-bench-detail',
  templateUrl: './bench-detail.component.html',
  styleUrls: ['./bench-detail.component.css']
})
export class BenchDetailComponent implements OnInit {
  /* Old just for reference
  @Input() pc: Pc; */
  pc: Pc;
  id: number;
  constructor(private benchService: BenchService ,private route: ActivatedRoute) { }

  ngOnInit() {
    /* Old just for reference, wont work for our current logic need to be with observeble or wont react on realtime changes 
    const id = this.route.snapshot.params['id']; */
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.pc = this.benchService.getPc(this.id);
        }
      );
  }

}
