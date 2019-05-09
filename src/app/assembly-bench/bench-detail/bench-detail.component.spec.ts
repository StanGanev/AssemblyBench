import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenchDetailComponent } from './bench-detail.component';

describe('BenchDetailComponent', () => {
  let component: BenchDetailComponent;
  let fixture: ComponentFixture<BenchDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenchDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenchDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
