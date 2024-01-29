// components/InscriptionForm.tsx

import React, { useState } from 'react';
import { IonCard,IonContent,IonPage,IonCardContent, IonInput, IonButton, IonTitle, IonRouterLink, IonSelect, IonSelectOption, IonToggle, IonCol, IonRow, IonCardHeader, IonCardTitle } from '@ionic/react';

import '../assets/Auth/inscription.css'

const Inscription: React.FC = () => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [dateNaissance, setDateNaissance] = useState('');
    const [sexe, setSexe] = useState('');
    const [telephone, setTelephone] = useState('');
    const [adresse, setAdresse] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Ajoutez votre logique d'inscription ici avec les valeurs des champs
        console.log('Nom:', nom);
        console.log('Prénom:', prenom);
        console.log('Date de naissance:', dateNaissance);
        console.log('Sexe:', sexe);
        console.log('Téléphone:', telephone);
        console.log('Adresse:', adresse);
        console.log('Email:', email);
        console.log('Password:', password);

    };

    return (
        <>
        <IonPage>
        <IonContent>
        <IonCard className='inscCard'>
            <IonCardHeader className='header'>
                <IonCardTitle class='card-title'>Inscrivez vous</IonCardTitle>
            </IonCardHeader>
            <IonCardContent >
                <form onSubmit={handleSubmit}>
                    <IonInput
                        type="text"
                        placeholder="Nom"
                        value={nom}
                        onIonChange={(e) => setNom(e.detail.value!)}
                        required
                    />
                    <IonInput
                        type="text"
                        placeholder="Prénom"
                        value={prenom}
                        onIonChange={(e) => setPrenom(e.detail.value!)}
                        required
                    />
                    <IonInput
                        type="date"
                        placeholder="Date de naissance"
                        value={dateNaissance}
                        onIonChange={(e) => setDateNaissance(e.detail.value!)}
                        required
                    />
                    <IonSelect
                        placeholder="Genre"
                        value={sexe}
                        onIonChange={(e) => setSexe(e.detail.value)}

                    >
                        <IonSelectOption value="homme">Homme</IonSelectOption>
                        <IonSelectOption value="femme">Femme</IonSelectOption>
                    </IonSelect>
                    <IonInput
                        type="tel"
                        placeholder="Téléphone"
                        value={telephone}
                        onIonChange={(e) => setTelephone(e.detail.value!)}
                        required
                    />
                    <IonInput
                        type="text"
                        placeholder="Adresse"
                        value={adresse}
                        onIonChange={(e) => setAdresse(e.detail.value!)}
                        required
                    />
                    <IonInput
                        type="email"
                        placeholder="Email"
                        value={email}
                        onIonChange={(e) => setEmail(e.detail.value!)}
                        required
                    />
                    <IonRow>
                        <IonCol size="10">
                            <IonInput
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Mot de passe"
                                value={password}
                                onIonChange={(e) => setPassword(e.detail.value!)}
                                required
                            />
                        </IonCol>
                        <IonCol size="2">
                            <IonToggle
                                checked={showPassword}
                                onIonChange={(e) => setShowPassword(e.detail.checked)}
                                color="primary"
                            />
                        </IonCol>
                    </IonRow>
                    <IonButton  type='submit' expand='block' fill='solid' color='primary'>S'inscrire</IonButton>
                </form>
                <div className="ion-text-center" style={{ marginTop: '1rem' }}>
                    <IonRouterLink routerLink="/login">Déjà un compte? Connectez-vous</IonRouterLink>
                </div>
            </IonCardContent>
        </IonCard>
        </IonContent>
        </IonPage>
        </>
    );
};

export default Inscription;
