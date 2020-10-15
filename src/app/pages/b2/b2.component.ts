import { fromEvent, Observable, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { finalize, map, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-b2',
  templateUrl: './b2.component.html',
  styleUrls: ['./b2.component.scss'],
})
export class B2Component implements OnInit, OnDestroy {
  mouseClicks$: Observable<any>;
  mouseClickSub: Subscription;

  constructor() {}

  ngOnInit(): void {
    this.mouseClicks$ = fromEvent(document, 'click');
  }

  ngOnDestroy(): void {
    if (this.mouseClickSub) {
      this.mouseClickSub.unsubscribe();
    }
  }

  subscribeToAndPrintMouseEvents(): void {
    if (this.mouseClickSub) {
      this.mouseClickSub.unsubscribe();
    }
    this.mouseClickSub = this.mouseClicks$
      .pipe(
        tap(() => {
          console.log('This statement will print before each value');
        })
      )
      .subscribe((resultObj) => {
        console.log(resultObj);
        console.log('This statement will print after each value');
      });
  }

  subscribeToAndPrintMappedMouseEvents(): void {
    if (this.mouseClickSub) {
      this.mouseClickSub.unsubscribe();
    }
    this.mouseClickSub = this.mouseClicks$
      .pipe(
        map((obj) => {
          return {
            posX: obj.clientX,
            posY: obj.clientY,
          };
        })
      )
      .subscribe((resultObj) => {
        console.log(resultObj);
      });
  }

  printOnly5mouseClicks(): void {
    if (this.mouseClickSub) {
      this.mouseClickSub.unsubscribe();
    }
    this.mouseClickSub = this.mouseClicks$
      .pipe(
        take(5),
        map((obj) => {
          return {
            posX: obj.clientX,
            posY: obj.clientY,
          };
        }),
        finalize(() => {
          console.log('This observable completed after 5 mouse clicks.');
        })
      )
      .subscribe((resultObj) => {
        console.log(resultObj);
      });
  }
}
