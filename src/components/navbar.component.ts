import { Router } from '@angular/router';
import { Component } from "@angular/core";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
})
export class Navbar {

  constructor(private router: Router) {}

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
