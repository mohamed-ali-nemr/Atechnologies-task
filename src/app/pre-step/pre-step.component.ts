import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pre-step',
  templateUrl: './pre-step.component.html',
  styleUrls: ['./pre-step.component.css'],
})
export class PreStepComponent {
  selectedOption: string = '';  // Initialize to an empty string or a default value

constructor(private router: Router) {}

  selectOption(option: string): void {
    this.selectedOption = option;
  }

  nextStepHandler(): void {
    if (this.selectedOption) {
      // Navigate to the selection page
      this.router.navigate(['/selection']);
    }
  }
}
