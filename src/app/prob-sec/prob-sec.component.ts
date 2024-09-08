import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prob-sec',
  templateUrl: './prob-sec.component.html',
  styleUrls: ['./prob-sec.component.css']
})
export class ProbSecComponent {

  constructor(private router: Router) {}

  backStepHandler(): void {
    this.router.navigate(['/prob']);
  }

  nextStepHandler(): void {
    // Navigate to the selection page
    this.router.navigate(['/submission']);
  }

}
