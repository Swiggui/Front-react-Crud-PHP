import './Styles/StylesGeneral.css';
import './Styles/StylesGeneralPagesWithContent.css';
import './Styles/StyleLorem.css';
import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './Pages/Home';
import Lorem from './Pages/Lorem';
import Contactanos from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import Contenidos from './Pages/content/Contenidos';
import Musica from './Pages/content/Music';
import Series from './Pages/content/Series';
import ListUsers from './Pages/content/Users/ListUsers';
import EditUsers from './Pages/content/Users/EditUsers';
import CreateUsers from './Pages/content/Users/CreateUsers';



function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<Inicio/>}/>
          <Route path="/Lorem" exact element={<Lorem/>}/>
          <Route path="/ContactUs" exact element={<Contactanos/>}/>
          <Route path='/AboutUs' exact element={<AboutUs/>}/>
          <Route path='/Contents' exact element={<Contenidos/>}/>
          <Route path='/Music' exact element={<Musica/>}/>
          <Route path='/Series' exact element={<Series/>}/>
          <Route path='/Users' exact element={<ListUsers/>}/>
          <Route path='/Users/edit/:id' exact element={<EditUsers/>}/>
          <Route path='/Users/Create' exact element={<CreateUsers/>}/>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
