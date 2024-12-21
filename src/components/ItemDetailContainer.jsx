import React, { useEffect, useState } from 'react'
import ItemDetail from "./ItemDetail"
import { Link, useParams } from 'react-router-dom'
import Loader from './Loader'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../services/firebase'

const ItemDetailContainer = () => {
    const [producto, setProducto]=useState({})
    const [loading, setLoading]= useState(false)
    const [invalidItem, setInvalidItem]= useState(false)
    const { id } = useParams()

    useEffect(()=>{
      setLoading(true)
      const collectionProd = collection(db, "productos")
      const docRef = doc(collectionProd,id )
      getDoc(docRef)
      .then((res)=> {
        if(res.data()){
          setProducto({id: res.id, ...res.data()})
        }else{
          setInvalidItem(true)
        }
      })
      .catch((error)=> console.log(error))
      .finally(()=> setLoading(false))
    },[])

    if(invalidItem){
      return <div>
        <h3>El producto no existe!</h3>
        <Link to='/' className='btn btn-dark'> Volver a home</Link>
      </div>
    }

  return (
    <div>
     
      {loading 
       ? <Loader/> 
       : <ItemDetail producto={producto}/> }
    </div>
  )
}

export default ItemDetailContainer

