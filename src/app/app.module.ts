import { EditGrade } from '../pages/editGrade/editGrade.component';
import { AddGrade } from './../pages/addGrade/addGrade.component';
import { Grades } from './../pages/grades/grades.component';
import { AddSchool } from './../pages/addSchool/addSchool.component';
import { EditSchool } from './../pages/editSchools/editSchool.component';
import { RouterModule } from '@angular/router';
import { Login } from './../pages/login/login.component';
import { Schools } from './../pages/schools/schools.component';
import { Navbar } from './../components/navbar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Navbar,
    Schools,
    Login,
    EditSchool,
    AddSchool,
    Grades,
    AddGrade,
    EditGrade,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: Schools},
      {path: 'login', component: Login},
      {path: 'edit-school/:id', component: EditSchool},
      {path: 'schools', component: Schools},
      {path: 'add-school', component: AddSchool},
      {path: 'grades', component: Grades},
      {path: 'add-grade', component: AddGrade},
      {path: 'edit-grade/:id', component: EditGrade},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
