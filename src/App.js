import {Route, Switch} from "react-router-dom";
import LoginPage from "./LoginPage";
import DataPage from "./DataPage";
import InfoPage from "./InfoPage";
import BankPage from "./BankPage";
import OtherPage from "./OtherPage";
import RemainingPage from "./RemainingPage";
import EmployeeSummary from "./EmployeeSummary";
import ProvideAuth from "./ProvideAuth";
import PrivateRoute from "./PrivateRoute";

function App() {

  return (
      <ProvideAuth>
          <Route exact path = "/" component = { LoginPage } />
          <Switch>
            <PrivateRoute  path = "/summary">
                <EmployeeSummary />
            </PrivateRoute>
            <PrivateRoute path = "/personaldata">
              <DataPage />
            </PrivateRoute>
            <PrivateRoute path = "/info" >
              <InfoPage />
            </PrivateRoute>
            <PrivateRoute path = "/bank" >
              < BankPage />
            </PrivateRoute>
            <PrivateRoute path = "/otherdata" >
              <OtherPage />
            </PrivateRoute>
            <PrivateRoute path = "/remainingdata" >
              <RemainingPage />
            </PrivateRoute>
          </Switch>
      </ProvideAuth>
  );
}

export default App;
