import { baseUrl } from 'src/utils';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'grades',
  templateUrl: './grades.component.html',
})
export class Grades implements OnInit{

  gradesList: any
  constructor(private router: Router, private http: HttpClient){}

  ngOnInit() {
    if(!localStorage.getItem('token')) {
      this.router.navigate(['/login'])
    }

    this.http.get(baseUrl + '/grades', {headers: {authorization: localStorage.getItem('token') as string}})
    .subscribe((response) => this.gradesList = response)
  }

  onEditGrade(id: number) {
    this.router.navigate([`/edit-grade/${id}`])
  }

  onAddGrade() {
    this.router.navigate(['/add-grade'])
  }
}
