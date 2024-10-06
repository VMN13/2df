
import './App.css';
import Example from './Header';
import Main from './Main';
import Otzuvy from './Otzuvy';
import Form from './Form';
import FormNum from './Formnum';
import Comment from './Comment';
import SortResults from './Comment';
import Valid from "./Valid.jsx";
import Button from "./Button.jsx";
import BtnScrollUp from './Button.jsx';
import Footer from './Footer';
function App() {
  return (
    <div className='App'>
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
  );
}

export default App;
