import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { baseUrl } from "src/utils";


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
})
export class Login {
  email = '';
  password = '';
  error = ''

  constructor(private router: Router, private http: HttpClient ) { }

  onLogin(event: Event) {
    event.preventDefault();
    this.error = '';
    this.http.post(baseUrl + '/login', {email: this.email, password: this.password})
    .subscribe((response: any ) => {
      const token = response.token
      localStorage.setItem('token', token)
      this.router.navigate(['/schools'])
    }, (error) => {
      this.error = error.error.message
    })
  }
}
