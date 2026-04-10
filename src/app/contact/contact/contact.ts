import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactService } from '../../services/contact.service';
import { Contact as ContactModel } from '../../models/contact.model'; //  renommé

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
})
export class Contact implements OnInit {  //  classe s'appelle Contact

  contactForm!: FormGroup;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contactForm = this.contactService.buildContactForm();
  }

  handleSubmit() {
    if (this.contactForm.valid) {
      const contact: ContactModel = this.contactForm.value; //  ContactModel
      this.contactService.handleContact(contact);
      alert('Message envoyé avec succès !');
      this.contactForm.reset();
    } else {
      alert('Veuillez remplir tous les champs correctement.');
    }
  }
}