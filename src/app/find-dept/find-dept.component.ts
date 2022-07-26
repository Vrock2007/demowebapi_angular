import { DeptService } from './../dept.service';
import { Idept } from './../idept';
import { Component, OnInit } from '@angular/core';
// FindDept/id   to fetch data from another component
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-find-dept',
  templateUrl: './find-dept.component.html',
  styleUrls: ['./find-dept.component.css'],
})
export class FindDeptComponent implements OnInit {
  deptdata: Idept = { id: 0, name: '', location: '' };
  id: number = 0;
  constructor(
    private deptservice: DeptService,
    private activateroute: ActivatedRoute
  ) {}
  // capture the id in the URL
  ngOnInit(): void {
    const tid = this.activateroute.snapshot.paramMap.get('id');
    this.id = Number(tid); //convert into number and then store it
    this.deptservice.getDept(this.id).subscribe((data: Idept) => {
      this.deptdata = data;
    });
  }
}
