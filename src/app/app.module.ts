import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreStepComponent } from './pre-step/pre-step.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectionComponent } from './selection/selection.component';
import { SelectionSecComponent } from './selection-sec/selection-sec.component';
import { ProbComponent } from './prob/prob.component';
import { ProbSecComponent } from './prob-sec/prob-sec.component';
import { SubmissionComponent } from './submission/submission.component';
import { SubmissionSecComponent } from './submission-sec/submission-sec.component';



@NgModule({
  declarations: [
    AppComponent,
    PreStepComponent,
    SelectionComponent,
    SelectionSecComponent,
    ProbComponent,
    ProbSecComponent,
    SubmissionComponent,
    SubmissionSecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
