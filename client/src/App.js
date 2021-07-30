import { Switch ,Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/NavBar';
import HomeScreen from './Components/HomeScreen'
import ProductScreen from './Components/ProductScreen'
import CartScreen from './Components/CartScreen'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomeScreen}></Route>
        <Route exact path='/product/:id' component={ProductScreen}></Route>
        <Route exact path='/cart' component={CartScreen}></Route>
      </Switch>
    </div>
  );
}

export default App;
