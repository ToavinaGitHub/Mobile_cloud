import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {  addCircleOutline,homeOutline,personCircleOutline } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import PageAnnonce from './pages/PageAnnonce';
import AddAnnonce from './pages/AddAnnonce';

import Login from './pages/Login';
import Inscription from './pages/Inscription';
import Profile from './pages/Profile';
setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/addAnnonce">
            <AddAnnonce />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/mesAnnonces">
              <PageAnnonce />
          </Route>
        
          <Route exact path="/profile">
              <Profile />
          </Route>
          

        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/addAnnonce">
            <IonIcon aria-hidden="true" icon={addCircleOutline} />
            <IonLabel>Add annonce</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/mesAnnonces">
            <IonIcon aria-hidden="true" icon={homeOutline} />
            <IonLabel>Mes Annonces</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/profile">
            <IonIcon aria-hidden="true" icon={personCircleOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>

      </IonTabs>
      <Route exact path="/login">
            <Login />
      </Route>
      <Route exact path="/inscription">
            <Inscription />
        </Route>
        <Route exact path="/">
            <Redirect to="/login" />
          </Route>
    </IonReactRouter>
  </IonApp>
);

export default App;
