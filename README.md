# 📦 Desafio Técnico: API de Gerenciamento de Pedidos 

Este repositório contém a solução para o desafio técnico de desenvolvimento de uma API RESTful utilizando Node.js e JavaScript. O objetivo principal é o gerenciamento de pedidos, incluindo a persistência de dados em um banco de dados e a transformação (mapping) de campos entre a requisição e o armazenamento.
---

## 👨‍💻 Sobre Mim
Olá! Meu nome é Marcio. Sou um desenvolvedor em constante aprendizado, apaixonado por tecnologia e focado em construir soluções eficientes e bem estruturadas.
Neste projeto, busquei aplicar as melhores práticas de organização de código, utilizando o padrão *MVC (Model-View-Controller)* para garantir que a aplicação seja escalável e de fácil manutenção.

**LinkedIn:** [\[Link Marcio Valadares\]](https://www.linkedin.com/in/macvaljunior/)

**GitHub:** [\[Seu perfil do GitHub Marcio Valadares\]](https://github.com/macjuniior)
---

## 🚀 Sobre o Projeto
O desafio consistia em criar uma API capaz de realizar operações de CRUD (Create, Read, Update, Delete) em pedidos. Um dos requisitos fundamentais era a **Transformação de Dados (Mapping)**: a API recebe dados com nomenclatura em português e deve salvá-los no banco de dados com nomenclatura em inglês, seguindo o esquema definido pelo desafio.

### Principais Funcionalidades:
- **Criação de Pedidos:** Recebe dados brutos e realiza o mapeamento automático para o banco de dados.
- **Consulta por ID:** Busca rápida de pedidos específicos usando o identificador orderId.
- **Listagem Geral (Opcional):** Endpoint para visualizar todos os pedidos cadastrados.
- **Atualização (Opcional):** Permite modificar dados de um pedido existente.
- **Exclusão (Opcional):** Remove pedidos da base de dados.

## 🛠️ Tecnologias Utilizadas

- **Node.js:** Ambiente de execução.
- **Express:** Framework web para criação das rotas e middleware.
- **MongoDB & Mongoose:** Banco de dados NoSQL e biblioteca de modelagem de dados.
- **Postman:** Utilizado para testes de integração e validação dos endpoints.
---

## 📂 Estrutura de Pastas
```
├── src/
│   ├── config/      # Configuração de conexão com o Banco de Dados
│   ├── controllers/ # Lógica de negócio e transformação de dados (Mapping)
│   ├── models/      # Definição do Schema do banco de dados (Inglês)
│   └── routes/      # Definição das rotas da API
├── server.js        # Ponto de entrada da aplicação
└── package.json     # Dependências e scripts do projeto
```

## ⚙️ Como Executar o Projeto

1. **Clonar o repositório:**

```
git clone [link-do-seu-repositorio]
```

2. **Instalar as dependências:npm install**

```
npm install
```

3. **Configurar o Banco de Dados:** Certifique-se de que o seu MongoDB está rodando localmente ou altere a string de conexão em server.js ou src/config/db.js.

4. **Iniciar o servidor:**
```
npm start
```

A API estará disponível em http://localhost:3000.

## 📍 Endpoints da API.
### 1.  Criar Pedido (POST)
* URL: /order
* Payload (Exemplo):
```
{
  "numeroPedido": "v10089015vdb-01",
  "valorTotal": 10000,
  "dataCriacao": "2023-07-19T12:24:11.5299601+00:00",
  "items": [{ "idItem": "2434", "quantidadeItem": 1, "valorItem": 1000 }]
}
```

### 2. Buscar por Número do Pedido (GET)URL: /order/:orderId
### 3. Listar Todos (GET)URL: /order/list
### 4. Atualizar Pedido (PUT)URL: /order/:orderId
### 5. Deletar Pedido (DELETE)URL: /order/:orderId
