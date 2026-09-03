import { Routes, Route, Navigate, NavLink } from "react-router-dom"
import CadastroUsuario from "./components/CadastroUsuario/CadastroUsuario.jsx";
import Login from "./components/Login/Login.jsx";
import ListaLivros from "./components/ListaLivros/ListaLivros.jsx";
import "./App.css";

// const TELAS = {
//   login: Login,
//   cadastro: CadastroUsuario,
//   livros: ListaLivros
// };

function App() {
  // const [telaAtual, setTelaAtual] = useState("login");

  // const Tela = TELAS[telaAtual];

  return (
    <div className="app">
      <nav className="app__nav">
        <span className="app__marca">Biblioteca Central</span>
        <div className="app__botoes">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "app__botao app__botao--ativo" : "app__botao"
            }
          >
            Login
          </NavLink>

          <NavLink
            to="/cadastro"
            className={({ isActive }) =>
              isActive ? "app__botao app__botao--ativo" : "app__botao"
            }
          >
            Cadastro
          </NavLink>

          <NavLink
            to="/livros"
            className={({ isActive }) =>
              isActive ? "app__botao app__botao--ativo" : "app__botao"
            }
          >
            Livros
          </NavLink>

          {/* <button
            className={telaAtual === "login" ? "app__botao app__botao--ativo" : "app__botao"}
            onClick={() => setTelaAtual("login")}
          >
            Login
          </button>
          <button
            className={telaAtual === "cadastro" ? "app__botao app__botao--ativo" : "app__botao"}
            onClick={() => setTelaAtual("cadastro")}
          >
            Cadastro
          </button>
          <button
            className={telaAtual === "livros" ? "app__botao app__botao--ativo" : "app__botao"}
            onClick={() => setTelaAtual("livros")}
          >
            Livros
          </button> */}
        </div>
      </nav>

      <main>
        <Routes>
          {/* A ROTA PADRAO COM O NAVIGATE */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<CadastroUsuario />} />
          <Route path="/livros" element={<ListaLivros />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
