import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Page from "./pages/Page";
import { Providers, ProviderState } from "@microsoft/mgt-element";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
/* import '@ionic/react/css/palettes/dark.system.css'; */

/* Theme variables */
import "./theme/variables.css";
import { useEffect, useState } from "react";
import Templates from "./pages/Templates";
import ProjectList from "./pages/ProjectList";
import { BackButton } from "./components/BackButton/BackButton";

setupIonicReact();

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const updateLoginStatus = () => {
      if (Providers.globalProvider) {
        setIsLoggedIn(
          Providers.globalProvider.state === ProviderState.SignedIn
        );
      }
    };
    updateLoginStatus();
    Providers.onProviderUpdated(updateLoginStatus);
    return () => {
      Providers.removeProviderUpdatedListener(updateLoginStatus);
    };
  }, []);
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
           
            <Route path="/" exact={true}>
              <Redirect to="/project" />
            </Route>
            <Route path="/project" exact={true}>

            <BackButton />
              <Page />
            </Route>
            <Route path="/project/:id">
              <Page />
            </Route>
            <Route path="/templates" component={Templates} />
            <Route path="/projectList" component={ProjectList} />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
