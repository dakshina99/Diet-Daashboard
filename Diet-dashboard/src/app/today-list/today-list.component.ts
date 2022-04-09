import { FOOD } from './../Food';
import { TodayFoodsService } from './../today-foods.service';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-today-list',
  templateUrl: './today-list.component.html',
  styleUrls: ['./today-list.component.css']
})

export class TodayListComponent implements OnInit {
  @Input() type: string | undefined;

  //todayFood = [] as any;
  todayfoods = new TodayFoodsService();
  todayFood = Object.assign(this.todayfoods.getTodayFoods());
  sumList = Object.assign(this.todayfoods.getSumList());

  constructor() {

  }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['select', 'name', 'fat', 'protein', 'carbs', 'fiber'];
  dataSource = new MatTableDataSource<FOOD>(this.todayFood);
  selection = new SelectionModel<FOOD>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
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

  removeSelectedRows() {

    this.selection.selected.forEach((item: any) => {
      let index: number = this.todayFood.findIndex((d: any) => d === item);

      this.todayfoods.removeData(index);
    });
    
    

    this.selection = new SelectionModel<FOOD>(true, []);
    this.dataSource = new MatTableDataSource<FOOD>(this.todayFood);
    this.getsum();
  }

  getsum() {
    let fat = 0;
    let pro = 0;
    let carb = 0;
    let fib = 0;
    this.todayFood.forEach((item: any) => {
      let index: number = this.todayFood.findIndex((d: any) => d === item);
      fat += this.todayFood[index].fat;
      pro += this.todayFood[index].protein;
      carb += this.todayFood[index].carbohydrates;
      fib += this.todayFood[index].fiber;
      console.log(fat);
    });
    this.sumList[0] = fat;
    this.sumList[1] = pro;
    this.sumList[2] = carb;
    this.sumList[3] = fib;
  }


}
