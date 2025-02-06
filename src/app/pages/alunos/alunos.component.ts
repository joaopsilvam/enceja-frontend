import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent implements OnInit {
  alunos: any[] = [];
  totalAlunos: number = 0;
  alunosAtivos: number = 0;
  alunosInativos: number = 0;
  alunosPendentes: number = 0;
  progressoMedio: number = 0;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.carregarAlunos();
  }

  carregarAlunos(): void {
    const token = localStorage.getItem('token'); // Pegando o token salvo no login
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    this.http.get<any[]>('http://localhost:5245/api/alunos', { headers }) // Ajuste a URL da API
      .subscribe(
      (data) => {
        this.alunos = data;

        // Atualizando métricas
        this.totalAlunos = this.alunos.length;
        this.alunosAtivos = this.alunos.filter(aluno => aluno.status === 'ativo').length;
        this.alunosInativos = this.alunos.filter(aluno => aluno.status === 'inativo').length;
        this.alunosPendentes = this.alunos.filter(aluno => aluno.pendencias && aluno.pendencias.length > 0).length;

        // Calculando progresso médio dos alunos (considerando um campo 'progresso' em %)
        const progressoTotal = this.alunos.reduce((sum, aluno) => sum + (aluno.progresso || 0), 0);
        this.progressoMedio = this.totalAlunos > 0 ? Math.round(progressoTotal / this.totalAlunos) : 0;
      },
      (error) => {
        console.error('Erro ao buscar alunos:', error);
      }
    );
  }
}
