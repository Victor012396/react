import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
function LogInterface(){
    return(
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
          <br></br>
        </form>

    );
}

export default LogInterface;