import { Router, ActivatedRoute } from '@angular/router';
import { Idept } from './../idept';
import { DeptService } from './../dept.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-dept',
  templateUrl: './edit-dept.component.html',
  styleUrls: ['./edit-dept.component.css'],
})
export class EditDeptComponent implements OnInit {
  deptdata: Idept = { id: 0, name: '', location: '' };
  id: number = 0;

  constructor(
    private deptservice: DeptService,
    private activateroute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const tid = this.activateroute.snapshot.paramMap.get('id');
    this.id = Number(tid);
    this.deptservice.getDept(this.id).subscribe((data: Idept) => {
      this.deptdata = data;
    });
  }
  saveDept(dept: Idept) {
    this.deptservice.editDept(this.deptdata).subscribe(() => {
      alert('Record edited Successfully');
      this.router.navigate(['/list']);
    });
  }
}
