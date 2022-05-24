import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit  , DoCheck{
  detailStatus: number = 0;
  constructor(private empoyeeService : EmployeeService) { }

  ngDoCheck(): void {
    this.detailStatus = this.empoyeeService.detailStatus;

  }
  ngOnInit(): void {
   
  }

}
