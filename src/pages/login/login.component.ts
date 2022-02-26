import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
})
export class Login {

  constructor(private router: Router, private http: HttpClient) { }

  onLogin(event: Event) {
    event.preventDefault();
    this.http.post('http://localhost:3333/login', {email: 'admin@mail.com', password: '123'})
    .subscribe((response: any ) => {
      const token = response.token
      localStorage.setItem('token', token)
    })
    // this.router.navigate(['/schools'])
  }
}
