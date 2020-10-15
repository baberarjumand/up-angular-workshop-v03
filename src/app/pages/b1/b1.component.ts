import { from, Observable, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-b1',
  templateUrl: './b1.component.html',
  styleUrls: ['./b1.component.scss'],
})
export class B1Component implements OnInit, OnDestroy {
  obs1$: Observable<number>;
  obs1Sub: Subscription;

  obs2$: Observable<any>;
  obs2Sub: Subscription;

  constructor() {}

  ngOnInit(): void {
    this.obs1$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    this.obs2$ = from([
      { name: 'Joe', age: 30 },
      { name: 'Frank', age: 20 },
      { name: 'Ryan', age: 50 },
    ]);
  }

  ngOnDestroy(): void {
    if (this.obs1Sub) {
      this.obs1Sub.unsubscribe();
    }
    if (this.obs2Sub) {
      this.obs2Sub.unsubscribe();
    }
  }

  normalSubscribe(): void {
    this.obs1Sub = this.obs1$.subscribe((val) => {
      console.log(val);
    });
  }

  useMapOperatorToMultiplyEachValueBy10(): void {
    this.obs1Sub = this.obs1$
      .pipe(
        map((val) => {
          return 10 * val;
        })
      )
      .subscribe((val) => {
        console.log(val);
      });
  }

  useFilterToPrintEvenNumsOnly(): void {
    this.obs1Sub = this.obs1$
      .pipe(
        filter((val) => {
          return val % 2 === 0;
        })
      )
      .subscribe((resultVal) => {
        console.log(resultVal);
      });
  }

  useFilterAndMapToPrintEvenNumbersTimesTen(): void {
    this.obs1Sub = this.obs1$
      .pipe(
        filter((val) => {
          return val % 2 === 0;
        }),
        map((val) => {
          return val * 10;
        })
      )
      .subscribe((resultVal) => {
        console.log(resultVal);
      });
  }

  printWholeObjects(): void {
    this.obs2Sub = this.obs2$.subscribe((obj) => {
      console.log(obj);
    });
  }

  extractNames(): void {
    this.obs2Sub = this.obs2$
      .pipe(
        map((obj) => {
          return obj.name;
        })
      )
      .subscribe((resultObj) => {
        console.log(resultObj);
      });
  }

  extractAges(): void {
    this.obs2Sub = this.obs2$
      .pipe(
        map((obj) => {
          return obj.age;
        })
      )
      .subscribe((resultObj) => {
        console.log(resultObj);
      });
  }

  useFilterToPrintAgesAbove25(): void {
    this.obs2Sub = this.obs2$
      .pipe(
        filter((obj) => {
          return obj.age > 25;
        })
      )
      .subscribe((resultObj) => {
        console.log(resultObj);
      });
  }
}
