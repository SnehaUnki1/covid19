import './App.css';
import CovidMain from './components/CovidMain';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import District from './components/District';


function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component= {CovidMain}/>
            <Route exact path="/district/:id" component= {District}/>

        </Switch>
    </BrowserRouter> 
  );
}

export default App;
