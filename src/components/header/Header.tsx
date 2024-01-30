import {IonPage,IonAvatar,IonLabel,IonChip,IonAlert, IonContent, IonHeader, IonTitle, IonItem } from "@ionic/react";

import bm from "../../images/bm.jpg";
import { useHistory } from "react-router";
import '../../assets/header/header.css';
import logo from "../../images/B.png"
const Header :React.FC = () => {
    const history = useHistory();
    return (
        <IonHeader id="head">
            <img alt="Logo" src={logo} id="img-logo"></img>
            <IonChip id="profile-head">
                <IonAvatar>
                    <img alt="bmw" src={bm}></img>
                </IonAvatar>
                <IonLabel>Toavina Razakarivony</IonLabel>
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
                        history.push('/login');
                    }
                    }
            ]}>
            </IonAlert>
            </IonHeader>
    )
}
export default Header;