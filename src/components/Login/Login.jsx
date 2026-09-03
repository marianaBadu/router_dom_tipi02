import { useState } from "react";
import "./Login.css";

// Formulário controlado: cada campo guarda seu próprio valor em
// useState. Isso já é o jeito "certo" de fazer em React (e vai ser
// reaproveitado quando a próxima etapa mandar esses dados pra API),
// mas por enquanto o envio não faz nada além de mostrar os dados no
// console — sem fetch, sem axios, sem back-end.
function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleSubmit(evento) {
    evento.preventDefault();

    // TODO (próxima etapa): enviar { email, senha } para
    // POST /usuarios/login usando axios, e tratar o token JWT
    // que a API devolve.
    console.log("Dados do formulário de login:", { email, senha });
  }

  return (
    <div className="login">
      <form className="login__ficha" onSubmit={handleSubmit}>
        <h1>Biblioteca Central</h1>
        <p className="login__epigrafe">Entre com sua conta de leitor ou funcionário.</p>

        <div className="campo">
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
            autoComplete="username"
          />
        </div>

        <div className="campo">
          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            type="password"
            value={senha}
            onChange={(evento) => setSenha(evento.target.value)}
            autoComplete="current-password"
          />
        </div>

        <button type="submit" className="botao-primario">
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
