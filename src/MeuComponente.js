function MeuComponente({ nome, profissao, curso, objetivo, linguagem, hobby, motivacao }) {
  return (
    <div>
      <h1>Olá, sou {nome}!</h1>
      <h2>Por que escolhi a Tecnologia da Informação?</h2>
      <p>{motivacao}.</p>
      <p>Minha profissão desejada é {profissao}.</p>
      <p>Meu curso é {curso}.</p>
      <p>Estou aprendendo React!</p>
      <p>Meu objetivo é me tornar desenvolvedora!</p>
      <p>Meu objetivo é {objetivo}.</p>
      <p>Estou estudando {linguagem}.</p>
      <p>Nas horas livres gosto de {hobby}.</p>
      <p>{hobby === "Ler livros"
  ? "Você gosta de leitura!"
  : "Você tem outros interesses!"}
  </p>

          </div>
  );
}

export default MeuComponente;