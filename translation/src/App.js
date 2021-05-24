
import './App.css';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
  
import React from 'react';


function App() {

  const { t } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }
  return (
    <div className="App">
      <nav style={{ width: '100%', padding: '2rem 0', backgroundColor:'gray' }}>
          <button onClick={()=>handleClick('en')} >
            English
          </button>
          <button onClick={()=>handleClick('pt')} >
            Portuguese
          </button>
          <button onClick={()=>handleClick('es')} >
            Spanish
         </button>
        </nav>
        <header className="App-header">
          
          <p>
            <h3>{t('Thanks.1')}</h3>  <h3>{t('Why.1')}</h3> 
          </p>
        </header>
    </div>
  );
}

export default App;
