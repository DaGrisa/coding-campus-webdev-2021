import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService, Employee } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('get employees', () => {
    it('should return 10 initial employees', () => {
      expect(appController.getEmployees()).toHaveLength(10);
    });
  });

  describe('add employee', () => {
    it('should return 11 employees', () => {
      // Arrange
      const newEmployee: Employee = {
        key: 'tst',
        firstName: 'Test',
        lastName: 'User',
        dateOfBirth: (new Date()).toISOString(),
        image: 'images/test.png'
      };

      // Act
      appController.createEmployee(newEmployee);

      // Assert
      expect(appController.getEmployees()).toHaveLength(11);
      expect(appController.getEmployees()).toContain(newEmployee);
    });
  });

  describe('delete employee', () => {
    it('should return 9 employees', () => {
      const employeeToDelete: Employee = {
        key: "jdo",
        firstName: "Joe",
        lastName: "Doe",
        dateOfBirth: "1976-03-08T00:00:00+00:00",
        image: "images/jdo.png"
      };
      appController.deleteEmployee(employeeToDelete.key);
      expect(appController.getEmployees()).toHaveLength(9);
      expect(appController.getEmployees()).not.toContain(employeeToDelete);
    });
  });
});
