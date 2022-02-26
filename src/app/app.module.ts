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

@NgModule({
  declarations: [
    AppComponent,
    Navbar,
    Schools,
    Login,
    EditSchool,
    AddSchool,
    Grades,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'login', component: Login},
      {path: 'edit-school/:id', component: EditSchool},
      {path: 'schools', component: Schools},
      {path: 'add-school', component: AddSchool},
      {path: 'grades', component: Grades},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
