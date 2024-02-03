// src/pages/ProfilePage.tsx
import React, { useState } from 'react';
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

import config from '../Config';
import { useEffect } from 'react';

import UserData from '../interface/UserData';
const Profile: React.FC = () => {
    const history = useHistory();

    const [token,setToken] = useState(sessionStorage.getItem("token"));
    const [id,setId] = useState(sessionStorage.getItem("id"));

    const [data, setData] = useState<UserData>({}); 
    useEffect(() => {
        // Call your API here and set loading accordingly
        const fetchData = async () => {
          try {
            const response = await fetch(config.baseUrl+'/api/v1/demo/utilisateur?id='+id,
             {
                headers: {
                  'Authorization': `Bearer ${token}`,
                },
              }
            );
          
            response.json().then((dat)=>{
                setData(dat);

            })
            console.log(response)
          } catch (error) {
            console.error('Error fetching profile data:', error);
          } 
        };
    
        fetchData();
    }, [id]);
    



    
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
            <h2>{data?.nomUtilisateur}</h2>
            <p>{data?.email}</p>
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
                        <p>{data?.nomUtilisateur}</p>
                        </IonLabel>
                    </IonItem>
                </IonCol>
                <IonCol>
                    <IonItem>
                        <IonLabel>
                        <h3>Prenoms:</h3>
                        <p>{data?.prenomUtilisateur}</p>
                        </IonLabel>
                    </IonItem>
                </IonCol>
          </IonRow>
          <IonItem>
            <IonLabel>
              <h3>Date de Naissance:</h3>
              <p>{data?.dateNaissance}</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              <h3>Adresse:</h3>
              <p>{data?.adresse}</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              <h3>Telephone:</h3>
              <p>{data?.tel}</p>
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
                        sessionStorage.removeItem("error");
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
