import { Contact } from '../models/contact.model';
import contactData from '../../assets/contact.json';

export function getContacts(): Contact[] {
  return contactData.contacts as Contact[];
}