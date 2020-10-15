import { B2Component } from './pages/b2/b2.component';
import { B1Component } from './pages/b1/b1.component';
import { A2Component } from './pages/a2/a2.component';
import { A1Component } from './pages/a1/a1.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'a1',
    component: A1Component,
  },
  {
    path: 'a2',
    component: A2Component,
  },
  {
    path: 'b1',
    component: B1Component,
  },
  {
    path: 'b2',
    component: B2Component,
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
