import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Contact } from './contact/contact/contact';
import { ContactGrid } from './contact/contact-grid/contact-grid';

import { ProduitComponent } from './components/produit/produit'; // ← corrigé

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'contact', component: Contact },
  { path: 'contact-grid', component: ContactGrid },
  { path: 'produits', component: ProduitComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
];
