import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreStepComponent } from './pre-step/pre-step.component';
import { SelectionComponent } from './selection/selection.component';
import { SelectionSecComponent } from './selection-sec/selection-sec.component';
import { ProbComponent } from './prob/prob.component';
import { ProbSecComponent } from './prob-sec/prob-sec.component';
import { SubmissionComponent } from './submission/submission.component';
import { SubmissionSecComponent } from './submission-sec/submission-sec.component';

const routes: Routes = [
  { path: 'pre-step', component: PreStepComponent },
  { path: 'selection', component: SelectionComponent },
  { path: 'selectionSec', component: SelectionSecComponent },
  { path: 'prob', component: ProbComponent },
  { path: 'probSec', component: ProbSecComponent },
  { path: 'submission', component: SubmissionComponent },
  { path: 'submissionSec', component: SubmissionSecComponent },

  { path: '', redirectTo: 'pre-step', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
