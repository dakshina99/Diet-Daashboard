import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { ColDef } from 'ag-grid-community';


export interface Food{
  name:string;
  fat:number;
  protein:number;
  carbohydrates:number;
  fiber:number;
}

const FOOD_DATA: Food[] = [
  {name:'Corn', fat:1, protein:3, carbohydrates:19, fiber:3 },
  {name:'Avacado', fat:15, protein:2, carbohydrates:9, fiber:7 }
]


// FoodData: Food[] = [
//   {"name":'Corn', "fat":1, "protein":3, "carbohydrates":19, "fiber":3 },
//   {"name":'Avacado', "fat":15, "protein":2, "carbohydrates":9, "fiber":7 }
// ]

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],
  providers:[DataService]
})

export class FoodListComponent implements OnInit {


  tableRow0: string[]=[];
  tableRow1: string[]=[];
  tableRow2: string[]=[];
  tableRow3: string[]=[];
  tableRow4: string[]=[];
  tableRow5: string[]=[];
  tableRow6: string[]=[];
  tableRow7: string[]=[];
  tableRow8: string[]=[];
  tableRow9: string[]=[];

  getDataFromService0(){
    this.tableRow0 = this.foodservice.getFood0()
  }
  getDataFromService1(){
    this.tableRow1 = this.foodservice.getFood1()
  }  
  getDataFromService2(){
    this.tableRow2 = this.foodservice.getFood2()
  }
  getDataFromService3(){
    this.tableRow3 = this.foodservice.getFood3()
  }
  getDataFromService4(){
    this.tableRow4 = this.foodservice.getFood4()
  }
  getDataFromService5(){
    this.tableRow5 = this.foodservice.getFood5()
  }
  getDataFromService6(){
    this.tableRow6 = this.foodservice.getFood6()
  }
  getDataFromService7(){
    this.tableRow7 = this.foodservice.getFood7()
  }
  getDataFromService8(){
    this.tableRow8 = this.foodservice.getFood8()
  }
  getDataFromService9(){
    this.tableRow9 = this.foodservice.getFood9()
  }

  constructor(private foodservice: DataService) { }

  ngOnInit(): void {
  }

}
