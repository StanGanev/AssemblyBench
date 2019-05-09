import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenchItemComponent } from './bench-item.component';

describe('BenchItemComponent', () => {
  let component: BenchItemComponent;
  let fixture: ComponentFixture<BenchItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenchItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenchItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
