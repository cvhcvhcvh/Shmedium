import React from 'react'
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';


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



// class Navbar extends React.Component {
//   constructor(props) {
//     super(props)
//   }

//   loggedOut(){
//     this.props.openModal()
//   }
  
//   loggedIn(){
//     this.props.logout()
//   }

//   render(){
//     return(
//       <>
//         <div className="topnav">
//           <a className="active" href="#home">Shmedium</a>
//             <Link to="/"></Link>
//           <a href="#news">Linkedin</a>
//           <a href="#contact">Github</a>
//           <a href="#about">App Academy</a>
//         </div>

//       </>
//     )
//   }

// }

// export default Navbar