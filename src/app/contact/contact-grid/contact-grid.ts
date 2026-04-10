import { Component } from '@angular/core';
import { KENDO_GRID } from '@progress/kendo-angular-grid';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-contact-grid',
  standalone: true,
  imports: [KENDO_GRID],
  templateUrl: './contact-grid.html',
  styleUrl: './contact-grid.scss',
})
export class ContactGrid {

  contacts: Contact[] = [
    {
      nom: 'Sylla',
      prenom: 'David',
      email: 'syllad119@gmail.com',
      telephone: 7827850797,
      societe: 'Farms digital',
      commentaire: 'Client fidèle',
    },
    {
      nom: 'Bah',
      prenom: 'Thierno',
      email: 'bahthierno@gmail.com',
      telephone: 7827850797,
      societe: 'Compagnie Fruitiere',
      commentaire: 'Client fidèle',
    }
  ];

}