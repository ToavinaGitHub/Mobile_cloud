// components/login-form.tsx

import React, { useState } from 'react';
import { IonCard, IonCardHeader,IonCardTitle,IonCardContent, IonInput, IonButton, IonTitle, IonRouterLink, IonContent, IonPage } from '@ionic/react';
import '../theme/variables.css';
import '../assets/Auth/login.css'
import { useHistory } from "react-router";
import logo from "../images/B.png"
const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Nom d\'utilisateur:', username);
    console.log('Mot de passe:', password);
  
    history.push('/mesAnnonces');
  
  };

  return (
    <>
    <IonPage>
      <IonContent>
      <IonCard>
              <img alt="logo" src={logo} id="login-logo"></img>
              <IonCardHeader className='header'>
                  <IonCardTitle  class="card-title">Connectez-vous</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <form onSubmit={handleSubmit}>
                  <IonInput label='Email' labelPlacement='floating' fill='solid' placeholder='Email'></IonInput>
                  <IonInput label='Password'type='password' labelPlacement='floating' fill='solid' placeholder='Password'></IonInput>
                  <IonButton type='submit' expand='block' fill='solid' color='primary'>Se connecter</IonButton>
                </form>
              </IonCardContent>
              <IonButton  href='/inscription' fill='clear'>Pas encore de compte?</IonButton>
              
          </IonCard>
        </IonContent>
    </IonPage>
    </>
  );
};

export default Login;
