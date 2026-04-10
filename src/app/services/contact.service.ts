import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactService {

  public buildContactForm(): FormGroup {
    return new FormGroup({
      nom:        new FormControl('', [Validators.required, Validators.minLength(2)]),
      prenom:     new FormControl('', [Validators.required, Validators.minLength(2)]),
      email:      new FormControl('', [Validators.required, Validators.email]),
      telephone:  new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      societe:    new FormControl('', [Validators.required]),
      commentaire:new FormControl('', [Validators.required, Validators.minLength(10)]),
    });
  }

  public handleContact(contact: Contact): void {
    console.log('Contact envoyé :', contact);
  }
}