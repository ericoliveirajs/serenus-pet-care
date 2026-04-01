import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Lead } from '../app/models/lead.model';

@Injectable({ providedIn: 'root' })
export class LeadService {
  private readonly API = `${environment.apiUrl}/leads`;

  constructor(private http: HttpClient) {}

  salvar(lead: Lead) {
    return this.http.post<Lead>(this.API, lead);
  }
}