import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BaseUrlProvider } from './context/BaseUrlContext.tsx';


const query = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <BaseUrlProvider>
      <QueryClientProvider client={query}>
        <App />
      </QueryClientProvider>
    </BaseUrlProvider>
)
