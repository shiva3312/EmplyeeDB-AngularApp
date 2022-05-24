import { Component, DoCheck, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { employee } from 'src/app/shared/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit, DoCheck {
 
  employee : any;
  constructor(private empoyeeService : EmployeeService) { }

  ngDoCheck(): void {
    this.employee = this.empoyeeService.selectedEmpoyee;  
  }

  ngOnInit(): void { } 


}
