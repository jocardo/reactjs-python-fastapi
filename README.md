# Projeto Fullstack de Busca de Filmes

Este projeto consiste em uma aplicação Fullstack para buscar filmes usando uma API pública. O backend é desenvolvido em FastAPI e o frontend em ReactJS, com persistência em MongoDB.

## Funcionalidades

- **Página de Busca**: Permite que o usuário busque por filmes informando o seu nome e o nome do filme.
- **Página de Histórico**: Exibe uma lista de todas as buscas realizadas, com o nome do usuário, o filme pesquisado e a data/hora da busca.

## Estrutura do Projeto

- **Backend**: Implementado em Python com FastAPI, responsável por realizar consultas à API pública e registrar o histórico de buscas em MongoDB.
- **Frontend**: Implementado em ReactJS, responsável por permitir ao usuário fazer buscas e visualizar o histórico.

## Tecnologias Utilizadas

- **Backend**: FastAPI, MongoDB, Docker
- **Frontend**: ReactJS, Docker

## Pré-requisitos

- [Docker](https://www.docker.com/) instalado.

## Configuração do Projeto

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seuusuario/seurepositorio.git
   cd seurepositorio


## Configuração do Projeto na IDE VS Code

1. **Baixar node.js**

2. **Baixar python 3.x**

2. **instalar e configurar venv**
   ```bash
   cd backend
   python -m venv venv
   venv\Scripts\activate
   pip install -r requirements.txt
   uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload

2. **instalar e configurar npm**
   ```bash
   npx create-react-app frontend
   cd frontend
   npm start

5. **Baixar extensões**
   Python
   Python Debugger
   ReactJS
   JavaScript Debugger
   MongoDB for VS Code
   Docker

6. **iniciando banco de dados**;
   ```bash
   docker run -d -p 27017:27017 --name mongodb mongo:4.4



## Integração com Swagger (FastAPI)
   O FastAPI já vem com a integração do Swagger UI, que fornece uma interface interativa para testar e explorar os endpoints da API.
   Após iniciar o backend, você pode acessar o Swagger UI no seguinte endereço: 
   ```bash
   http://localhost:8000/docs
   ```
   Esta interface permite que você visualize todos os endpoints disponíveis, faça requisições diretamente do navegador e veja os resultados. Além disso, o FastAPI também disponibiliza uma documentação alternativa via Redoc.
   
   Essas ferramentas são extremamente úteis para testes rápidos e para entender melhor o comportamento da API sem a necessidade de escrever código adicional de testes.