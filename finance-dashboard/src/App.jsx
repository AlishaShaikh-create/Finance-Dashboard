import SummaryCards from "./components/SummaryCards";
import Transactions from "./components/Transactions";
import Charts from "./components/Charts";
import Insights from "./components/Insights";
import RoleSwitcher from "./components/RoleSwitcher";
import { AppProvider } from "./context/AppContext";
import "./App.css";

function App() {
  return (
    <AppProvider>
      <div className="container">
        <header>
          <h1>Finance Dashboard</h1>
          <RoleSwitcher />
        </header>

        <SummaryCards />
        <Charts />
        <Transactions />
        <Insights />
      </div>
    </AppProvider>
  );
}

export default App;