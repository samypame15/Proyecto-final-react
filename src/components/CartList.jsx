import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CartList = () => {
  const { cart, cartTotal, clear } = useCart();

  const clearCart = () => {
    Swal.fire({
      title: "¿Estás seguro de borrar los productos del carrito?",
      icon: "warning", 
      showDenyButton: true,
      confirmButtonText: "Sí, borrar",
      denyButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        clear();
        Swal.fire("Carrito vaciado", "Los productos fueron eliminados correctamente.", "success");
      } else if (result.isDenied) {
        Swal.fire("Acción cancelada", "Los productos no fueron eliminados.", "info");
      }
    });
  };

  if (cart.length === 0) {
    return (
      <div>
        <h2>Tu carrito está vacío</h2>
        <Link className="btn btn-primary" to="/">
          Ir a comprar
        </Link>
      </div>
    );
  }

  return (
    <div>
      {cart.map((prod) => (
        <CartItem key={prod.id} prod={prod} />
      ))}
      <span>Total a pagar: ${cartTotal()}</span>
      <div className="cart-actions">
        <button className="btn btn-danger" onClick={clearCart}>
          Borrar Carrito
        </button>
        <Link className="btn btn-success" to="/checkout">
          Terminar Compra
        </Link>
      </div>
    </div>
  );
};

export default CartList;
