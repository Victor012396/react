import React from 'react';
import "../pages/signIn.css";
import NavbarLogin from '../navbar/navbar.js';
import SignInterface from '../signIn/signin.js';// Importa para el Dashboard de Mascotas
import '../signIn/signin.css';

function SignIn() {
  return (
    <>

     


        <NavbarLogin title='Patitas de la Calle'/>
        <SignInterface/>

        


    </>
  );
}

export default SignIn;