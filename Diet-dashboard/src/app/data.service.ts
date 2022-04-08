import { Injectable } from '@angular/core';

Injectable({
  providedIn: 'root'
})

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

export class DataService {

  food0: string[]=['Corn','1','3','19','3']
  food1: string[]=['Avacado','15','2','9','7']
  food2: string[]=['Yams','0','2','28','4']  
  food3: string[]=['Bananas','0','1','23','3']
  food4: string[]=['Peaches','0','1','10','1']
  food5: string[]=['Stawberries','0','1','8','2']
  food6: string[]=['Almonds','49','21','22','12']
  food7: string[]=['Pecans','72','9','14','10']  
  food8: string[]=['Walnuts','65','15','14','7']
  food9: string[]=['Hazelnuts','61','15','17','10']

  getFood0():string[]{
    return this.food0
  }

  getFood1():string[]{
    return this.food1
  }

  getFood2():string[]{
    return this.food2
  }

  getFood3():string[]{
    return this.food3
  }

  getFood4():string[]{
    return this.food4
  }

  getFood5():string[]{
    return this.food5
  }

  getFood6():string[]{
    return this.food6
  }

  getFood7():string[]{
    return this.food7
  }

  getFood8():string[]{
    return this.food8
  }

  getFood9():string[]{
    return this.food9
  }
  constructor() { }
}
