import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { baseUrl } from 'src/utils';

@Component({
  selector: 'login',
  templateUrl: './editGrade.component.html',
})
export class EditGrade implements OnInit {
  grade: string;
  number_students: number;
  school_id: number;
  schoolsList: any;
  id: number;

  constructor(private router: Router, private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    if(!localStorage.getItem('token')) {
      this.router.navigate(['/login'])
    }

    this.http.get(baseUrl + '/schools', {headers: {authorization: localStorage.getItem('token') as string}})
    .subscribe((response) => this.schoolsList = response);

    this.route.params.subscribe((response: any) => this.id = response.id);
    this.http.get(baseUrl + `/grades/${this.id}`, {headers: {authorization: localStorage.getItem('token') as string}})
    .subscribe((response: any) => {
      this.grade = response.grade;
      this.number_students = response.number_students;
      this.school_id = response.school_id;
    });

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
