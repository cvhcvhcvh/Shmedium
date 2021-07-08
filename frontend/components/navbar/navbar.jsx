import React from 'react'
import { Link } from 'react-router-dom';
import { openModal, closeModal} from '../../actions/modal_actions';
import Modal from '../modal/modal';



export default function Navbar() {
  return(
      <div className="topnav">
        <a className="active" href="#home">Shmedium</a>
          <Link to="/"></Link>
        <a href="#news">Linkedin</a>
        <a href="#contact">Github</a>
        <a href="#about">App Academy</a>
        <a className="nav-link" href="#"onClick={() => dispatch(openModal('login'))}>Sign In</a>
        <a className="nav-link" href="#" onClick={() => dispatch(openModal('signup'))}>Get Started</a>
      </div>
  )
}

