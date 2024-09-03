//import logo from './logo.svg';
import './index.css';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Cart from './pages/cart';
import Navbar from './component/Navbar';
import {Provider} from 'react-redux'
import Store from './cart/store'
function App() {
  return (
    <div className='App'>
       <Provider store={Store}>
       <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Cart' element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
       </Provider>
    </div>
  );
}

export default App;
