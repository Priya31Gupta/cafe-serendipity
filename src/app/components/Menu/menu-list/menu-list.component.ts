import { Component, OnInit } from '@angular/core';
import { APPETIZER, DESSERTS, MAIN_COURSE } from '../../shared/constant';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  apetizerList = APPETIZER;
  mainCourseList = MAIN_COURSE;
  dessertList = DESSERTS;
  constructor() { }

  ngOnInit(): void {
  }

}
