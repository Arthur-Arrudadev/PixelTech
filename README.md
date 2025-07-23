# 🛒 PixelTech – Loja de Produtos Eletrônicos

Projeto desenvolvido inicialmente como parte da disciplina **Desenvolvimento Web I** (2025.1) e posteriormente escalado para a disciplina **Banco de Dados II**, no **IFPE – Campus Paulista**.

---

## 📌 Sobre o Projeto

**PixelTech** é uma loja virtual de produtos eletrônicos construída com foco em **usabilidade**, **design responsivo** e **funcionalidades completas** de um e-commerce, agora com **backend integrado** e **persistência em banco de dados**.

Nesta versão evoluída, a loja simula o fluxo real de um sistema de vendas online, com **cadastro de usuários**, **login**, **armazenamento de endereços**, **pedidos salvos em banco de dados** e outras interações dinâmicas com **MongoDB Atlas**.

---

## 💡 Funcionalidades

- ✅ Catálogo com lista de produtos (nome, imagem, preço, botão de compra)
- 🔍 Filtros por **preço**, **categoria**, **ofertas** e **barra de busca**
- 🛍️ Carrinho de compras com contador, ajuste de quantidade e cálculo de total
- 💳 Página de finalização com **simulação de pagamento** e **registro de pedido**
- 👤 Cadastro, login e logout de clientes com dados persistidos no banco
- 📦 Formulário de endereço dinâmico com visualização e edição
- 🔐 Alteração de senha com validação segura
- 💾 Armazenamento de dados no **MongoDB Atlas**
- 🌐 Integração front-end e back-end com **fetch API**
- 📱 Design responsivo adaptado para desktop, tablet e celular

---

## 🚀 Tecnologias e Ferramentas

### 🔧 Front-end
- **HTML5**
- **CSS3**
- **JavaScript ES6+**
- **Fetch API**
- **localStorage**

### 🛠️ Back-end
- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **Mongoose**
- **dotenv**
- **Cors**

---

## 📂 Estrutura de Páginas

| Página             | Descrição |
|--------------------|-----------|
| `index.html`       | Página inicial com banners e links principais |
| `catalogo.html`    | Lista de produtos com filtros e busca |
| `carrinho.html`    | Resumo de itens adicionados e total da compra |
| `finalizar.html`   | Simulação de pagamento e finalização do pedido |
| `login.html`       | Login de clientes com verificação no banco |
| `cadastro.html`    | Registro de clientes com envio ao MongoDB |
| `area-cliente.html`| Página com informações do cliente logado, endereço e alteração de senha |

---

## 📁 Estrutura do Projeto
PixelTech/
├── loja-pixeltech-frontend/
│ ├── index.html
│ ├── catalogo.html
│ ├── ...
│ ├── js/
│ └── css/
├── loja-pixeltech-backend/
│ ├── index.js
│ ├── models/
│ ├── .env.example
│ └── package.json


---

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do back-end com o seguinte conteúdo:

MONGO_URI=mongodb+srv://<usuario>:<senha>@cluster.mongodb.net/<banco>
PORT=3000

> **Atenção:** No arquivo .env o <usuario>, <senha> e cluster devem ser modificados

---

## 📅 Cronograma Geral

O projeto foi desenvolvido entre os dias **01/06/2025** e **22/07/2025**, seguindo as etapas:

1. Definição do escopo
2. Desenvolvimento incremental das páginas
3. Integração de funcionalidades com JavaScript
4. Simulação de banco de dados com JSON
5. Validação de código e responsividade
6. Documentação e entrega final (para Desenvolvimento Web)
7. Transição para arquitetura real com Node.js e MongoDB
8. Integração de rotas e APIs REST
9. Implementação da área do cliente e endereço dinâmico
10. Recursos adicionais (alterar senha, logout, validações)
11. Ajustes finais e documentação

---

## 🧠 Desenvolvedores

| Nome             | Papel |
|------------------|-------|
| **Ana Luiza Leão**  | Front-end, back-end, lógica, integração, documentação |
| **Arthur Arruda**   | Front-end, back-end, estrutura, testes e suporte |
| **Meryellen Nascimento** | Back-end, integração, testes e documentação |

---

## 📎 Observações

- O projeto agora possui um **backend funcional**, rodando com Node.js + Express.
- Os dados são **armazenados na nuvem (MongoDB Atlas/Compass)**.
- O projeto **não inclui autenticação com tokens**, pois está focado em lógica CRUD e persistência.
- O objetivo é **educacional**, com foco em demonstrar o ciclo completo de desenvolvimento de um sistema.

---

## 📚 Licença

Este projeto é acadêmico e **não deve ser utilizado em ambiente de produção real**.

---

## 💖 Agradecimentos

Agradecemos aos professores responsável pela disciplina e ao IFPE – Campus Paulista pelo apoio e oportunidade de desenvolver este projeto prático e desafiador.
