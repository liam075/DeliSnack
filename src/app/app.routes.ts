import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { TestComponent } from './Pages/test/test.component';
import { Home2Component } from './Pages/home2/home2.component';
import { Home3Component } from './Pages/home3/home3.component';

export const routes: Routes = [
  {path: '',
  redirectTo: 'home',
  pathMatch: 'full'},
  { path: 'home', component:HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'test', component: TestComponent},
  { path: 'inicio', component: Home2Component},
  { path: 'prueba', component:Home3Component}
];
