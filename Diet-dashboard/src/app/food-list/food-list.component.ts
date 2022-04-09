import { TodayFoodsService } from './../today-foods.service';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FOOD } from "../Food";
import { FOODS } from "../mock-foods";

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  todayFoods;

  constructor(todayFoods: TodayFoodsService) {
    this.todayFoods = todayFoods;
  }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['select', 'name', 'fat', 'protein', 'carbs', 'fiber'];
  data = Object.assign(FOODS);
  dataSource = new MatTableDataSource<FOOD>(this.data);
  selection = new SelectionModel<FOOD>(true, []);

  checkedData = [] as any;
  uncheckedData = this.data;


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  containsObject(obj: any, list: any[]) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return false;
        }
    }

    return true;
}

  transferSelectedRows() {
    let fat = 0;
    let pro = 0;
    let carb = 0;
    let fib = 0;

    //let sumIndex = this.uncheckedData.findIndex(((obj: { position: number; }) => obj.position == 99));
    this.selection.selected.forEach(item => {
      let index: number = this.uncheckedData.findIndex((d: FOOD) => d === item);
      if (this.containsObject(this.uncheckedData[index], this.todayFoods.getTodayFoods())) {
        this.todayFoods.addData(this.uncheckedData[index]);
        fat += this.uncheckedData[index].fat;
      pro += this.uncheckedData[index].protein;
      carb += this.uncheckedData[index].carbohydrates;
      fib += this.uncheckedData[index].fiber;

        // this.uncheckedData[sumIndex].fat += this.uncheckedData[index].fat;
        // this.uncheckedData[sumIndex].protein += this.uncheckedData[index].protein;
        // this.uncheckedData[sumIndex].carbohydrates += this.uncheckedData[index].carbohydrates;
        // this.uncheckedData[sumIndex].fiber += this.uncheckedData[index].fiber;
      }
      //this.checkedData.push(this.uncheckedData[index]);
    });
    this.todayFoods.updateSumList(fat,0);
    this.todayFoods.updateSumList(pro,1);
    this.todayFoods.updateSumList(carb,2);
    this.todayFoods.updateSumList(fib,3);
    //this.todayFoods.addData(this.uncheckedData[sumIndex]);

  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: FOOD): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

}
