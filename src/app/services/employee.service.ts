import { Injectable } from '@angular/core';
import { IEmployeeService } from './i-employee-service';
import { Employee } from '.././models/employee';
@Injectable()
export class EmployeeService implements IEmployeeService{

  constructor() { }

  findAll(): Employee[]{
    

    return [
      { id:1,FirstName:'Julius', LastName:'Bacosa'},
      { id:2,FirstName:'Elvira', LastName:'Bacosa'},
      { id:3,FirstName:'Roberto', LastName:'Bacosa'}
    ];
  }
  getById(){

  }
  add(employee: Employee){
    console.log(employee);
  }

  update(){

  }
  delete(){

  }
  

}
