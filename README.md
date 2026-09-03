# Biblioteca Central — base visual em React

Projeto criado com **Vite + React**, contendo apenas as três telas visuais
pedidas para esta etapa da aula, **sem** React Router, Axios, CORS, JWT ou
qualquer comunicação com o back-end. É propositalmente só estrutura de
componentes + interface.

## Como rodar

```bash
npm install
npm run dev
```

O Vite vai abrir em `http://localhost:5173`. Não é preciso subir o
back-end nem o banco de dados nesta etapa — nenhuma tela faz requisição
de rede.

## Estrutura de pastas

```
src/
├── main.jsx                         -> ponto de entrada, monta <App />
├── App.jsx                          -> alterna entre as 3 telas (sem Router, ver abaixo)
├── App.css
├── index.css                        -> tokens de cor/tipografia + estilos de formulário compartilhados
└── components/
    ├── Login/
    │   ├── Login.jsx
    │   └── Login.css
    ├── CadastroUsuario/
    │   ├── CadastroUsuario.jsx
    │   └── CadastroUsuario.css
    └── ListaLivros/
        ├── ListaLivros.jsx
        ├── ListaLivros.css
        └── livrosMock.js            -> dados estáticos usados na listagem
```

Cada tela é uma pasta com seu próprio `.jsx` e `.css` — essa organização
"um componente, uma pasta" facilita crescer o projeto depois (por
exemplo, adicionar um `Login.test.jsx` ou um hook específico da tela sem
bagunçar as outras).

## Por que a navegação não usa React Router ainda

`App.jsx` guarda em `useState` qual tela deve aparecer (`"login"`,
`"cadastro"` ou `"livros"`) e troca o componente renderizado a partir de
cliques nos botões do menu. Isso resolve "mostrar uma tela de cada vez"
sem precisar de nenhuma biblioteca — e serve de gancho perfeito para
explicar o problema que o React Router resolve: essa navegação não muda
a URL, não permite recarregar a página numa tela específica, não permite
voltar/avançar pelo histórico do navegador. Quando o Router entrar, essa
lógica de `TELAS`/`useState` sai do `App.jsx` e cada componente vira uma
rota (`/login`, `/cadastro`, `/livros`).

## Formulários já controlados

`Login` e `CadastroUsuario` já usam `useState` para guardar o valor de
cada campo (formulário controlado, o padrão em React) e o `onSubmit`
já existe, apenas dando `console.log` nos dados em vez de enviar para
algum lugar. Isso significa que, quando chegar a hora do Axios, a única
mudança dentro do `handleSubmit` será trocar o `console.log` por uma
chamada `axios.post(...)` — a captura dos dados do formulário já está
pronta.

## Roteiro das próximas etapas (fora do escopo deste momento)

1. Adicionar **Axios** ao projeto para centralizar as chamadas HTTP.
2. Configurar **CORS** no back-end para aceitar requisições vindas do
   Vite (`http://localhost:5173`).
3. Integrar o **cadastro de usuário** com `POST /usuarios`.
4. Integrar o **login** com `POST /usuarios/login` e guardar o token
   JWT recebido.
5. Trocar `livrosMock.js` por uma chamada real a `GET /livros`
   (rota protegida, exige o token do login).
6. Introduzir o **React Router**, transformando os três componentes em
   páginas nas rotas `/login`, `/cadastro` e `/livros`, com redirecionamento
   após login/cadastro.
