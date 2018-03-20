import React, { Component } from 'react';
import {  } from 'react-bootstrap';
import email from './email.svg';
import time from './time.svg';
import facebook from './facebook.svg';
import './Footer.css';

class Header extends Component {
  render() {
    return (

          <div className="container">
            <div className="row">

              <div className="col-md-3">
                <ul className="menu">
                  <li>Home</li>
                  <li>Como Funciona</li>
                  <li>Quem Somos</li>
                  <li>Dúvidas</li>
                  <li>Contato</li>
                  <li>Cadastre-se</li>
                </ul>
              </div>
              <div className="col-md-4">
                <div className="col-md-12 contact first">
                  <img src={email} alt="Logo"/><span>contato@dinariu.com.br</span>
                </div>
                <div className="col-md-12 contact">
                  <img src={facebook} alt="Logo"/><span>fb.com/dinariu</span>
                </div>
                <div className="col-md-12 contact">
                  <img class="time" src={time} alt="Logo"/><small>Horário de atendimento</small><span class="ate">Todos os dias das 9:00 às 23:00</span>
                </div>
              </div>
              <div className="col-md-5 news">
                <p>dinariu news</p>
                <h6>Receba as últimas notícias</h6>
                <input type="text" placeholder="Seu E-mail"/>
                <button>Enviar</button>
              </div>
            </div>
          </div>

    );
  }
}

export default Header;