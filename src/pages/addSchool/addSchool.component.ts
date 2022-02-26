import { HttpClient } from '@angular/common/http';
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { baseUrl } from 'src/utils';

@Component({
  selector: 'login',
  templateUrl: './addSchool.component.html',
})
export class AddSchool {
  name: string;
  local: string;
  email: string;
  tel: string;

  constructor(private router: Router, private http: HttpClient) { }

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
    console.log(data)

    this.http.post(baseUrl + '/schools', data, {headers: {authorization: token as string}})
    .subscribe((response) => {
      this.router.navigate(['/schools'])
    },
    error => console.log(error));

  }
}
