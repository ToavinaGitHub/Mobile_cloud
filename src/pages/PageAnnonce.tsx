import Header from "../components/header/Header";
import { IonButton, IonCard, IonContent, IonHeader, IonInput, IonPage, IonTitle,IonIcon, IonCardHeader, IonCardSubtitle, IonCardContent, IonCardTitle, IonList, IonItem, IonThumbnail, IonLabel, IonAlert, IonChip, IonAvatar, IonFab, IonFabButton, IonFabList, IonBadge, RefresherEventDetail, IonRefresher, IonRefresherContent, IonSearchbar, IonRouterOutlet } from "@ionic/react";

import { search,chatbubbleOutline,chatboxOutline,add,imageOutline} from "ionicons/icons";
import { Route, useHistory } from "react-router";

import Annonce from "../components/Annonce/Annonce";

const PageAnnonce : React.FC =()=>{
    const history = useHistory();
    function pullRefresh(event: CustomEvent<RefresherEventDetail>){
        setTimeout(() => {
            event.detail.complete();
        },2000);
    }   
    return(
        <>
            <IonPage>
                <Header />
                <IonContent>
                <IonSearchbar className="search" placeholder="Rechercher"></IonSearchbar>
                <IonRefresher slot="fixed" onIonRefresh={pullRefresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>
                <IonFab slot="fixed" vertical="center"  horizontal="end">
                    <IonFabButton>
                        <IonIcon icon={add}></IonIcon>
                    </IonFabButton>
                    <IonFabList>
                        <IonFabButton>
                            <IonIcon icon={imageOutline}>   
                            </IonIcon> 
                        </IonFabButton>
                    </IonFabList>
                </IonFab>
                <Annonce />
                <Annonce />
                <Annonce />
                <Annonce />
                <Annonce />
            </IonContent>
            </IonPage>
        </>
    )
}

export default PageAnnonce;