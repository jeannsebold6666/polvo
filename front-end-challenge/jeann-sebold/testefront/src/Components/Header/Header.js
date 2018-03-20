import React, { Component } from 'react';
import logo from './logo.svg';
import {  } from 'react-bootstrap';
import yellow from './yellow.svg';
import './header.css';

class Header extends Component {
  render() {
    return (

          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <img src={logo} class="logo" alt="Logo"/>
                
              </div>
              <div className="col-md-7">
                <ul className="menu">
                  <li>Home</li>
                  <li>Como Funciona</li>
                  <li>Quem Somos</li>
                  <li>Dúvidas</li>
                  <li>Contato</li>
                  <li class="login">
                    <img src={yellow} alt="Logo"/>
                    <p className="cad">Cadastre-se</p>
                    <p className="login">Minha Conta</p>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <button className="compre">Compre e venda Créditos</button>
                
              </div>
            </div>
          </div>

    );
  }
}

export default Header;