import { employee } from "./shared/employee.model";
export class EmployeeService{

    employees: employee[] = [new employee(0,'shivam' , 'chaurasiya')];
    detailStatus :number = 0;
    selectedEmpoyee :employee ={id:0 , firstName:'' , lastName:''}
    selectedId:number =0;
    addEmployee(newEmp : employee){
        this.employees.push(newEmp);
    }

    updateEmployee(id:number , newEmpoyee : employee){
        this.employees.forEach((e, index)=>{
            if(e.id === id){
                this.employees.splice(id, 1);
            }
        });       
        this.employees.push(newEmpoyee);
    }
}