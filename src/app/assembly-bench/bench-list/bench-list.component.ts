import { Component, OnInit } from '@angular/core';
import { Pc } from '../pc.model';
import { BenchService } from '../bench-list.service';

@Component({
  selector: 'app-bench-list',
  templateUrl: './bench-list.component.html',
  styleUrls: ['./bench-list.component.css']
})
export class BenchListComponent implements OnInit {
  // Old just for reference @Output() pcWasSelected = new EventEmitter<Pc>();
  assebledPcs: Pc[];
 
  /* Old just for reference
    assebledPcs: Pc[] = [
    new Pc('TestPc','Intel i7','GTX-980','500GB Samsung','16GB DDR4 Kingston','https://prod.scorptec.com.au/33/1156/74960/168899_large.jpg'),
    new Pc('TestPc2','AMD Ryzen 7','Radeon RX-580','1TB Seagate','16GB DDR4 Crucial','https://images-na.ssl-images-amazon.com/images/I/81fqadZxgOL._SX425_.jpg')
  ]; */

  constructor(private benchService: BenchService) { }

  ngOnInit() {
    this.assebledPcs = this.benchService.getAssebledPcs();
  }

  /* Old just for reference 
  onPcSelected(pc: Pc) {
    this.pcWasSelected.emit(pc)
  } */

}
