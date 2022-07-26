import { DeptService } from './../dept.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listdept',
  templateUrl: './listdept.component.html',
  styleUrls: ['./listdept.component.css'],
})
export class ListdeptComponent implements OnInit {
  deptlist: any[] = [];
  // inject service in constructor
  constructor(private deptservice: DeptService) {
    this.deptservice.getDeptList().subscribe((data) => {
      this.deptlist = data;
    });
  }

  ngOnInit(): void {}
}
