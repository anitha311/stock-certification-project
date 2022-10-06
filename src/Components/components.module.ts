import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SentimentDetailComponent } from './sentiment-detail/sentiment-detail.component';
import { FormsModule } from '@angular/forms';
import { CurrentQuoteComponent } from './current-quote/current-quote.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    SentimentDetailComponent,
    CurrentQuoteComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComponentsModule { }
