import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { baseUrl } from 'src/utils';

@Component({
  selector: 'login',
  templateUrl: './editSchool.component.html',
})
export class EditSchool implements OnInit{

  name: string;
  local: string;
  email: string;
  tel: string;
  id: number;

  constructor(private router: Router, private route: ActivatedRoute,  private http: HttpClient) { }

  ngOnInit() {
    if(!localStorage.getItem('token')) {
      this.router.navigate(['/login'])
    }
   this.route.params.subscribe((response: any) => this.id = response.id);
    this.http.get(baseUrl + `/schools/${this.id}`, {headers: {authorization: localStorage.getItem('token') as string}})
    .subscribe((response: any) => {
      this.name = response.name;
      this.local = response.local;
      this.email = response.email;
      this.tel = response.tel;
    });
  }

  onBack() {
    this.router.navigate(['/schools']);
  }

  onSave() {

    const data = {
      name: this.name,
      local: this.local,
      email: this.email,
      tel: this.tel,
    };

    const token = localStorage.getItem('token');

    this.http.put(baseUrl + `/schools/${this.id}`, data, {headers: {authorization: token as string}})
    .subscribe((response) => {
      this.router.navigate(['/schools'])
    },
    error => console.log(error))
  }
}
