import { Component } from '@angular/core';
import { GridModule } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [GridModule],
  templateUrl: './produit.html',
  styleUrls: ['./produit.scss'], 
})
export class ProduitComponent {
  produits = [
    { nom: 'Ordinateur', prix: 999, stock: 10 },
    { nom: 'Souris', prix: 29, stock: 50 },
    { nom: 'Clavier', prix: 49, stock: 30 },
    { nom: 'Écran', prix: 299, stock: 15 },
  ];
}