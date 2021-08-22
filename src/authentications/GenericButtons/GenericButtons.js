import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";


function autenticacionFacebook(){
    const respuestaFacebook= (respuesta)=>{
    console.log(respuesta);

  }
  const respuestaFacebook= (respuesta)=>{
    console.log(respuesta);

  }
  const respuestaGoogle=(respuesta)=>{
    console.log(respuesta);
    console.log(respuesta.profileObj);
  }
}
function LoginButton({type,title,disabled}){
    /*const renderButton=() =>{
        let className;let
        onPress;
        switch(type){
            case 'FACEBOOK':
                className='facebook-style';
                onPress=()=>{
                    <FacebookLogin
                appId="5107896759280460"
                autoLoad={false}
                fields="name, email, picture"
                callback={respuestaFacebook}
                textButton="Iniciar Sesión con Facebook"
                icon="fa-facebook"
                />
                }  
                break;
            default:
                return;    
                
        }
        return(
            <button 
            className={className}
            type="button"
            onPress={onPress}
            disabled={disabled}
            >
                {title}
            </button>
        );
    };*/
}