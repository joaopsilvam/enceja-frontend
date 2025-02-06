# 📌 Painel de Gestão Escolar - Frontend

Este repositório contém o código-fonte do **Painel de Gestão Escolar**, uma aplicação Angular baseada no **Argon Dashboard Angular**. O projeto permite o gerenciamento de alunos, incluindo autenticação, listagem, métricas e progresso individual.

## 🚀 Tecnologias Utilizadas
- **Angular** (Framework principal)
- **TypeScript** (Linguagem)
- **Bootstrap 4** (Estilização)
- **NgBootstrap** (Componentes visuais)
- **FontAwesome / Argon Icons** (Ícones)
- **JWT (JSON Web Token)** (Autenticação)
- **REST API** (Integração com o backend em .NET)

## 📂 Estrutura do Projeto
```
frontend/
├── src/
│   ├── app/
│   │   ├── components/      # Componentes reutilizáveis
│   │   ├── pages/           # Páginas principais do sistema
│   │   ├── services/        # Serviços de API e autenticação
│   │   ├── guards/          # Proteção de rotas
│   │   ├── layouts/         # Estruturas do painel (admin/auth)
│   │   ├── app-routing.module.ts # Rotas da aplicação
│   │   ├── app.component.ts # Componente raiz
│   │   ├── app.module.ts    # Módulo principal do Angular
│   ├── assets/              # Imagens e arquivos estáticos
│   ├── environments/        # Configuração de ambiente
│   ├── index.html           # Página HTML principal
│   ├── styles.scss          # Estilização global
├── angular.json             # Configuração do Angular CLI
├── package.json             # Dependências do projeto
├── README.md                # Documentação do projeto
```

## 🎯 Funcionalidades Principais
✅ **Autenticação JWT** com proteção de rotas  
✅ **Listagem de alunos** com imagens dinâmicas  
✅ **Dashboard de métricas** (Total de alunos, ativos/inativos, pendências e progresso)  
✅ **Edição e exclusão de alunos** via dropdown  
✅ **Estilização responsiva** baseada no **Argon Dashboard**  

## ⚡ Instalação e Execução
### **1️⃣ Pré-requisitos**
Certifique-se de ter instalado:
- **Node.js** (v16 ou superior)
- **Angular CLI**
- **Git**

### **2️⃣ Clonar o Repositório**
```sh
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### **3️⃣ Instalar Dependências**
```sh
npm install
```

### **4️⃣ Configurar o Ambiente**
Edite o arquivo `src/environments/environment.ts` com a URL correta da API:
```ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:5000/api'
};
```

### **5️⃣ Rodar o Projeto**
```sh
ng serve
```
Acesse: **http://localhost:4200**

## 🔑 Autenticação
O sistema utiliza **JWT** para autenticação. Após o login, o token é armazenado e utilizado em todas as requisições.

## 📌 Endpoints da API
- **`POST /auth/login`** → Autenticação
- **`GET /alunos`** → Listagem de alunos
- **`GET /alunos/{id}`** → Detalhes de um aluno
- **`PUT /alunos/{id}`** → Atualizar informações do aluno
- **`DELETE /alunos/{id}`** → Remover aluno

## 🛠 Melhorias Futuras
- 📌 Implementação de filtros na listagem de alunos
- 📌 Exportação de dados em **PDF/Excel**
- 📌 Notificações sobre pendências acadêmicas

## 👨‍💻 Contribuição
1. Faça um **fork** do projeto
2. Crie uma **branch** (`git checkout -b feature/nova-feature`)
3. Faça o **commit** (`git commit -m 'Adicionando nova feature'`)
4. Faça o **push** (`git push origin feature/nova-feature`)
5. Abra um **Pull Request**

## 📄 Licença
Este projeto é de código aberto e está sob a licença **MIT**.
