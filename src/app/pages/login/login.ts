import { LoginService } from './../../services/login';
import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule ,ReactiveFormsModule, HttpClientModule ],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})

export class Login {
  // private toastr: ToastrService,
  constructor(private loginService: LoginService) {}
  // Validation des inputs
  profileForm!:FormGroup;

  // Recuperation et Affichage du Json
  ngOnInit() {
    
    this.profileForm = this.loginService.buildForm();
  }
  //Soumission et Recuperation des Valeurs des inputs
  handleSubmit() {
    const email = this.profileForm.value.email;
    const password = this.profileForm.value.password;

    const validForm:boolean= this.loginService.checkLogin(email, password);

    if (validForm) {alert ('connexion reussie ')

    }else { alert ('Verifier vos donnees')

    }
  }
}
