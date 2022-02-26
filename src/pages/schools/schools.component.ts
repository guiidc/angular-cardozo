import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { baseUrl } from 'src/utils';


@Component({
  selector: 'schools',
  templateUrl: './schools.component.html',
})
export class Schools implements OnInit {

  schoolsList: any
  constructor(private router: Router, private http: HttpClient){}

  ngOnInit() {
    if(!localStorage.getItem('token')) {
      this.router.navigate(['/login'])
    }

    this.http.get(baseUrl + '/schools', {headers: {authorization: localStorage.getItem('token') as string}})
    .subscribe((response) => this.schoolsList = response)
  }

  onEditSchool(id: number) {
    this.router.navigate([`/edit-school/${id}`])
  }

  onAddSchool() {
    this.router.navigate(['/add-school'])

  }
}
