import { Controller, Delete, Get, Post } from '@nestjs/common';
import { AppService, Employee } from './app.service';

@Controller('employees')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getEmployees(): Employee[] {
    return this.appService.getEmployees();
  }

  @Post()
  createEmployee(employee: Employee): void {
    this.appService.addEmployee(employee);
  }

  @Delete()
  deleteEmployee(key: string){
    this.appService.deleteEmployeeByKey(key);
  }
}
