import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

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

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
}
