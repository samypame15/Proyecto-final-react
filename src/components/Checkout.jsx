import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, doc, getDoc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { db } from '../services/firebase'
import { Link } from 'react-router-dom'

const Checkout = () => {
    const [user, setUser] = useState({})
    const [validate, setValidate] = useState('')
    const [orderId, setOrderId] = useState('')
    const {cart, cartTotal, clear}= useContext(CartContext)
    const userData = (e)=>{
        setUser(
            {
                ...user,
                [e.target.name]:e.target.value 
            }
        )
    }
  const finalizarCompra = (e)=>{
    e.preventDefault()
    if(!user.name || !user.lastname || !user.email || !user.address){
        alert('Los campos son obligatorios')
    }else if(user.email !== validate){
        alert('Los mails deben ser iguales')
    }else{
       
        let order = {
            buyer: user,
            carrito:cart,
            total:cartTotal(),
            date: serverTimestamp()
        }
        const ventas = collection(db, "orders")
      
        addDoc(ventas,order)
        .then((res)=>{
        
            setOrderId(res.id)
            clear()
        })
        .catch((error)=> console.log(error))
    }
  }

  return (
    <div>
        {orderId !== '' ? <div>
                <h4>Orden generada!</h4>
                <h5>El id es: {orderId}</h5>
                <Link to='/' className='btn btn-success'>Volver al inicio</Link>
        </div>
        :
        <div>
        <h4>Completa con tus datos</h4>
        <form className='d-flex flex-column align-items-center' onSubmit={finalizarCompra}>
            <input type="text" name='name' placeholder='Ingrese su nombre' onChange={userData}/>
            <input type="text" name='lastname' placeholder='Ingrese su apellido' onChange={userData}/>
            <input type="text" name='address' placeholder='Ingrese su dirección' onChange={userData}/>
            <input type="email" name='email' placeholder='Ingrese su correo' onChange={userData}/>
            <input type="email" name='second-email' placeholder='Repita su correo' onChange={(e)=> setValidate(e.target.value)} />
            <button className='btn btn-success' type='submit'>Enviar</button>
        </form>
    </div>}
    </div>
  )
}

export default Checkout

