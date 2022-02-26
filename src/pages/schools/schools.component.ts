import { Router } from '@angular/router';
import { Component } from "@angular/core";

@Component({
  selector: 'schools',
  templateUrl: './schools.component.html',
})
export class Schools {

  constructor(private router: Router){}

  onEditSchool(index: number) {
    this.router.navigate([`/edit-school/1`])
  }

  onAddSchool() {
    this.router.navigate(['/add-school'])

  }
}
