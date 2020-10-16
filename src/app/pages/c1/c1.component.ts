import { Observable, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.scss'],
})
export class C1Component implements OnInit {
  companiesArr$: Observable<any>;
  companiesSub: Subscription;
  companiesArr = [];

  isLoading = true;

  BASE_URL = 'https://5f59cabb8040620016ab960d.mockapi.io/companies';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.companiesArr$ = this.http.get<any>(this.BASE_URL);

    this.companiesSub = this.companiesArr$.subscribe((val) => {
      this.companiesArr = val;
      console.log(this.companiesArr);

      this.isLoading = false;
    });
  }
}
