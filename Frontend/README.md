# 🎨 Frontend - Interface de Gerenciamento de Usuários

Interface web desenvolvida em React para gerenciar usuários (CRUD completo) com design moderno e responsivo.

## 🚀 Tecnologias

- **React** 18+ - Biblioteca para interfaces
- **Vite** - Build tool e dev server
- **Axios** - Cliente HTTP
- **CSS3** - Estilização (sem frameworks)
- **JavaScript (ES6+)** - Linguagem de programação

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [Git](https://git-scm.com/)
- Backend rodando em `http://localhost:3000`

## 🔧 Instalação

### 1. Clone o repositório
```bash
git clone https://github.com/rafaelvieiramaximo/Teste-Full-Stack.git
cd frontend
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure a URL da API (se necessário)

O frontend está configurado para se conectar à API em `http://localhost:3000/api`.

Se a API estiver em outra URL, edite o arquivo `src/services/api.js`:
```javascript
const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Altere aqui se necessário
  headers: {
    'Content-Type': 'application/json',
  },
});
```

### 4. Inicie o servidor de desenvolvimento
```bash
npm run dev
```

A aplicação estará rodando em: **http://localhost:5173**

## ✨ Funcionalidades

### ✅ Listar Usuários
- Exibe todos os usuários cadastrados em cards
- Mostra nome, email, cargo e data de cadastro
- Layout responsivo em grid

### ➕ Criar Usuário
- Formulário com validação em tempo real
- Campos: Nome (obrigatório), Email (obrigatório), Cargo (opcional)
- Feedback visual de erros

### ✏️ Editar Usuário
- Clique no botão "Editar" de qualquer card
- Formulário é preenchido automaticamente
- Scroll automático para o topo

### 🗑️ Deletar Usuário
- Confirmação antes de deletar
- Feedback visual de sucesso/erro

### 🎨 Design
- Interface moderna e profissional
- Fundo azul escuro corporativo
- Animações suaves
- Responsivo para mobile e desktop

## 📁 Estrutura de Pastas
```
frontend/
├── src/
│   ├── components/
│   │   ├── UserCard.jsx      # Card individual de usuário
│   │   ├── UserForm.jsx      # Formulário criar/editar
│   │   └── UserList.jsx      # Lista de usuários
│   ├── services/
│   │   └── api.js            # Configuração do Axios
│   ├── App.jsx               # Componente principal
│   ├── App.css               # Estilos principais
│   ├── index.css             # Reset e estilos globais
│   └── main.jsx              # Ponto de entrada
├── public/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Componentes

### **App.jsx**
Componente principal que gerencia:
- Estado global (usuários, edição, loading, mensagens)
- Comunicação com a API
- Coordenação entre componentes

### **UserForm.jsx**
Formulário reutilizável para criar/editar:
- Validação de campos
- Estados de erro
- Modo criação vs edição

### **UserList.jsx**
Lista de usuários:
- Estado de loading
- Estado vazio
- Grid responsivo

### **UserCard.jsx**
Card individual:
- Exibição de dados
- Botões de ação (editar/deletar)
- Hover effects

## 🛠️ Scripts Disponíveis
```bash
# Modo desenvolvimento (com hot reload)
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 🧪 Testando a Aplicação

### Cenários de Teste:

1. **Criar usuário válido:**
   - Preencha nome e email válidos
   - Clique em "Criar Usuário"
   - Usuário deve aparecer na lista

2. **Validação de campos:**
   - Tente criar sem nome → Erro
   - Tente criar sem email → Erro
   - Tente criar com email inválido → Erro

3. **Editar usuário:**
   - Clique em "Editar" em um card
   - Altere os dados
   - Clique em "Salvar Alterações"

4. **Deletar usuário:**
   - Clique em "Deletar"
   - Confirme a exclusão

5. **Email duplicado:**
   - Tente criar usuário com email já existente
   - Deve exibir erro 409

## 🎨 Customização de Estilos

### Cores Principais (em `App.css`):
```css
:root {
  --primary: #3b82f6;        /* Azul primário */
  --primary-dark: #2563eb;   /* Azul escuro */
  --success: #10b981;        /* Verde */
  --danger: #ef4444;         /* Vermelho erro */
  --warning: #f59e0b;        /* Laranja aviso */
}
```

### Fundo da Aplicação:
```css
body {
  background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
}
```

## 📱 Responsividade

A aplicação é totalmente responsiva:

- **Desktop:** Grid com múltiplas colunas
- **Tablet:** Grid com 2 colunas
- **Mobile:** Grid com 1 coluna

Breakpoints definidos em `App.css`:
```css
@media (max-width: 768px) {
  /* Estilos mobile */
}
```

## 🔗 Integração com Backend

A aplicação consome a API através do Axios (`src/services/api.js`):
```javascript
export const userService = {
  getAll: () => GET /api/users
  getById: (id) => GET /api/users/:id
  create: (data) => POST /api/users
  update: (id, data) => PUT /api/users/:id
  delete: (id) => DELETE /api/users/:id
}
```

## ⚠️ Tratamento de Erros

A aplicação trata os seguintes erros:

- **400:** Erro de validação (nome/email faltando)
- **404:** Usuário não encontrado
- **409:** Email duplicado
- **500:** Erro interno do servidor
- **Network Error:** Servidor offline

## 🚀 Build para Produção
```bash
npm run build
```

Isso gera uma pasta `dist/` com os arquivos otimizados para produção.


## 📝 Notas

- Certifique-se de que o backend está rodando antes de iniciar o frontend
- Em produção, configure a variável `baseURL` no `api.js` para a URL real da API
- O Vite usa porta `5173` por padrão (configurável em `vite.config.js`)

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

