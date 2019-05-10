import { Component, OnInit, Input} from '@angular/core';
import { Pc } from '../../pc.model';
import { BenchService } from '../../bench-list.service';

@Component({
  selector: 'app-bench-item',
  templateUrl: './bench-item.component.html',
  styleUrls: ['./bench-item.component.css']
})
export class BenchItemComponent implements OnInit {
  @Input() personalComputer: Pc;
  // Old just for reference @Output() pcSelected = new EventEmitter<void>();

  constructor(private benchService: BenchService) { }

  ngOnInit() {
  }

  onSelected() {
  // Old just for reference  this.pcSelected.emit();
    this.benchService.pcSelected.emit(this.personalComputer);
  }

}
