import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-a1',
  templateUrl: './a1.component.html',
  styleUrls: ['./a1.component.scss'],
})
export class A1Component implements OnInit {
  obs1$: Observable<number>;

  constructor() {}

  ngOnInit(): void {
    this.obs1$ = new Observable((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      // subscriber.error('This is an error message!');
      subscriber.next(3);
      // subscriber.complete();
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });
  }

  subscribeToObservable(): void {
    console.log('Just before subscribe');

    this.obs1$.subscribe(
      // A callback for when a new value is received
      (val) => {
        console.log('Received value:', val);
      },
      // A callback if an error is thrown by the observable
      (errVal) => {
        console.error('Error in obs1$', errVal);
      },
      // A callback for when the observable completes
      () => {
        console.log('Obs1$ has completed!');
      }
    );

    console.log('Just after subscribe');
  }

  subscribeToSecondObservable(): void {
    this.obs1$.subscribe(
      // A callback for when a new value is received
      (val) => {
        console.log('Received value:', val);
      },
      // A callback if an error is thrown by the observable
      (errVal) => {
        console.error('Error in obs1$', errVal);
      },
      // A callback for when the observable completes
      () => {
        console.log('Obs1$ has completed!');
      }
    );
  }
}
