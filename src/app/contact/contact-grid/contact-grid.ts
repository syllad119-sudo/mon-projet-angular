import { Component } from '@angular/core';
import {
  KENDO_GRID,
  CellCloseEvent,
  CreateFormGroupArgs,
  EditEvent,
  RemoveEvent,
  SaveEvent,
  CancelEvent,
} from '@progress/kendo-angular-grid';
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
  editedRowIndex: number | undefined;
  editedFormGroup: FormGroup | undefined;

  createFormGroup(dataItem: Contact): FormGroup {
    return new FormGroup({
      nom: new FormControl(dataItem.nom),
      prenom: new FormControl(dataItem.prenom),
      email: new FormControl(dataItem.email),
      telephone: new FormControl(dataItem.telephone),
      societe: new FormControl(dataItem.societe),
      commentaire: new FormControl(dataItem.commentaire),
    });
  }

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

  editHandler(event: EditEvent): void {
    this.closeEditor(event.sender);
    this.editedRowIndex = event.rowIndex;
    this.editedFormGroup = this.createFormGroup(event.dataItem);
    event.sender.editRow(event.rowIndex, this.editedFormGroup);
  }

  cancelHandler(event: CancelEvent): void {
    this.closeEditor(event.sender, event.rowIndex);
  }

  saveHandler(event: SaveEvent): void {
    if (event.formGroup.valid) {
      Object.assign(this.contacts[event.rowIndex], event.formGroup.value);
      this.contacts = [...this.contacts];
    }
    event.sender.closeRow(event.rowIndex);
    this.editedRowIndex = undefined;
    this.editedFormGroup = undefined;
  }

  removeHandler(event: RemoveEvent): void {
    this.contacts = this.contacts.filter((_, i) => i !== event.rowIndex);
  }

  private closeEditor(grid: any, rowIndex = this.editedRowIndex): void {
    if (rowIndex !== undefined) {
      grid.closeRow(rowIndex);
    }
    this.editedRowIndex = undefined;
    this.editedFormGroup = undefined;
  }
}