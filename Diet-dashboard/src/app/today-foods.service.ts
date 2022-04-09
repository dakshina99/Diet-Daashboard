import { FOOD } from './Food';
import { Injectable } from '@angular/core';

const TODAY_FOODS: FOOD[] = [
];

const sumlist = [0,0,0,0];

@Injectable({
  providedIn: 'root'
})


export class TodayFoodsService {
  updateSumList(val:number, ind:number){
    sumlist[ind] += val;
  }

  getSumList(){
    return sumlist;
  }

  getTodayFoods (){
    return TODAY_FOODS;
  }

  addData(food:FOOD) {
    TODAY_FOODS.push(food);
  }

  removeData(index: number) {
    TODAY_FOODS.splice(index,1);
  }

  constructor() { 
  }
}
