import { Injectable } from '@nestjs/common';

export class Employee {
  public key: string;
  public firstName: string;
  public lastName: string;
  public dateOfBirth: string;
  public image: string;
}

@Injectable()
export class AppService {
  employees: Employee[] = [
    {
      key: "jma",
      firstName: "Josef",
      lastName: "Maier",
      dateOfBirth: "2007-08-31T00:00:00+00:00",
      image: "images/jma.png"
    },
    {
        key: "mst",
        firstName: "Maria",
        lastName: "Stadler",
        dateOfBirth: "1998-05-17:00:00+00:00",
        image: "images/mst.png"
    },
    {
        key: "bho",
        firstName: "Bernhard",
        lastName: "Hofer",
        dateOfBirth: "1968-02-28T00:00:00+00:00",
        image: "images/bho.png"
    },
    {
        key: "khu",
        firstName: "Katharina",
        lastName: "Huber",
        dateOfBirth: "1989-07-05T00:00:00+00:00",
        image: "images/khu.png"
    },
    {
        key: "asa",
        firstName: "Ahmed",
        lastName: "Sahin",
        dateOfBirth: "1991-06-13T00:00:00+00:00",
        image: "images/asa.png"
    },
    {
        key: "ool",
        firstName: "Olga",
        lastName: "Olovski",
        dateOfBirth: "1985-11-21T00:00:00+00:00",
        image: "images/ool.png"
    },
    {
        key: "jdo",
        firstName: "Joe",
        lastName: "Doe",
        dateOfBirth: "1976-03-08T00:00:00+00:00",
        image: "images/jdo.png"
    },
    {
        key: "dhe",
        firstName: "Diana",
        lastName: "Heinrich",
        dateOfBirth: "1996-05-18T00:00:00+00:00",
        image: "images/dhe.png"
    },
    {
        key: "fgr",
        firstName: "Franz",
        lastName: "Gruber",
        dateOfBirth: "1976-03-11T00:00:00+00:00",
        image: "images/fgr.png"
    },
    {
        key: "yho",
        firstName: "Yoline",
        lastName: "Hovic",
        dateOfBirth: "2001-09-16T00:00:00+00:00",
        image: "images/yho.png"
    }
  ];

  getEmployees(): Employee[] {
    return this.employees;
  }

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  deleteEmployeeByKey(key: string): void {
    this.employees = this.employees.filter(e => e.key != key);
  }
}
