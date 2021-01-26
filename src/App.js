import {Route} from "react-router-dom";
import LoginPage from "./LoginPage";
import DataPage from "./DataPage";
import InfoPage from "./InfoPage";
import BankPage from "./BankPage";
import OtherPage from "./OtherPage";
import RemainingPage from "./RemainingPage";
import EmployeeSummary from "./EmployeeSummary";

function App() {
  return (
    <div>
        <Route exact path = "/" component = { LoginPage} />
        <Route exact path = "/summary" render = { (routeProps) => <EmployeeSummary {...routeProps} /> } />
        <Route exact path = "/personaldata" component = { DataPage } />
        <Route exact path = "/info" component = { InfoPage } />
        <Route exact path = "/bank" component = { BankPage } />
        <Route exact path = "/otherdata" component = { OtherPage } />
        <Route exact path = "/remainingdata" component = { RemainingPage } />
    </div>
  );
}

export default App;
