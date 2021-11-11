import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndividualPage } from '../individual/individual.page';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage
  }
//   {
//     path:'individual',
//   component:IndividualPage
//  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
