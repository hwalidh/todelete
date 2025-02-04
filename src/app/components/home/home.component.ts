import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Import des sections
import { HeroComponent } from './sections/hero/hero.component';
import { PresentationComponent } from './sections/presentation/presentation.component';
import { AboutComponent } from './sections/about/about.component';
import { ServicesOverviewComponent } from './sections/services-overview/services-overview.component';
import { TravelPackComponent } from './sections/travel-pack/travel-pack.component';
import { BusinessPackComponent } from './sections/business-pack/business-pack.component';
import { SerenityPackComponent } from './sections/serenity-pack/serenity-pack.component';
import { TestimonialsComponent } from './sections/testimonials/testimonials.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeroComponent,
    PresentationComponent,
    AboutComponent,
    ServicesOverviewComponent,
    TravelPackComponent,
    BusinessPackComponent,
    SerenityPackComponent,
    TestimonialsComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}