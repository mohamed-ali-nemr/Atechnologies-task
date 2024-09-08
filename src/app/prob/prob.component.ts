import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prob',
  templateUrl: './prob.component.html',
  styleUrls: ['./prob.component.css'],
})
export class ProbComponent {
  constructor(private router: Router) {}

  backStepHandler(): void {
    this.router.navigate(['/selectionSec']);
  }

  nextStepHandler(): void {
    // Navigate to the selection page
    this.router.navigate(['/probSec']);
  }
}
