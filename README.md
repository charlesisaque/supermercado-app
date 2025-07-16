# Supermercado Bahia Norte - App

Este é o repositório do aplicativo de delivery e gerenciamento do Supermercado Bahia Norte, desenvolvido com Firebase (Auth + Firestore) e front-end em HTML/CSS/JS.

## Funcionalidades atuais

- Cadastro de usuários com e-mail/senha  
- Login com e-mail/senha e Google  
- Salvamento de dados adicionais do usuário no Firestore (nome, telefone, bairro)  
- Listagem dinâmica de produtos consumindo dados do Firestore  
- Página administrativa para gerenciamento básico dos produtos (em desenvolvimento)  

## Tecnologias

- Firebase Authentication  
- Firebase Firestore  
- HTML / CSS / JavaScript (Vanilla)  
- Firebase SDK compat  

## Como rodar localmente

1. Clone o repositório  
   ```bash
   git clone https://github.com/charlesisaque/supermercado-app.git

   ## Estrutura do projeto
- cadastro.html - Tela de cadastro de usuários
- login.html - Tela de login
- home.html - Tela principal após login
- src/ - Scripts JavaScript (ex: cadastro.js, firebase-config.js, login.js)
- style.css - Estilos gerais do app
- .gitignore - Arquivos e pastas ignoradas pelo Git
  
## Próximos passos
- Criar página de perfil para edição dos dados do usuário
- Implementar integração real com sistema Arius (API)
- Desenvolver página administrativa para inserção/edição de imagens e produtos
- Sistema de carrinho, pedido e pagamento
  
