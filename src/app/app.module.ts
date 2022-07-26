import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListdeptComponent } from './listdept/listdept.component';
import { FindDeptComponent } from './find-dept/find-dept.component';
import { AddDeptComponent } from './add-dept/add-dept.component';
import { EditDeptComponent } from './edit-dept/edit-dept.component';
import { DeleteDeptComponent } from './delete-dept/delete-dept.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListdeptComponent,
    FindDeptComponent,
    AddDeptComponent,
    EditDeptComponent,
    DeleteDeptComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
