import './App.css';
import { Switch, Route} from 'react-router-dom'

import NotFound from './Screens/NotFound/NotFound';
import Home from './Screens/Home/Home';
import Movies from './Screens/Movies/Movies';
import Series from './Screens/Series/Series';
import Search from './Screens/Search/Search'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={Home} exact={true} />

        <Route path='/movies/:tipo' component={Movies} exact={true} />
        <Route path='/series/:tipo' component={Series} exact={true} />
        <Route path='/search' component={Search} exact ={true}/>
        <Route path='' component={NotFound} exact={true} />
        
      </Switch>
    </div>
  );
}

export default App;
