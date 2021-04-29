import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NotesList from './components/NotesList'
import NotFond from './components/NotFond'
import Navbar from './components/Navbar'
import AddNote from './components/AddNote'
import './App.css';


function App() {
  return (
   <BrowserRouter>
<div>
    <Navbar/>
   <Switch>
  <Route exact path = "/" component= {NotesList}/>
  <Route path ="/addNote" component= {AddNote}/>
  <Route path ="*" component= {NotFond}/>
  </Switch>
</div>


   </BrowserRouter>
  );
}

export default App;
