import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from 'src/Components/landing-page/landing-page.component';
import { SentimentDetailComponent } from 'src/Components/sentiment-detail/sentiment-detail.component';

const routes: Routes = [  
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'sentiment/:quote',
    component: SentimentDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
