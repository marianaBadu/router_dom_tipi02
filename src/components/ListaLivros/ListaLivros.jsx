import livrosMock from "./livrosMock.js";
import "./ListaLivros.css";

// Nesta etapa a lista vem de um array local (livrosMock.js), não de
// uma requisição. A ideia é já deixar o componente pronto para, na
// próxima etapa, trocar só a origem dos dados: em vez de
// "livrosMock", um useState + useEffect que chama axios.get("/livros").
function ListaLivros() {
  return (
    <div className="livros">
      <header className="livros__cabecalho">
        <h1>Acervo</h1>
        <span className="livros__contagem">{livrosMock.length} livros cadastrados</span>
      </header>

      <div className="livros__lista">
        {livrosMock.map((livro) => (
          <FichaLivro key={livro.id_livro} livro={livro} />
        ))}
      </div>
    </div>
  );
}

function FichaLivro({ livro }) {
  return (
    <article className="ficha-livro">
      <span className="ficha-livro__numero">Nº {String(livro.id_livro).padStart(3, "0")}</span>

      <div className="ficha-livro__info">
        <div className="ficha-livro__titulo">{livro.titulo}</div>
        <div className="ficha-livro__autor">
          {livro.autor} · {livro.categoria} · {livro.ano_publicacao}
        </div>
      </div>

      <span className={`selo ${livro.disponivel ? "selo--disponivel" : "selo--emprestado"}`}>
        {livro.disponivel ? "disponível" : "emprestado"}
      </span>
    </article>
  );
}

export default ListaLivros;
