import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MeuComponente from './MeuComponente';
import MeusEstudos from './MeusEstudos';
function App() {
const [mensagem, setMensagem] = useState('');
  return (
    <div className="App">
     <MeuComponente
  nome="Angélica"
  profissao="Desenvolvedora"
  curso="Análise e Desenvolvimento de Sistemas"
  objetivo="É unir meu curso de Direito com Tecnologia da Informação para desenvolver programas que protegem crianças de prática de pedofilia na Web."
  linguagem="JavaScript"
  hobby="Ler livros"
  motivacao="Escolhi estudar Tecnologia da Informação porque acredito que a tecnologia pode transformar vidas e ajudar a resolver problemas reais. Minha formação em Direito despertou meu interesse pela proteção das pessoas e pela justiça. Agora, quero unir esse conhecimento à programação para desenvolver soluções tecnológicas que contribuam para a segurança das crianças no ambiente digital. Estou no início dessa jornada, aprendendo um passo de cada vez, com o objetivo de me tornar desenvolvedora"
  />
      <MeusEstudos />
      <button
       type="button"
       className="btn btn-success btn-lg"
       onClick={() => {
  if (mensagem === '') {
    setMensagem('Olá! Minha mensagem apareceu na página!');
  } else {
    setMensagem('');
  }
}}
     >
       Meu primeiro botão!
       </button>
       <p>{mensagem}</p>
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Meu primeiro projeto com React!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Conheça Meu Projeto!
        </a>
      </header>
    </div>
  );
}

export default App;
