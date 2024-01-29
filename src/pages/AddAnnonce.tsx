import { IonContent,IonButton, IonRow,IonPage,IonCard,IonItem, IonInput, IonLabel, IonTextarea, IonSelect,IonSelectOption, IonCol} from "@ionic/react";
import Header from "../components/header/Header";

import "../assets/annonce/addAnnonce.css"

const AddAnnonce : React.FC = () =>{
    return(
        <>
        <IonPage>
            <Header />
            <IonContent className="custom-content">
            <IonItem className="custom-item">
                <IonTextarea
                className="desc"
                label="Description"
                labelPlacement="floating"
                placeholder=""
                ></IonTextarea>
            </IonItem>
            <IonItem className="custom-item">
                <IonInput
                className="prix"
                label="Prix"
                labelPlacement="floating"
                placeholder="Prix"
                ></IonInput>
            </IonItem>
            <IonRow>
                <IonCol>
                    <IonItem className="custom-item">
                        
                        <IonInput
                        className="prix"
                        label="Kilometrage"
                        labelPlacement="floating"
                        placeholder="Kilometrage"
                        ></IonInput>
                    </IonItem>
                </IonCol>
                <IonCol>
                    <IonItem className="custom-item">
                        <IonInput
                        type="number"
                        className="prix"
                        label="Nombre Porte"
                        labelPlacement="floating"
                        placeholder="Nombre porte"
                        ></IonInput>
                    </IonItem>
                </IonCol>
                </IonRow>
            <IonItem>
                <IonSelect label="Modèle" labelPlacement="floating" fill="solid">
                    <IonSelectOption>Tucson MX</IonSelectOption>
                    <IonSelectOption>Volkswagen Bora</IonSelectOption>
                    <IonSelectOption>Toyota vigo</IonSelectOption>
                </IonSelect>
            </IonItem>
            <IonRow>
                <IonCol>
                    <IonItem>
                        <IonSelect label="Moteur" labelPlacement="floating" fill="solid">
                            <IonSelectOption>1.6 CRDI</IonSelectOption>
                            <IonSelectOption>2.0 VGT</IonSelectOption>
                            <IonSelectOption>1.6 GTI</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                </IonCol>
                <IonCol>
                    <IonItem>
                        <IonSelect label="Annee" labelPlacement="floating" fill="solid">
                            <IonSelectOption>2006</IonSelectOption>
                            <IonSelectOption>2010</IonSelectOption>
                            <IonSelectOption>2018</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <IonItem>
                        <IonSelect label="Transmission" labelPlacement="floating" fill="solid">
                            <IonSelectOption>Manuelle</IonSelectOption>
                            <IonSelectOption>Automatique</IonSelectOption>
                            <IonSelectOption>Semi-auto</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                </IonCol>
                <IonCol>
                    <IonItem>
                        <IonSelect label="Carburant" labelPlacement="floating" fill="solid">
                            <IonSelectOption>Diesel</IonSelectOption>
                            <IonSelectOption>Essence</IonSelectOption>
                            <IonSelectOption>Electrique</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                </IonCol>
            </IonRow>
            <IonItem>
                <IonInput
                        type="file"
                        className="prix"
                        multiple
                        >
                    </IonInput>
                </IonItem>
                <IonButton expand='block' fill='solid' color='primary'>Creer annonce</IonButton>
            </IonContent>
        </IonPage>
        </>
    )
}
export default AddAnnonce;