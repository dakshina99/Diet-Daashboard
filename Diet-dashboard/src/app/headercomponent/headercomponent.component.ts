import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-headercomponent',
  templateUrl: './headercomponent.component.html',
  styleUrls: ['./headercomponent.component.css']
})
export class HeadercomponentComponent implements OnInit {

  constructor() { }


  dateTime!: Observable<Date>;
  ngOnInit() {

    // timer(0, 1000).subscribe(() =>{
    //   this.dateTime = new Date()
    // })

    this.dateTime = timer(0, 1000).pipe(
      map(() => {
        return new Date()
      })
    )

  }
}
