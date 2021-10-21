import { Switch ,Route } from 'react-router-dom';
import './App.css';
import {useState} from 'react'

import Navbar from './Components/NavBar';
import HomeScreen from './Components/HomeScreen'
import ProductScreen from './Components/ProductScreen'
import CartScreen from './Components/CartScreen'
import Backdrop from './Components/Backdrop'
import SideDrawer from './Components/SideDrawer'

function App() {
  const [sideToggle, setSideToggle] = useState(false)
  
  return (
    <div className="App">
      <Navbar />
      <Backdrop show={sideToggle} />
      <SideDrawer show={sideToggle} />
      <Switch>
        <Route exact path='/' component={HomeScreen}></Route>
        <Route exact path='/product/:id' component={ProductScreen}></Route>
        <Route exact path='/cart' component={CartScreen}></Route>
      </Switch>
    </div>
  );
}

export default App;
