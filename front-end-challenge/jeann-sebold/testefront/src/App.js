import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import {  } from 'react-bootstrap';
import passo1 from './passo-1.svg';
import passo2 from './passo-2.svg';
import passo3 from './passo-3.svg';
import parceiro1 from './1.png';
import parceiro2 from './2.png';
import parceiro3 from './3.png';
import parceiro4 from './4.png';
import parceiro5 from './5.png';
import parceiro6 from './6.png';
import moedas from './moedas.png';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Header/>
        </header>
        <div className="context-slider">
          <div className="container">
            <div className="row">
              <h2>Transações online com segurança e rapidez</h2>
              <p>Compre e venda de créditos <strong>Neteller, Bet365</strong> ou <strong>Pokerstars</strong></p>
            </div>
          </div>
        </div>
        <div className="container">
            <div className="col-md-12">
              <div className="compra">
                <p className="txt">Compra</p>
                <span className="price">R$ 3,15</span>
                <small>Atualizado há 3 minutos </small>
              </div>
              <div className="venda">
                <p className="txt">Venda</p>
                <span className="price">R$ 3,15</span>
                <small>Atualizado há 3 minutos </small>
              </div>
            </div>
        </div>
        <div className="container-fluid" id="comofunc">
          <div className="moedas">
            <img className="moedass" src={moedas} />
          </div>
          <div className="container">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-7 col-md-offset-3">
                  <div class="retangulo"></div><h4 class="title text-center">Como Funciona</h4>
                </div>
              </div>
              <div className="row passos">
                <div className="col-md-4">
                  <div className="col-md-2">
                    <img className="icone" src={passo1} />
                  </div>
                  <div className="col-md-10">
                    <span>Passo 1</span>
                    <h6>Compra ou Venda</h6>
                    <p>Através de nosso site, realize a compra e venda de créditos no valor desejado.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="col-md-2">
                    <img className="icone" src={passo2} />
                  </div>
                  <div className="col-md-10">
                    <span>Passo 2</span>
                    <h6>Validação</h6>
                    <p>Após realizar a transação pelo site, você transfere o valor para a Dinariu e nós iniciamos a validação.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="col-md-2">
                    <img className="icone" src={passo3} />
                  </div>
                  <div className="col-md-10">
                    <span>Passo 3</span>
                    <h6>Liberação</h6>
                    <p>Com a transferência validada, liberaremos imediatamente o seu pagamento ou montante de crédito.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 quemsomos">
                <div class="retangulo"></div><h4 class="title">Quem Somos</h4>
                <p>Dinariu é uma empresa que intermedia transações financeiras online, como a compra e venda de créditos Neteller, Bet365 ou Pokerstars.</p>
                <p>Através de uma conexão próxima e inteligente entre compradores e vendedores, garantimos os melhores preços para os seus créditos — tudo isso de forma prática e completamente segura.</p>
                <button class="verde">Conheça o Dinariu</button>
                <div className="col-md-12 parceiros">
                  <h5>Nossos Parceiros</h5>

                  <div className="col-md-12 ">
                    <img className="icone" src={parceiro1} />
                    <img className="icone" src={parceiro2} />
                    <img className="icone" src={parceiro3} />
                    <img className="icone" src={parceiro4} />
                    <img className="icone" src={parceiro5} />
                    <img className="icone" src={parceiro6} />
                  </div>
                </div>
              </div>
              <div className="col-md-6 quemsomos">
                <div class="retangulo"></div><h4 class="title">Depoimentos</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid" id="transcao">
          <div className="container">
            <div className="row">
              <h5>Faça a sua transação financeira</h5>
              <p>Compre créditos para Neteller, Bet365 ou Pokerstars de forma simples, rápida e segura.</p>
              <div className="col-md-5 col-md-offset-4">
                <button >Quero Comprar</button>
                <button >Quero Vender</button>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid" id="duvidas">
          <div className="container">
            <div className="row">
              <h5>Você ainda tem dúvidas?</h5>
              <button class="comprar">Veja as dúvidas frequentes</button>
              <button class="vender">Entre em contato</button>
            </div>
          </div>
        </div>
        <footer>
          <Footer/>
        </footer>
      </div>
    );
  }
}

export default App;
