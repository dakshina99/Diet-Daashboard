import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { FoodListComponent } from './food-list/food-list.component';
import { TodayListComponent } from './today-list/today-list.component';

const routes: Routes = [
  {path: 'foodlist', component: FoodListComponent }, 
  {path: 'todaylist', component: TodayListComponent},
  {path: 'chart', component:ChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
