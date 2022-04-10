import { GoogleChartComponent } from './google-chart/google-chart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodListComponent } from './food-list/food-list.component';
import { TodayListComponent } from './today-list/today-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'foodlist', component: FoodListComponent },
  {path: 'todaylist', component: TodayListComponent},
  {path: 'chart', component: GoogleChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
