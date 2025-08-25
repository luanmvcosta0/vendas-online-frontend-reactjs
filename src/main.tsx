import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { DataProvider } from './shared/hooks/useDataContex';
import { GlobalProvider } from './shared/hooks/useGlobalContex';

createRoot(document.getElementById('root')!).render(
    <GlobalProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </GlobalProvider>
)