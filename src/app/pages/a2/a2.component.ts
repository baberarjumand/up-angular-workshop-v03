import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-a2',
  templateUrl: './a2.component.html',
  styleUrls: ['./a2.component.scss'],
})
export class A2Component implements OnInit, OnDestroy {
  obs1$: Observable<string>;
  obs1Sub: Subscription;

  constructor() {}

  ngOnInit(): void {
    this.obs1$ = new Observable((subscriber) => {
      let count = 0;
      setInterval(() => {
        subscriber.next('Hi! ' + count++);
      }, 500);
    });
  }

  ngOnDestroy(): void {
    if (this.obs1Sub) {
      this.obs1Sub.unsubscribe();
    }
  }

  startSubscription(): void {
    this.obs1Sub = this.obs1$.subscribe((val) => {
      console.log(val);
    });
  }

  endSubscription(): void {
    if (this.obs1Sub) {
      this.obs1Sub.unsubscribe();
    }
  }
}
