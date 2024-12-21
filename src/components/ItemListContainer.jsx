import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import { collection, getDocs, query, where, addDoc } from 'firebase/firestore';
import { productosDB } from '../mock/data';
import { db } from '../services/firebase';


const ItemListContainer = ({ greeting, texto }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { category } = useParams();


  useEffect(() => {
    setLoading(true);

    const productsCollection = category
      ? query(collection(db, 'productos'), where('category', '==', category))
      : collection(db, 'productos');

    getDocs(productsCollection)
      .then((res) => {
        const list = res.docs.map((product) => ({
          id: product.id,
          ...product.data(),
        }));
        setProducts(list);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [category]);

 
  const addData = () => {
    const productsCollection = collection(db, 'productos');
    productosDB.forEach((item) => {
      addDoc(productsCollection, item)
        .then(() => console.log(`Agregado ${item.name} a Firebase`))
        .catch((error) => console.log('Error al agregar item:', error));
    });
  };

  return (
    <div>
      {/* <button onClick={addData}>Agregar a Firebase</button> */}
      {loading ? <Loader /> : <ItemList products={products} />}
      <h1 className="text-center">
        {greeting}
        <span style={{ textTransform: 'capitalize', color: 'violet' }}>
          {category}
        </span>
      </h1>
    </div>
  );
};

export default ItemListContainer;
