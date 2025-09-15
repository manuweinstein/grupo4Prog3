import './App.css';
import { Switch, Route} from 'react-router-dom'

import NotFound from './Screens/NotFound/NotFound';
import Home from './Screens/Home/Home';
import Movies from './Screens/Movies/Movies';
import Series from './Screens/Series/Series';
import Search from './Screens/Search/Search';
import Detalle from './Screens/Detalle/Detalle';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={Home} exact={true}/>
        <Route path='/movies/:tipo' component={Movies}/>
        <Route path='/series/:tipo' component={Series}/>
        <Route path='/search' component={Search}/>
        <Route path='/detalle/:tipo/:id' component={Detalle}/>
        <Route path='' component={NotFound} />
        
      </Switch>
    </div>
  );
}

export default App;
