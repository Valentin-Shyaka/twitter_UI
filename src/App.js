
import './App.css';
// import Sidebar from "./Sidebar"
// import Feed from './Feed';
// import Widgets from './Widgets';
import Home from './Home';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Landing from './Landing';
import SignUp from './SignUp';


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>} />
      <Route path='/signup' element={<SignUp/>}/>


    
    
    
     </Routes>
    </BrowserRouter>
  );
}

export default App;
