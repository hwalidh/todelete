import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    {
      icon: '🚀',
      title: 'Gestion Qui Déchire',
      description: 'On booste tes revenus comme jamais !',
      features: [
        'Annonces qui cartonnent avec l\'IA',
        'Prix qui s\'adaptent en temps réel',
        'Visibilité max sur tous les sites',
        'Photos qui font rêver'
      ]
    },
    {
      icon: '✨',
      title: 'Service Royal',
      description: 'Tes voyageurs vont kiffer grave !',
      features: [
        'Accueil VIP personnalisé',
        'Ménage de compét\'',
        'On répond plus vite que l\'éclair',
        'Maintenance express'
      ]
    },
    {
      icon: '🛡️',
      title: 'Protection de Ouf',
      description: 'Dors sur tes deux oreilles !',
      features: [
        'Loyer garanti dans ta poche',
        'Assurance béton',
        'On anticipe tout',
        'État des lieux nickel'
      ]
    },
    {
      icon: '📈',
      title: 'Revenus Boostés',
      description: 'On fait péter le compteur !',
      features: [
        'Analyse du marché aux petits oignons',
        'Prix optimisés à fond',
        'Stats qui claquent',
        'Conseils de pro'
      ]
    },
    {
      icon: '🎯',
      title: 'Flex Max',
      description: 'La liberté, c\'est la base !',
      features: [
        'Zéro prise de tête',
        'Tu choisis ce qui te va',
        'Change quand tu veux',
        'On s\'adapte à toi'
      ]
    },
    {
      icon: '💪',
      title: 'Solutions Business',
      description: 'Pour les boss de l\'investissement !',
      features: [
        'Gestion multi-biens de fou',
        'Stratégie sur mesure',
        'Optimisation fiscale au top',
        'On gère tout ton empire'
      ]
    }
  ];

  additionalFeatures = [
    {
      icon: '⚡️',
      title: 'Ultra Speed',
      description: 'Plus rapide que ton ombre : réponse en 15min max !'
    },
    {
      icon: '🌟',
      title: 'Qualité Premium',
      description: 'On fait pas les choses à moitié, que du lourd !'
    },
    {
      icon: '🤝',
      title: 'Support de Ouf',
      description: 'Une équipe de choc H24 à ton service !'
    }
  ];
}