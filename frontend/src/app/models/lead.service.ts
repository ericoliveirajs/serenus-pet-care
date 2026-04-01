import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Lead } from '../models/lead.model'; // Importando a interface
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeadService {
  private readonly API = `${environment.apiUrl}/leads`;

  constructor(private http: HttpClient) { }

  // Retornamos um Observable de Lead para o componente saber o que esperar
  salvar(lead: Lead): Observable<Lead> {
    return this.http.post<Lead>(this.API, lead);
  }
}