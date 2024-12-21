
import React, { useState } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Swal from 'sweetalert2';

const ItemDetail = ({ producto }) => {
  const [compra, setCompra] = useState(false);
  const { addToCart } = useCart();

  const onAdd = (cantidad) => {
    setCompra(true);

    Swal.fire({
      position: "top-end",
      icon: "success", 
      title: `Agregaste ${producto.name} al carrito`, 
      showConfirmButton: false,
      timer: 1600,
    });

    addToCart(producto, cantidad);
  };

  return (
    <div>
      <h1>Detalle del producto: {producto.name}</h1>
      <img src={producto.img} alt={producto.img} />
      <p>{producto.description}</p>
      <p>${producto.price}</p>

      {compra ? (
        <div>
          <Link className='btn btn-dark' to='/'>
            Seguir comprando
          </Link>
          <Link className='btn btn-dark' to='/cart'>
            Ir al carrito
          </Link>
        </div>
      ) : (
        <ItemCount stock={producto.stock} onAdd={onAdd} />
      )}
    </div>
  );
};

export default ItemDetail;
