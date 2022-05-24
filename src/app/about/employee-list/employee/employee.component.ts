import { Component, OnInit , Input } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { employee } from 'src/app/shared/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @Input() selectedId : number = 0;
  @Input() employee:employee = {id:0, firstName:'' , lastName:''};
  ngOnInit(): void { }
  constructor(private empoyeeService: EmployeeService){}
  
  selectEmpoyee( emp: employee){
    this.empoyeeService.detailStatus = 1;
    this.empoyeeService.selectedEmpoyee = emp;
  }

  editEmpoyee(emp:employee){
    this.empoyeeService.detailStatus = 2;    
    this.empoyeeService.selectedId = emp.id;
    this.empoyeeService.selectedEmpoyee= emp;
    console.log(emp);
    
  }
}
