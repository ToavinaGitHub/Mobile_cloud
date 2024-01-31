import {IonPage,IonAvatar,IonLabel,IonChip,IonAlert, IonContent, IonHeader, IonTitle, IonItem } from "@ionic/react";

import bm from "../../images/bm.jpg";
import { useHistory } from "react-router";
import '../../assets/header/header.css';
import logo from "../../images/B.png"

import { useState,useEffect} from "react";

import config from "../../Config";


import UserData from "../../interface/UserData";
const Header :React.FC = () => {
    const history = useHistory();
    const [token,setToken] = useState(localStorage.getItem("token"));
    const [id,setId] = useState(localStorage.getItem("id"));

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
        <IonHeader id="head">
            <img alt="Logo" src={logo} id="img-logo"></img>
            <IonChip id="profile-head">
                <IonAvatar>
                    <img alt="bmw" src={bm}></img>
                </IonAvatar>
                <IonLabel>{data.prenomUtilisateur} {data.nomUtilisateur}</IonLabel>
            </IonChip>
            <IonAlert trigger='profile-head' header='Se deconnecter' message="Voulez vous vraiment vous deconnecter?" 
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
            </IonHeader>
    )
}
export default Header;