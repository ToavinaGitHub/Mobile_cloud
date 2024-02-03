import React, { useState, useRef } from 'react';
import {
  IonCard,
  IonAlert,
  IonSelect,
  IonSelectOption,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonButtons,
  IonTitle,
  IonInput,
  IonItem,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonChip,
  IonAvatar,
  IonLabel,
  IonButton,
  IonRow,
  IonCol,
} from '@ionic/react';
import '../../assets/annonce/annonce.css';
import bm from '../../images/bm.jpg';
import { OverlayEventDetail } from '@ionic/core/components';

import config from '../../Config';
import { reload } from 'ionicons/icons';

const Annonce: React.FC = (props: any) => {
  console.log(props);

  const [currentImage,setCurrentImage] = useState(props.saryAnnonces[0].sary);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const [selectedEtat, setSelectedEtat] = useState<string | undefined>(undefined);
 
  console.log(selectedEtat);

  const openAlert = () => {
    setIsAlertOpen(true);
  };

  const closeAlert = () => {
    setIsAlertOpen(false);
  };

  const modalRef = useRef<HTMLIonModalElement>(null);
  const inputRef = useRef<HTMLIonInputElement>(null);

  async function confirm(idAnnonce: string) {

    const trimmedSelectedEtat = Number(selectedEtat?.trim());
  
    var url = config.baseUrl+'/Annonce/validation?idAnnonce='+idAnnonce;
    if(trimmedSelectedEtat===10){
      url = config.baseUrl+'/Annonce/toVendu?idAnnonce='+idAnnonce;
    }

    console.log(idAnnonce);

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
      }
    });


    modalRef.current?.dismiss(selectedEtat, 'confirm');
    window.location.reload();
  }

  function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
    if (ev.detail.role === 'confirm') {
      console.log('Selected Etat:', ev.detail.data);
    }
  }


  function handleImageClick(newImage:any)  {
    console.log("haha")
    setCurrentImage(newImage);
  };

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>
          <IonChip className="user-pub">
            <IonAvatar>
              <img alt="bmw" src={bm}></img>
            </IonAvatar>
            <IonLabel className="users">{props.utilisateur.prenomUtilisateur} {props.utilisateur.nomUtilisateur}</IonLabel>
          </IonChip>
        </IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <IonRow>
          <IonCol size="12" >
              <img
                src={`data:image/jpeg;base64, ${currentImage}`}
                className="small-image"
            /></IonCol>
        </IonRow>
        <IonRow className="ion-justify-content-center">
          {props.saryAnnonces.map((image: any, index: any) => (
            <IonCol size="2" key={index} className="ion-text-center">
              <img
                key={index}
                alt={`Other ${index}`}
                src={`data:image/jpeg;base64, ${image.sary}`}
                className="small-image"
                onClick={() => handleImageClick(image.sary)}
              />
            </IonCol>
          ))}
        </IonRow>
        <IonChip>{props.modele.marque.nomMarque}</IonChip>
        <IonChip>{props.modele.nomModele}</IonChip>
        <IonChip>{props.moteurModele.moteur.nomMoteur}</IonChip>
        <IonChip>{props.carburant.nomCarburant}</IonChip>
        <IonChip>{props.transmission.nomTransmission}</IonChip>
        <IonChip>{props.kilometrage}</IonChip>
        <IonChip>{props.anneeModele.annee}</IonChip>
        <IonChip>{props.nbPorte} portes</IonChip>
        <IonChip className="prixChip">{props.prixDemande} MGA</IonChip>
        <IonChip
          className="etatChip"
          style={{
            backgroundColor:
              props.etat === 5
                ? 'blue'
                : props.etat === 0
                ? 'red'
                : props.etat === 10
                ? 'green'
                : 'black',
          }}
        >
          {props.etat === 5
            ? 'Disponible'
            : props.etat === 0
            ? 'En demande'
            : props.etat === 10
            ? 'Vendu'
            : ''}
        </IonChip>

          

        {props.etat !== 0 && (
          <IonButton id={`modifEtatBtn`} onClick={openAlert}>
            Modifier etat
          </IonButton>
        )}
        <IonModal
          isOpen={isAlertOpen}
          onDidDismiss={closeAlert}
          ref={modalRef}
          trigger="modifEtat"
          onWillDismiss={(ev) => onWillDismiss(ev)}
        >
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonButton onClick={() => modalRef.current?.dismiss()}>Cancel</IonButton>
              </IonButtons>
              <IonTitle>Modifier Etat de l'annonce</IonTitle>
              <IonButtons slot="end">
                <IonButton strong={true} onClick={() => confirm(props.idAnnonce)}>
                  Confirm
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonItem>
              <IonSelect placeholder="Etat"
               value={selectedEtat}
               onIonChange={(e) => setSelectedEtat(e.detail.value)}>
                <IonSelectOption value="5">Disponible</IonSelectOption>
                <IonSelectOption value="10">Vendu</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonContent>
        </IonModal>
      </IonCardContent>
    </IonCard>
  );
};

export default Annonce;
