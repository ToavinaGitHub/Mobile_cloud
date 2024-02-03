import Header from "../components/header/Header";
import { IonButton, IonCard, IonContent, IonHeader, IonInput, IonPage, IonTitle,IonIcon, IonCardHeader, IonCardSubtitle, IonCardContent, IonCardTitle, IonList, IonItem, IonThumbnail, IonLabel, IonAlert, IonChip, IonAvatar, IonFab, IonFabButton, IonFabList, IonBadge, RefresherEventDetail, IonRefresher, IonRefresherContent, IonSearchbar, IonRouterOutlet } from "@ionic/react";

import { search,chatbubbleOutline,chatboxOutline,add,imageOutline} from "ionicons/icons";
import { Route, useHistory } from "react-router";

import { useEffect, useState } from "react";

import Annonce from "../components/Annonce/Annonce";

import config from "../Config";

const PageAnnonce : React.FC =()=>{

    const [data,setData] = useState([]);

    const history = useHistory();
    const fetchData = async () => {
        try {
            const reponse = await fetch(config.baseUrl + "/annoncesUser?idClient=" + localStorage.getItem("id"), {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`,
                },
            });
            const donnees = await reponse.json();
            setData(donnees);
            console.log(donnees);
        } catch (erreur) {
            console.error('Erreur lors de la récupération des données :', erreur);
        }
    };

    const pullRefresh = async (event: CustomEvent<RefresherEventDetail>) => {
        setTimeout(async () => {
            await fetchData();  // Refetch data
            event.detail.complete();
        }, 2000);
    };

    useEffect(() => {
        fetchData();
    }, []);
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
                {data.map((annonce:any, index) => (
                <Annonce
                  key={index}
                  {...annonce}
                />
              ))}
            </IonContent>
            </IonPage>
        </>
    )
}

export default PageAnnonce;