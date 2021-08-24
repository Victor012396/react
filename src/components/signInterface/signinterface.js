import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
function SignInterface(){
    return(
        <form className="App-form" >
          <p>
          <label>Nombre</label><br />
          <input type="text" name="title" className="input" />
          </p>

          <p>
          <label>Correo Electronico</label><br />
          <input type="text" name="title" className="input" />
          </p>

          <p>
          <label>Contraseña</label><br />
          <input type="text" name="image" className="input"   />
          </p>
          <button className="button btn-normal" >Registrate</button>
          <br> 
          </br>

          <br></br>
          <br></br>
        </form>

    );
}

export default SignInterface;