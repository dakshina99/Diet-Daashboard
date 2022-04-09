import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodListComponent } from './food-list/food-list.component';
import { TodayListComponent } from './today-list/today-list.component';

const routes: Routes = [
  {path: 'foodlist', component: FoodListComponent }, 
  {path: 'todaylist', component: TodayListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
