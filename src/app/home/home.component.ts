import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { employee } from '../shared/employee.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private empoyeeService :EmployeeService) { }

  ngOnInit(): void {
  }

  addEmployee(firstName:string , lastName:string){
    const id = this.empoyeeService.employees.length;
    const newEmployee = new employee(id,firstName , lastName );
    this.empoyeeService.addEmployee(newEmployee);
    
  }


}
