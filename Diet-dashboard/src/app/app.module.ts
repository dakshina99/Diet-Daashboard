import { TodayFoodsService } from './today-foods.service';
import { MatIconModule } from '@angular/material/icon';
import { TodayListComponent } from './today-list/today-list.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FooterComponent } from './footer/footer.component';
import { HeadercomponentComponent } from './headercomponent/headercomponent.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from "@angular/material/table";
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [
    AppComponent,
    HeadercomponentComponent,
    FooterComponent,
    FoodListComponent,
    TodayListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCheckboxModule,
    MatIconModule
  ],
  providers: [
    TodayFoodsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
