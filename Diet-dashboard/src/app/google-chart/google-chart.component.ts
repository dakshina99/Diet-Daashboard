import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';
import { TodayFoodsService } from '../today-foods.service';

@Component({
  selector: 'app-google-chart',
  templateUrl: './google-chart.component.html',
  styleUrls: ['./google-chart.component.css']
})
export class GoogleChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  todayFoods = new TodayFoodsService();
  sumList = this.todayFoods.getSumList();

  public pieChart: GoogleChartInterface = {
    chartType: GoogleChartType.PieChart,
    dataTable: [
      ['Nutrition', 'grams'],
      ['Fat',   this.sumList[0] ],
      ['Protein',  this.sumList[1] ],
      ['Carbs', this.sumList[2] ],
      ['Fiber',  this.sumList[3] ]
    ],
    options: {width: 700,
      height : 500
   },

  };

}
