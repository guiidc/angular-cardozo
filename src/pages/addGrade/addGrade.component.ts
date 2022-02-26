import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { baseUrl } from 'src/utils';

@Component({
  selector: 'login',
  templateUrl: './addGrade.component.html',
})
export class AddGrade implements OnInit {
  grade: string;
  number_students: number;
  school_id: number;
  schoolsList: any;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    if(!localStorage.getItem('token')) {
      this.router.navigate(['/login'])
    }

    this.http.get(baseUrl + '/schools', {headers: {authorization: localStorage.getItem('token') as string}})
    .subscribe((response) => this.schoolsList = response)
  }

  onSelectSchool(event:any) {
    this.school_id = parseInt(event.target.value);
  }


  onBack() {
    this.router.navigate(['/grades']);
  }

  onSave() {
    const data = {
      grade: this.grade,
      number_students: this.number_students,
      school_id: this.school_id,
    };

    const token = localStorage.getItem('token');

    this.http.post(baseUrl + '/grades', data, {headers: {authorization: token as string}})
    .subscribe((response) => {
      this.router.navigate(['/grades'])
    },
    error => console.log(error));

  }
}
