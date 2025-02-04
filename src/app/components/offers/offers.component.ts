import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OfferCardComponent } from './offer-card/offer-card.component';
import { OfferModalComponent } from './offer-modal/offer-modal.component';
import { OFFERS_CONFIG } from '../../data/offers.config';
import { OfferConfig } from '../../models/offer.model';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [CommonModule, RouterModule, OfferCardComponent, OfferModalComponent],
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent {
  offers = OFFERS_CONFIG;
  selectedOffer: OfferConfig | null = null;

  openOfferModal(offer: OfferConfig) {
    this.selectedOffer = offer;
  }

  closeOfferModal() {
    this.selectedOffer = null;
  }
}