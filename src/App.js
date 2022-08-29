
import './assets/styles/App.module.scss';

import Site from './pages/Site';
import { BrowserRouter } from "react-router-dom";



function App() {
  return (
    <>
        <BrowserRouter>
        <Site />
      </BrowserRouter>
      
    </>
  );
}

export default App;
