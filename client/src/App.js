import { Switch ,Route } from 'react-router-dom';
import './App.css';
import {useState} from 'react'

import Navbar from './Components/NavBar';
import HomeScreen from './Components/HomeScreen'
import ProductScreen from './Components/ProductScreen'
import CartScreen from './Components/CartScreen'
import Backdrop from './Components/Backdrop'
import SideDrawer from './Components/SideDrawer'
import Checkout from './Components/Checkout'

function App() {
  const [sideToggle, setSideToggle] = useState(false)
  
  return (
    <div className="App">
      <Navbar click={() => setSideToggle(true)}/>
      <Backdrop show={sideToggle} click ={() => setSideToggle(false)}/>
      <SideDrawer show={sideToggle} click ={() => setSideToggle(false)}/>
      <Switch>
        <Route exact path='/' component={HomeScreen}></Route>
        <Route exact path='/product/:id' component={ProductScreen}></Route>
        <Route exact path='/cart' component={CartScreen}></Route>
        <Route exact path='/checkout' component ={Checkout}></Route>
      </Switch>
    </div>
  );
}

export default App;
