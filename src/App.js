import './css/App.css';
import React, {useState} from "react";
import Example from './Header';
import Main from './Main';
import Otzuvy from './Otzuvy';
import Form from './Form';
import FormNum from './Formnum';
import SortResults from './Comment';
import Valid from "./Valid.jsx";
import BtnScrollUp from './Button.jsx';
import Footer from './Footer';
import { MdOutlineNightsStay } from "react-icons/md";

function App() {
  const [theme, setTheme] = useState('light');
  const toogleTheme = () => {
  setTheme(theme === 'light' ? 'dark' : 'light');
    };
  
return (
  <div className='App'>
  <div className={`app ${theme}`}>
    <MdOutlineNightsStay 
      className="
        text-yellow-500
        my-[23px] 
        ml-[180px] 
        absolute"
          onClick={toogleTheme} />
      <Example />
      <Main />
      <Otzuvy />
      <Form seconds={1195} />
      <FormNum />
      <SortResults />
      <Valid />
      <Footer />
      <BtnScrollUp />
</div>
</div>
);
};

export default App;
