import { Contact } from '../models/contact.model';

const CONTACTS_MOCK: Contact[] = [
  {
    nom: 'Sylla',
    prenom: 'David',
    email: 'syllad119@gmail.com',
    telephone: 612345678,
    societe: 'Farms Digital',
    commentaire: 'Client fidèle'
  },
  {
    nom: 'Bah',
    prenom: 'Thierno',
    email: 'bahthierno@gmail.com',
    telephone: 698765432,
    societe: 'Compagnie Fruitiere',
    commentaire: 'Nouveau client'
  }
];

export function getContacts(): Contact[] {
  return CONTACTS_MOCK;
}