
####To **initialize** the development server
```sh
$ npm run dev
```

That's it, you will have a fresh new running server on:
>https://localhost:3000

This bundle includes:
react: 
kneex:
bookshelf:
pg:


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