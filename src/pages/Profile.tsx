// src/pages/ProfilePage.tsx
import React from 'react';
import {
  IonContent,
  IonHeader,
  IonAlert,
  IonPage,
  IonRow,
  IonCol,
  IonTitle,
  IonToolbar,
  IonAvatar,
  IonLabel,
  IonItem,
  IonList,
  IonIcon,
  IonButton,
  IonButtons,
} from '@ionic/react';
import { useHistory } from "react-router";
import { person, settings, logOut } from 'ionicons/icons';
import '../assets/profile/profile.css';
import Header from '../components/header/Header';

const Profile: React.FC = () => {
    const history = useHistory();
  return (
    <IonPage id="profile-page">
      <IonHeader>
        <Header />
      </IonHeader>
      <IonContent>
        <IonItem className="profile-header">
          <IonAvatar slot="start">
            <img src="https://via.placeholder.com/150" alt="Profile" />
          </IonAvatar>
          <IonLabel>
            <h2>Toavina Razakarivony</h2>
            <p>toavina@gmail.com</p>
          </IonLabel>
        </IonItem>

        <IonList>
          <IonItem>
            <IonIcon slot="start" icon={person} />
            <IonLabel>
              <h2>Details du profile</h2>
            </IonLabel>
          </IonItem>

          <IonRow>
                <IonCol>
                    <IonItem>
                        <IonLabel>
                        <h3>Nom:</h3>
                        <p>Razakarivony</p>
                        </IonLabel>
                    </IonItem>
                </IonCol>
                <IonCol>
                    <IonItem>
                        <IonLabel>
                        <h3>Prenoms:</h3>
                        <p>Toavina</p>
                        </IonLabel>
                    </IonItem>
                </IonCol>
          </IonRow>
          <IonItem>
            <IonLabel>
              <h3>Date de Naissance:</h3>
              <p>Mars 4, 2004</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              <h3>Adresse:</h3>
              <p>Andoharanofotsy</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              <h3>Telephone:</h3>
              <p>034 34 344 34</p>
            </IonLabel>
          </IonItem>
        </IonList>
        <IonButton id="deco" expand='block' fill='solid' color='danger'>Se deconnecter</IonButton>
        <IonAlert trigger='deco' header='Se deconnecter' message="Voulez vous vraiment vous deconnecter?" 
                buttons={[
                    {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Confirm Cancel');
                    }
                    }
                    ,
                    {
                    text: 'Ok',
                    role: 'ok',
                    handler: () => {
                        console.log('Confirm Ok');
                        history.push('/login');
                    }
                    }
            ]}>
            </IonAlert>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
