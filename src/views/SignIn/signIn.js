import React from 'react';

import NavbarLogin from '../../components/navbarLogin/navbarLogin.js';
import SignInterface from '../../components/signInterface/signinterface.js';// Importa para el Dashboard de Mascotas
import '../../components/signInterface/signinterface.css';

function SignIn() {
  return (
    <>

     


        <NavbarLogin title='Patitas de la Calle'/>
        <SignInterface/>

        


    </>
  );
}

export default SignIn;