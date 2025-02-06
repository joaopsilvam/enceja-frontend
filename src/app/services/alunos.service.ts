import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {
  private apiUrl = 'http://localhost:5245/api/alunos'; // URL do backend

  constructor(private http: HttpClient) {}

  getAlunos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
