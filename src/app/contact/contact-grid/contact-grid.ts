import { Component } from '@angular/core';
import { KENDO_GRID, CellCloseEvent, CreateFormGroupArgs } from '@progress/kendo-angular-grid';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Contact } from '../../models/contact.model';
import { getContacts } from '../../mocks/contact.mock';

@Component({
  selector: 'app-contact-grid',
  standalone: true,
  imports: [KENDO_GRID, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact-grid.html',
  styleUrl: './contact-grid.scss',
})
export class ContactGrid {
  contacts: Contact[] = getContacts();

  createFormGroup = (args: CreateFormGroupArgs): FormGroup => {
    const dataItem = args.dataItem as Contact;
    return new FormGroup({
      nom: new FormControl(dataItem.nom),
      prenom: new FormControl(dataItem.prenom),
      email: new FormControl(dataItem.email),
      telephone: new FormControl(dataItem.telephone),
      societe: new FormControl(dataItem.societe),
      commentaire: new FormControl(dataItem.commentaire),
    });
  };

  addContact(): void {
    const nouveau: Contact = {
      nom: '',
      prenom: '',
      email: '',
      telephone: 0,
      societe: '',
      commentaire: '',
    };
    this.contacts = [nouveau, ...this.contacts];
  }

  saveContact(event: CellCloseEvent): void {
    const { dataItem, formGroup } = event;
    if (formGroup?.valid) {
      Object.assign(dataItem, formGroup.value);
    }
  }

  removeContact(index: number): void {
    this.contacts = this.contacts.filter((_, i) => i !== index);
  }
}
