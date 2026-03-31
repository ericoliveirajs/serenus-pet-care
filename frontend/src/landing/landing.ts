import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './landing.html',
  styleUrls: ['./landing.scss']
})
export class LandingComponent implements OnInit {
  lead = {
    nome: '',
    whatsapp: '',
    nomePet: ''
  };

  petImages = [
    'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&q=80&w=800'
  ];
  currentImageIndex = 0;

  // É esta função que faz o carrossel rodar automaticamente
  ngOnInit() {
    setInterval(() => {
      this.nextImage();
    }, 3000); 
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.petImages.length;
  }

  prevImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.petImages.length) % this.petImages.length;
  }

  onSubmit() {
    console.log('Lead capturado:', this.lead);
    alert('Cadastro realizado com sucesso! Entraremos em contato.');
  }
}