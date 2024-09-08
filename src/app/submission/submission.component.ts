import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent {

  constructor(private router: Router) {}

  backStepHandler(): void {
    this.router.navigate(['/probSec']);
  }

  nextStepHandler(): void {
    // Navigate to the selection page
    this.router.navigate(['/submissionSec']);
  }

}
