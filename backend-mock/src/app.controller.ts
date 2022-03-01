import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { AppService, Employee } from './app.service';

@Controller('employees')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getEmployees(): Employee[] {
    return this.appService.getEmployees();
  }

  @Post()
  createEmployee(@Body() employee: Employee): void {
    this.appService.addEmployee(employee);
  }

  @Delete()
  deleteEmployee(@Query() params: any) {
    this.appService.deleteEmployeeByKey(params.key);
  }
}
