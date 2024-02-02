import React, { useRef, useState } from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonInput,
  IonButton,
  IonContent,
  IonPage,
} from '@ionic/react';
import { useHistory } from 'react-router';
import logo from '../images/B.png';

import config from '../Config';

import '../assets/Auth/login.css';

const Login: React.FC = () => {
 // const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  const passwordRef = useRef<any>(null)

  const history = useHistory();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      console.log(username+" "+passwordRef.current.value);
      // Make a POST request to your authentication API endpoint
      const response = await fetch(config.baseUrl+'/api/v1/auth/authenticateClient', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email:username, 
          password:passwordRef.current.value ,
        }),
      });

      console.log(response);
      if (response.ok) {
        sessionStorage.removeItem("error");
        await response.json().then((data)=>{
          localStorage.setItem("token",data.token);
          localStorage.setItem("id",data.id);
          history.push('/mesAnnonces');
        })
      } else {

        sessionStorage.setItem("error","Mot de passe ou email invalide");
        history.push('/Login');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }finally{
      setLoading(false);
    }
  };

  return (
    <>
    <IonPage>
      <IonContent>
        <IonCard>
          <img alt="logo" src={logo} id="login-logo"></img>
          <IonCardHeader className='header'>
            <IonCardTitle class="card-title">Connectez-vous</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <form onSubmit={handleSubmit}>
              <IonInput
                label='Email'
                labelPlacement='floating'
                fill='solid'
                placeholder='Email'
                value={username}
                onIonChange={(e) => setUsername(e.detail.value!)}
              ></IonInput>
              <IonInput
                label='Password'
                type='password'
                labelPlacement='floating'
                fill='solid'
                placeholder='Password'
                ref={passwordRef}
                // value={password}
                // onIonChange={(e) => setPassword(e.detail.value!)}
              ></IonInput>
              <IonButton type='submit' expand='block' fill='solid' color='primary'>
              {loading ? "En cours..." : "Se connecter"}
              </IonButton>
            </form>
            <p id="error">{sessionStorage.getItem("error") ? "Email ou password invalide" :"..."}</p>
          </IonCardContent>
          <IonButton href='/inscription' fill='clear'>
            Pas encore de compte?
          </IonButton>
        </IonCard>
      </IonContent>
    </IonPage>
    </>
  );
};
export default Login;
