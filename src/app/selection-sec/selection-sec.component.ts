import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selection-sec',
  templateUrl: './selection-sec.component.html',
  styleUrls: ['./selection-sec.component.css'],
})
export class SelectionSecComponent {
  selectedOption: string = ''; // Initialize with an empty string

  constructor(private router: Router) {}

  selectOption(option: string): void {
    this.selectedOption = option;
  }
  backStepHandler(): void {
    this.router.navigate(['/selection']);
  }

  nextStepHandler(): void {
    if (this.selectedOption) {
      // Navigate to the selection page
      this.router.navigate(['/prob']);
    }
  }
}
