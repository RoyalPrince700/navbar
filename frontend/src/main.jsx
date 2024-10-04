import {BrowserRouter} from 'react-router-dom'

import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SearchContextProvider from './context/SearchContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <SearchContextProvider>
      <App />
  </SearchContextProvider>
  </BrowserRouter>,
)
