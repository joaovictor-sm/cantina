# Cantina Central - Gerenciamento de Pedidos

## Sobre o Projeto

Este projeto é uma aplicação web desenvolvida para a lanchonete da minha tia. O objetivo é oferecer um sistema simples e eficiente para gerenciar pedidos, funcionando como um cardápio online.

## Funcionalidades

- **Clientes:**

  - Visualização do cardápio online.
  - Realização de pedidos (somente para retirada na lanchonete).

- **Administração:**
  - Página exclusiva de administração acessível via `/adm`.
  - Acesso restrito por e-mail e senha definidos fixamente na aplicação.
  - Visualização e gerenciamento de pedidos.
  - Edição dos itens exibidos no cardápio.

## Status do Desenvolvimento

O projeto ainda está nos estágios iniciais de desenvolvimento, com funcionalidades sendo implementadas e ajustadas conforme necessário.

## Design UI/UX

O design da aplicação pode ser visualizado no Figma através do link:
[Cantina Central - UI/UX](https://www.figma.com/design/idRTXcdjKgttYlFhHBsxAz/Cantina-Central-UI?node-id=0-1&t=eAbyfqtXeZG80nYz-1)

## Tecnologias Utilizadas

- **Frontend:** Next.js, ShadCN, TailwindCSS
- **Backend:** Node.js, Fastify, Zod, Docker
- **Banco de Dados:** PostgreSQL, DrizzleORM

## Como Executar o Projeto

1. Clone este repositório.
2. Instale as dependências com `pnpm install`.
3. Execute o projeto com `pnpm dev`.
4. Acesse a aplicação no navegador.
