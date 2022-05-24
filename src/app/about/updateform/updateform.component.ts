import { Component, DoCheck, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { employee } from 'src/app/shared/employee.model';
@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.css']
})
export class UpdateformComponent implements OnInit ,DoCheck {

  currEmployee :employee ={id:0, firstName:'' , lastName:''};

  constructor(private empoyeeService :EmployeeService) { }

  ngDoCheck(): void {
      this.currEmployee = this.empoyeeService.selectedEmpoyee;
  }

  ngOnInit(): void {  }

  addEmployee(firstName:string , lastName:string){
    const id = this.empoyeeService.selectedId;
    const newEmployee = new employee(id, firstName , lastName);
    this.empoyeeService.updateEmployee(id , newEmployee);
    
  }

 
}
