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
} from '@ionic/react';
import '../../assets/annonce/annonce.css';
import bm from '../../images/bm.jpg';
import { OverlayEventDetail } from '@ionic/core/components';

const Annonce: React.FC = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const openAlert = () => {
    setIsAlertOpen(true);
  };

  const closeAlert = () => {
    setIsAlertOpen(false);
  };

  const modalRef = useRef<HTMLIonModalElement>(null);
  const inputRef = useRef<HTMLIonInputElement>(null);

  function confirm() {
    modalRef.current?.dismiss(inputRef.current?.value, 'confirm');
  }

  function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
    if (ev.detail.role === 'confirm') {
      console.log('Your name:', ev.detail.data);
    }
  }

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>
          <IonChip className="user-pub">
            <IonAvatar>
              <img alt="bmw" src={bm}></img>
            </IonAvatar>
            <IonLabel className="users">Toavina Razakarivony</IonLabel>
          </IonChip>
        </IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        Salama daholo!! Zany indray ny bolide efa nisy 200 000km ny compteur sady tsy misy olana
        <IonChip>Hyundai</IonChip>
        <IonChip>Tucson MX</IonChip>
        <IonChip>2.0 VGT</IonChip>
        <IonChip>Diesel</IonChip>
        <IonChip>Manuelle</IonChip>
        <IonChip>123000 km</IonChip>
        <IonChip>2004</IonChip>
        <IonChip>5 portes</IonChip>
        <IonChip className="prixChip">12000000 MGA</IonChip>
        <IonChip className="etatChip">Vendu</IonChip>
        <img alt="bmw" src={bm} className="sary-pub"></img>
        <IonButton id={`modifEtatBtn`} onClick={openAlert}>
          Modifier etat
        </IonButton>

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
                <IonButton strong={true} onClick={() => confirm()}>
                  Confirm
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonItem>
              <IonSelect placeholder="Etat">
                <IonSelectOption value="vendu">Disponible</IonSelectOption>
                <IonSelectOption value="dispo">Vendu</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonContent>
        </IonModal>
      </IonCardContent>
    </IonCard>
  );
};

export default Annonce;
