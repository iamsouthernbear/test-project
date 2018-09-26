import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddInformationComponent } from './pages/add-information/add-information.component';
import { InformationComponent } from './pages/information/information.component';

const routes: Routes = [
  {
    path: '',
    component: AddInformationComponent,
  },
  {
    path: 'info',
    component: InformationComponent,
  },
  {
    path: '**', redirectTo: '/',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
