# **VILV Laravel 11**

**VILV** Laravel 11 é um kit inicial para [**Laravel**](https://laravel.com/), [**Vuetify 3**](https://vuetify.vom/) e [**Inertia.js**](https://inertiajs.com/). Ele vem com recursos de importação automática e aproveita os melhores e mais recentes recursos do [**Vue 3**](https://vuejs.org/).

Este kit inicial é projetado para ser simples e flexível. Ele é construído com base em práticas recomendadas e é constantemente atualizado com as últimas tecnologias. Ele vem com um sistema de notificação do sistema acionado por servidor, diálogos orientados ao servidor, layouts persistentes de inércia inline e muito mais.

O **VILV** foi inspirado no projeto [**Pronto Fuel**](https://github.com/prontostack/pronto-fuel) de [**Matheus Dal'Pizzol**](https://github.com/MtDalPizzol) e é mantido por [**kallbuloso**](https://github.com/kallbuloso).

## Pré-requisitos

```bash
# PHP ^8.2
# Composer ^2.7.*
# Node.js ^20.*
# NPM ^10.*
# Laravel 11.*
```

## Features

- ⏩ [Inertia.js](https://inertiajs.com/)
- 🔰 [Vue 3](https://github.com/vuejs/core)
- 📦 [Laravel 11](https://laravel.com/)
- ⚡️ [Vite](https://vitejs.dev/)
- 🔥 Use a nova sintaxe [`<script setup>`](https://github.com/vuejs/rfcs/pull/227) para Vue
- 📦 Importação automática de [componentes](https://github.com/antfu/unplugin-vue-components)
- ⬇️ [Importação automática de APIs Common Vue e Inertia](https://github.com/antfu/unplugin-auto-import)
- ✂️ Divisão de código de páginas pronta para uso
- 🔔 Sistema de notificação do sistema acionado por servidor com fila instalada
- 💬 Diálogos orientados ao servidor
- ⚓ Layouts persistentes de inércia inline
- ❄️ [Vuetify Framework](https://vuetify.vom/) configurado imediatamente com os melhores componentes do Material Design prontos para usar
- 📦 Gerenciamento de estado com [Pinia](https://github.com/vuejs/pinia)
- 😃 [Use ícones de qualquer conjunto de ícones, sem compromisso](https://github.com/antfu/unplugin-icons)
- 🪲 Depurar com [Ray](https://spatie.be/docs/ray/v1/introduction) na [porta 23517](http://localhost:23517/) por padrão
- 👮 Aplique a qualidade do código com [ESLint](https://eslint.org/) e [StandardJS](https://standardjs.com/)
- 🚨 Teste com [PHPUnit](https://phpunit.de/) e [Laravel Dusk](https://laravel.com/docs/11.x/dusk)

## Início rápido com VSCode

```bash
# Clonar o repositório
git clone git@github.com:kallbuloso/vilv.git my-app

# Entre no diretório do projeto
cd my-app

# Crie o arquivo .env com base no exemplo fornecido
cp .env.example .env

# Instale as dependências PHP
composer install

# Gere uma chave APP para segurança
php artisan key:generate

# Crie um banco de dados SQLite
touch database/database.sqlite
- ou -
# Crie um banco de dados MySQL e atualize o arquivo .env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=vilv
DB_USERNAME=root
DB_PASSWORD=password

# Crie as tabelas do banco de dados
php artisan migrate

# Instale as dependências de front-end
npm install

# Atualizar configurações do servidor em vite.config.js
server: {
    port: 3000
},

# Servidor de desenvolvimento do Lift Vite
npm start

# Iniciar servidor de desenvolvimento Laravel
php artisan serve

# Iniciar servidor de desenvolvimento Laravel com Ray
php artisan serve --port=7000

# Acesse http://localhost
```

## Formatando

```bash
# Formatar PHP
composer format

# Formatar JavaScript
npm run format
```
