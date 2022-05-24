import { Component, DoCheck, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { employee } from 'src/app/shared/employee.model';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {

  employees:employee[]=[];
  constructor(private emplyeeService:EmployeeService) { }

  ngOnInit(): void {     
    this.employees= this.emplyeeService.employees;
  }

}
