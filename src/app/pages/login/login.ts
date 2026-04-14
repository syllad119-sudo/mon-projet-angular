import { LoginService } from './../../services/login';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router,
    private toastr: ToastrService   // 👈 ajout
  ) {}

  profileForm!: FormGroup;

  ngOnInit() {
    this.profileForm = this.loginService.buildForm();
  }

  handleSubmit() {
    const email = this.profileForm.value.email;
    const password = this.profileForm.value.password;

    const validForm: boolean = this.loginService.checkLogin(email, password);

    if (validForm) {

      // 🔔 toast succès
      this.toastr.success('Connexion réussie', 'Bienvenue 👋');

      // 🔁 redirection vers contact-grid
      this.router.navigate(['/contact-grid']);

    } else {

      // 🔔 toast erreur
      this.toastr.error('Email ou mot de passe incorrect');

    }
  }
}