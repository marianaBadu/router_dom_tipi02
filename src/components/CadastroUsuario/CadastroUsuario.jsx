import { useState } from "react";
import "./CadastroUsuario.css";

// Mesma lógica de formulário controlado do Login. O campo "perfil" usa
// os mesmos valores que já existem na coluna ENUM('FUNCIONARIO','USUARIO')
// do banco (ver livraria.sql), para já nascer compatível com a API.
function CadastroUsuario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [perfil, setPerfil] = useState("USUARIO");

  function handleSubmit(evento) {
    evento.preventDefault();

    // TODO (próxima etapa): enviar { nome, email, senha, perfil } para
    // POST /usuarios usando axios.
    console.log("Dados do formulário de cadastro:", { nome, email, senha, perfil });
  }

  return (
    <div className="cadastro">
      <form className="cadastro__ficha" onSubmit={handleSubmit}>
        <h1>Novo cadastro</h1>
        <p className="cadastro__epigrafe">Preencha os dados para criar uma conta na biblioteca.</p>

        <div className="campo">
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
            autoComplete="name"
          />
        </div>

        <div className="campo">
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
            autoComplete="email"
          />
        </div>

        <div className="campo">
          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            type="password"
            value={senha}
            onChange={(evento) => setSenha(evento.target.value)}
            autoComplete="new-password"
          />
        </div>

        <div className="campo">
          <label htmlFor="perfil">Perfil</label>
          <select
            id="perfil"
            value={perfil}
            onChange={(evento) => setPerfil(evento.target.value)}
          >
            <option value="USUARIO">Usuário (leitor)</option>
            <option value="FUNCIONARIO">Funcionário</option>
          </select>
        </div>

        <button type="submit" className="botao-primario">
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default CadastroUsuario;
