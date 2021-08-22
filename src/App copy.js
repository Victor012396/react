
import './App.css';

import { Navbar } from "react-bootstrap";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import {BrowserRouter as Router,Switch,Route, Link} from "react-router-dom";

function App() {
  const respuestaFacebook= (respuesta)=>{
    console.log(respuesta);

  }
  const respuestaGoogle=(respuesta)=>{
    console.log(respuesta);
    console.log(respuesta.profileObj);
  }



  return (
    
    <div className="App">
      
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand >
          <img
            alt="Logo"
        
            src="https://scontent.fgdl11-1.fna.fbcdn.net/v/t1.6435-9/60521963_2138780329569242_2946006987034329088_n.png?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHTM3MLHYoUwtccvjKYAhaPT933o9a-KvNP3fej1r4q85wng3paCFjU5AuLYPuO8ebosW7HBEgXRNusUVmPRo3A&_nc_ohc=sTvgatVOh3QAX8fFxK1&_nc_ht=scontent.fgdl11-1.fna&oh=16f1c44238d98d74a36fb571f79bcf74&oe=61324D5D"
            width="50"
            height="50"
            border-radius= "50%"
            className="d-inline-block align-top"
          />
            Patitas de la Calle
        </Navbar.Brand>
        </Navbar>
      </header>


      <body className="App-body">
        <form className="App-form" >
          <p>
          <label>Correo Electronico</label><br />
          <input type="text" name="title" className="input" />
          </p>

          <p>
          <label>Contraseña</label><br />
          <input type="text" name="image" className="input"   />
          </p>
          <button className="button btn-normal" >Iniciar Sesión</button>
          <br> 
          </br>
          <button >Registrate</button>
          <br></br>
          <br></br>
          <FacebookLogin
          appId="5107896759280460"
          autoLoad={false}
          fields="name, email, picture"
          callback={respuestaFacebook}
          textButton="Iniciar Sesión con Facebook"
          icon="fa-facebook"
          />
          <br></br>
          <GoogleLogin
          clientId="972024784387-c3q5183jgnvpi6rhkf7cddku07oumdu4.apps.googleusercontent.com"
          buttonText="Iniciar Sesión"
          onSuccess={respuestaGoogle}
          onFailure={respuestaGoogle}
          cookiePolicy={"single_host_origin"}
          />
          </form>
          <br></br>

            <p>
            <label>Correo Electronico</label><br />
            <input type="text" correo="title" className="input" />
          </p>
          <button>Registrate</button>

      </body>
    </div>
  );
}





export default App;
