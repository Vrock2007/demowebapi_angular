import { FindDeptComponent } from './find-dept/find-dept.component';
import { AddDeptComponent } from './add-dept/add-dept.component';
import { DeleteDeptComponent } from './delete-dept/delete-dept.component';
import { EditDeptComponent } from './edit-dept/edit-dept.component';
import { ListdeptComponent } from './listdept/listdept.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'add', component: AddDeptComponent },
  { path: 'list', component: ListdeptComponent },
  { path: 'edit/:id', component: EditDeptComponent },
  { path: 'find/:id', component: FindDeptComponent },
  { path: 'delete/:id', component: DeleteDeptComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
