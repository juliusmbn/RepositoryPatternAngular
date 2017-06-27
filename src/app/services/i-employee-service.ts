import { Employee } from '.././models/employee'
export interface IEmployeeService {
    findAll();
    getById();
    add(employee: Employee);
    update();
    delete();
}


 