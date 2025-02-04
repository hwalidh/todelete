import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalComponent } from '../../shared/modal/modal.component';
import { OfferConfig, FeatureGroup } from '../../../models/offer.model';

@Component({
  selector: 'app-offer-modal',
  standalone: true,
  imports: [CommonModule, RouterModule, ModalComponent],
  templateUrl: './offer-modal.component.html',
  styles: [`
    :host {
      display: contents;
    }

    .modal-content {
      @apply max-w-2xl mx-auto;
    }

    .feature-list {
      @apply space-y-3;
      
      li {
        @apply flex items-center text-gray-700;
        
        &:hover {
          @apply text-violet-600;
        }
      }
    }
  `]
})
export class OfferModalComponent {
  @Input() offer!: OfferConfig;
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

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