import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import ItemListContainer from './components/ItemListContainer'
import NavbarReact from './components/NavbarReact';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error';
import { CartProvider } from './context/CartContext';
import CartView from './components/CartView';
import Checkout from './components/Checkout';
import CheckoutUseForm from './components/CheckoutUseForm';
import Banner from './components/Banner';

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <NavbarReact/>
      <Banner/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='Bienvenidos a nuestra Pasteleria Y Reposteria Emicake'/>}/>
        <Route path='/products/:category' element={<ItemListContainer greeting='Bienvenidos a la categoria: '/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<CartView/>}/>
        <Route path='/checkout' element={<CheckoutUseForm/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
    </CartProvider>
    
  )
}

export default App
