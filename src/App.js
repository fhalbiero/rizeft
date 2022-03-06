import Dashboard from './pages/Dashboard';
import { NomineeContextProvider } from './context/NomineesContext';

import GlobalStyle from './styles/global';

const App = () => (
    <NomineeContextProvider>
      <div className="App">
        <Dashboard />
        <GlobalStyle />
      </div>
    </NomineeContextProvider>
);

export default App;
