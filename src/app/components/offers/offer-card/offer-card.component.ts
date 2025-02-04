import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OfferConfig, FeatureGroup } from '../../../models/offer.model';

@Component({
  selector: 'app-offer-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss']
})
export class OfferCardComponent {
  @Input() offer!: OfferConfig;
  @Output() select = new EventEmitter<void>();

  protected isSimpleFeatures(features: string[] | FeatureGroup[]): features is string[] {
    if (!Array.isArray(features)) return false;
    return features.length === 0 || typeof features[0] === 'string';
  }

  protected isFeatureGroups(features: string[] | FeatureGroup[]): features is FeatureGroup[] {
    if (!Array.isArray(features)) return false;
    return features.length === 0 || (typeof features[0] === 'object' && 'name' in features[0]);
  }

  protected getFeatures(features: string[] | FeatureGroup[]): string[] {
    return this.isSimpleFeatures(features) ? features : [];
  }

  protected getFeatureGroups(features: string[] | FeatureGroup[]): FeatureGroup[] {
    return this.isFeatureGroups(features) ? features : [];
  }
}