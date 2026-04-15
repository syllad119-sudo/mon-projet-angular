import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { KENDO_DIALOGS } from '@progress/kendo-angular-dialog';
import { KENDO_INPUTS} from '@progress/kendo-angular-inputs';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,KENDO_DIALOGS,KENDO_INPUTS,KENDO_BUTTONS],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent implements OnInit {
  @Input() contact: Contact | null = null;
  @Input() isNew = false;
  @Output() save = new EventEmitter<Contact>();
  @Output() cancel = new EventEmitter<void>();

  contactForm!: FormGroup;

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      nom: new FormControl(this.contact?.nom ?? '', [Validators.required, Validators.minLength(2)]),
      prenom: new FormControl(this.contact?.prenom ?? '', [Validators.required, Validators.minLength(2)]),
      email: new FormControl(this.contact?.email ?? '', [Validators.required, Validators.email]),
      telephone: new FormControl(this.contact?.telephone ?? null, [Validators.required, Validators.pattern(/^\d{10}$/)]),
      societe: new FormControl(this.contact?.societe ?? '', Validators.required),
      commentaire: new FormControl(this.contact?.commentaire ?? '', [Validators.required, Validators.minLength(6)]),
    });
  }

  handleSubmit(): void {
    if (this.contactForm.valid) {
      this.save.emit(this.contactForm.value as Contact);
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  onCancel(): void {
    this.cancel.emit();
  }
}