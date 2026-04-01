import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LeadService } from '../services/lead.service';

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

  // Injetamos o serviço no construtor
  constructor(private leadService: LeadService) {}

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
    // Agora sim! Chamamos o serviço e damos o .subscribe()
    this.leadService.salvar(this.lead).subscribe({
      next: (res) => {
        console.log('Sucesso! Lead salvo no Supabase:', res);
        alert('Cadastro realizado com sucesso! Entraremos em contato para cuidar do seu pet.');
        // Limpa o formulário após o sucesso
        this.lead = { nome: '', whatsapp: '', nomePet: '' };
      },
      error: (err) => {
        console.error('Erro ao conectar com a API no Render:', err);
        alert('Ops! Ocorreu um erro. Verifique sua conexão.');
      }
    });
  }
}