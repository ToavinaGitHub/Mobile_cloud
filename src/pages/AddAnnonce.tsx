import { IonContent,IonButton, IonRow,IonPage,IonCard,IonItem, IonInput, IonLabel, IonTextarea, IonSelect,IonSelectOption, IonCol} from "@ionic/react";
import Header from "../components/header/Header";

import "../assets/annonce/addAnnonce.css"

import config from "../Config";
import { useEffect, useState } from "react";

import { useHistory } from "react-router";
const AddAnnonce : React.FC = () =>{
    const[marques, setMarques] = useState([]);
    const [models, setModels] = useState([]);
    const [transmissions, setTransmissions] = useState([]);
    const [carburants, setCarburants] = useState([]);

    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [kilometrage, setKilometrage] = useState('');
    const [doorCount, setDoorCount] = useState('');
    const [selectedModel, setSelectedModel] = useState('');
    const [selectedMarque, setSelectedMarque] = useState('');
    const [selectedEngine, setSelectedEngine] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedTransmission, setSelectedTransmission] = useState('');
    const [selectedFuel, setSelectedFuel] = useState('');
    const [files, setFiles] = useState<FileList | null>(null);
    const [engineOptions, setEngineOptions] = useState([]);
    const [yearOptions, setYearOptions] = useState([]);
    const [modeleOptions, setModeleOptions] = useState([]);


    const history = useHistory();
    useEffect(() => {

        const fetchMarquesData = async () => {
            try {
              const response = await fetch(config.baseUrl + '/marques',  {
                  headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`,
                  },
              }  
              );
              const data = await response.json();
              setMarques(data);
            } catch (error) {
              console.error('Error fetching marques:', error);
            }
          };
       /* const fetchData = async () => {
          try {
            const response = await fetch(config.baseUrl + '/modeles',  {
                headers: {
                  'Authorization': `Bearer ${localStorage.getItem("token")}`,
                },
            }  
            );
            const data = await response.json();
            setModels(data);
          } catch (error) {
            console.error('Error fetching models:', error);
          }
        };*/
        const fetchDataTransmission = async () => {
            try {
              const response = await fetch(config.baseUrl + '/transmissions',  {
                  headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`,
                  },
              }  
              );
              const data = await response.json();
              setTransmissions(data);
            } catch (error) {
              console.error('Error fetching models:', error);
            }
          };
          const fetchCarburantData = async () => {
            try {
              const response = await fetch(config.baseUrl + '/carburants',  {
                  headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`,
                  },
              }  
              );
              const data = await response.json();
              setCarburants(data);
            } catch (error) {
              console.error('Error fetching models:', error);
            }
          };
    

        fetchMarquesData();
        fetchDataTransmission();
     //   fetchData();
        fetchCarburantData();
      }, []);


      const handleMarqueChange = async (event: CustomEvent) => {
        const selectedMarqueValue = event.detail.value;
        setSelectedMarque(selectedMarqueValue);
      
        try {
          const response = await fetch(
            config.baseUrl + `/modeles/${selectedMarqueValue}`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
      
          const data = await response.json();
          setModeleOptions(data);
        } catch (error) {
          console.error('Error fetching models:', error);
        }
      };
      
      


      const handleModelChange = async (event: CustomEvent) => {
        const selectedModelValue = event.detail.value;
        setSelectedModel(selectedModelValue);

        try {
          const response = await fetch(config.baseUrl + `/moteurModeles?idModele=${selectedModelValue}`,{
            headers: {
              'Authorization': `Bearer ${localStorage.getItem("token")}`,
            },
        }  );

          const data = await response.json();
          setEngineOptions(data);
        } catch (error) {
          console.error('Error fetching engines:', error);
        }

        try {
            const responseYears = await fetch(config.baseUrl + `/anneeModeles?idModele=${selectedModelValue}`,{
                headers: {
                  'Authorization': `Bearer ${localStorage.getItem("token")}`,
                },
            });
            const yearsData = await responseYears.json();
            setYearOptions(yearsData);
          } catch (error) {
            console.error('Error fetching years:', error);
          }

      };
    

      const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
          setFiles(event.target.files);
        }
      };

      const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const formDataObject = {
            kilometrage: kilometrage,
            nbPorte: parseInt(doorCount), // Assuming doorCount is a string, parse it to an integer
            description: description,
            prixDemande: parseFloat(price), // Assuming price is a string, parse it to a float
            prixVente: 0,
            etat: 0,
            dateAnnonce: "2024-01-27",
            commission: {
                idCommission: 1
            },
            utilisateur: {
                idUtilisateur: parseInt(localStorage.getItem('id')!)
            },
            transmission: {
                idTransmission: parseInt(selectedTransmission)
            },
            carburant: {
                idCarburant: parseInt(selectedFuel)
            },
            modele: {
                idModele: parseInt(selectedModel)
            },
            anneeModele: {
                idAnneeModele: parseInt(selectedYear)
            },
            moteurModele: {
                idMoteurModele: parseInt(selectedEngine)
            }
        };

        const formDataJson = JSON.stringify(formDataObject);
    
        const formData = new FormData();
        formData.append('a', new Blob([JSON.stringify(formDataObject)], { type: 'application/json' }));
        
        if (files && files.length > 0) {
            for (let i = 0; i < files.length; i++) {
                formData.append('file', files[i]);
            }
        }
        
        try {
            const response = await fetch(config.baseUrl + '/Annonce/save', {
            method: 'POST',
            headers: {
            
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
            },
            body: formData,
          });
    
          if (response.ok) {
            history.push('/mesAnnonces');
            window.location.reload();
          } else {
            console.error('Error uploading file');
          }
        } catch (error) {
          console.error('Error during file upload:', error);
        }
      };

    return(
        <>
        <IonPage>
            <Header />
            <IonContent className="custom-content">
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <IonItem className="custom-item">
                        <IonTextarea
                        className="desc"
                        label="Description"
                        labelPlacement="floating"
                        placeholder=""
                        value={description}
                        onIonChange={(e) => setDescription(e.detail.value!)}
                        ></IonTextarea>
                    </IonItem>
                    <IonItem className="custom-item">
                        <IonInput
                        className="prix"
                        label="Prix"
                        labelPlacement="floating"
                        placeholder="Prix"
                        value={price}
                        onIonChange={(e) => setPrice(e.detail.value!)}
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
                                value={kilometrage}
                                onIonChange={(e) => setKilometrage(e.detail.value!)}
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
                                value={doorCount}
                                onIonChange={(e) => setDoorCount(e.detail.value!)}
                                ></IonInput>

                            </IonItem>
                        </IonCol>
                        </IonRow>
                    <IonItem>
                    <IonSelect
                        label="Marque"
                        labelPlacement="floating"
                        fill="solid"
                        value={selectedMarque}
                        onIonChange={(e) => handleMarqueChange(e)}
                        >
                        {marques.map((marque: any) => (
                            <IonSelectOption key={marque.idMarque} value={marque.idMarque}>
                            {marque.nomMarque}
                            </IonSelectOption>
                        ))}
                        </IonSelect>
                    </IonItem>
                    <IonItem>
                        <IonSelect label="Modèle" labelPlacement="floating" fill="solid"  value={selectedModel}
                    onIonChange={handleModelChange}>
                             {modeleOptions.map((model:any) => (
                                <IonSelectOption key={model.idModele} value={model.idModele}>
                                    {model.nomModele}
                                </IonSelectOption>
                                 ))}
                        </IonSelect>
                    </IonItem>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonSelect label="Moteur" labelPlacement="floating" fill="solid" value={selectedEngine}
                    onIonChange={(e) => setSelectedEngine(e.detail.value)}
                 >
                                   {engineOptions.map((engine:any) => (
                                        <IonSelectOption key={engine.moteur.idMoteur} value={engine.moteur.idMoteur}>
                                            {engine.moteur.nomMoteur}
                                        </IonSelectOption>
                                    ))}
                                </IonSelect>
                            </IonItem>
                        </IonCol>
                        <IonCol>
                            <IonItem>
                                <IonSelect label="Annee" labelPlacement="floating" fill="solid"  value={selectedYear}
                    onIonChange={(e) => setSelectedYear(e.detail.value)}
               >
                                     {yearOptions.map((year:any) => (
                                        <IonSelectOption key={year.idAnneeModele} value={year.idAnneeModele}>
                                            {year.annee}
                                        </IonSelectOption>
                                        ))}
                                </IonSelect>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonSelect label="Transmission" labelPlacement="floating" fill="solid" value={selectedTransmission}
                    onIonChange={(e) => setSelectedTransmission(e.detail.value)}>
                                     {transmissions.map((transmission:any) => (
                                        <IonSelectOption key={transmission.idTransmission} value={transmission.idTransmission}>
                                            {transmission.nomTransmission}
                                        </IonSelectOption>
                                        ))}
                                </IonSelect>
                            </IonItem>
                        </IonCol>
                        <IonCol>
                            <IonItem>
                                <IonSelect label="Carburant" labelPlacement="floating" fill="solid"  value={selectedFuel}
                    onIonChange={(e) => setSelectedFuel(e.detail.value)}>
                                {carburants.map((carburant:any) => (
                                        <IonSelectOption key={carburant.idCarburant} value={carburant.idCarburant}>
                                            {carburant.nomCarburant}
                                        </IonSelectOption>
                                        ))}
                                </IonSelect>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonItem>
                        <input
                                type="file"
                                className="prix"
                                multiple
                                onChange={handleFileChange}
                                accept=".jpg, .jpeg, .png, .gif"
                                >
                            </input>
                        </IonItem>
                        <IonButton expand='block' fill='solid' type="submit" color='primary'>Creer annonce</IonButton>
                </form>
            </IonContent>
        </IonPage>
        </>
    )
}
export default AddAnnonce;