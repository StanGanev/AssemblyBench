import { Injectable, EventEmitter } from '@angular/core';
import { Pc } from './pc.model';


@Injectable({
    providedIn: 'root'
})

export class BenchService {
    pcSelected = new EventEmitter<Pc>();

    private assebledPcs: Pc[] = [
        new Pc('TestPc','Intel i7','GTX-980','500GB Samsung','16GB DDR4 Kingston','https://prod.scorptec.com.au/33/1156/74960/168899_large.jpg'),
        new Pc('TestPc2','AMD Ryzen 7','Radeon RX-580','1TB Seagate','16GB DDR4 Crucial','https://images-na.ssl-images-amazon.com/images/I/81fqadZxgOL._SX425_.jpg')
      ];

      getAssebledPcs() {
          return this.assebledPcs.slice();
      }
}