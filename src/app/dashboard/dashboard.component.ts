import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '.././services/employee.service';
import { Employee } from '../models/employee';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[EmployeeService]
})
export class DashboardComponent implements OnInit {

  employees:Employee[];
  employeeForm: FormGroup;

  constructor(
    private _employeeService: EmployeeService,
    private _fb: FormBuilder
    ) { 
      this.createForm();
  }

  ngOnInit() {
    this.findAll();
  }

  createForm(){
    this.employeeForm = this._fb.group(
      {
        firstName:['', Validators.required],
        lastName:['', Validators.required]
      }
    );
  }

  onSubmit(){    
    if(this.employeeForm.valid){      
      let f = this.employeeForm.value;  
      this._employeeService.add(f); 
    }
  }

  findAll(){
    this.employees = this._employeeService.findAll();
    console.log(this.employees);
  }

}
