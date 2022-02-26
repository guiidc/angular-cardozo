import { Router } from '@angular/router';
import { Component } from "@angular/core";

@Component({
  selector: 'grades',
  templateUrl: './grades.component.html',
})
export class Grades {

  constructor(private router: Router){}

  onEditSchool(index: number) {
    this.router.navigate([`/edit-school/1`])
  }

  onAddSchool() {
    this.router.navigate(['/add-school'])

  }
}
