import { TodayFoodsService } from './today-foods.service';
import { MatIconModule } from '@angular/material/icon';
import { TodayListComponent } from './today-list/today-list.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from "@angular/material/table";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { GoogleChartComponent } from './google-chart/google-chart.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FoodListComponent,
    TodayListComponent,
    GoogleChartComponent,
    HeaderComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCheckboxModule,
    Ng2GoogleChartsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,

  ],
  providers: [
    TodayFoodsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
