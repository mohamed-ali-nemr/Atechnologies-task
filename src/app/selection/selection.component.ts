import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent {
  hover = false;

  selectedOption: string = '';  // Initialize with an empty string

  constructor(private router: Router) {}

  selectOption(option: string): void {
    this.selectedOption = option;
  }


  nextStepHandler(): void {
    if (this.selectedOption) {
      // Navigate to the selection page
      this.router.navigate(['/selectionSec']);
    }
  }


  backStepHandler(): void {
    this.router.navigate(['/pre-step']);
  }

}
