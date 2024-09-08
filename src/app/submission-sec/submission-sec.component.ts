import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submission-sec',
  templateUrl: './submission-sec.component.html',
  styleUrls: ['./submission-sec.component.css']
})
export class SubmissionSecComponent {

  constructor(private router: Router) {}

  backStepHandler(): void {
    this.router.navigate(['/submission']);
  }

  nextStepHandler(): void {
    // Navigate to the selection page
    this.router.navigate(['/']);
  }

}
