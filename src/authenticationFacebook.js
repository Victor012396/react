import FacebookLogin from "react-facebook-login";
function autenticacionFacebook(){
    const respuestaFacebook= (respuesta)=>{
    console.log(respuesta);

  }
  return(){
    <FacebookLogin
          appId="5107896759280460"
          autoLoad={false}
          fields="name, email, picture"
          callback={respuestaFacebook}
          textButton="Iniciar Sesión con Facebook"
          icon="fa-facebook"
          />
  }
};
