
export const productosDB = [
    
    {
      name: "Postre Artesanal",
      category: "ofertas",
      stock: 11,
      price: 150000,
      description:
        "Desde tartaletas hasta trufas, nuestros postres artesanales son una delicia para el paladar.",
      img: "/postre.jpg",
    },
    {

      name: "Anchetas de Regalo",
      category: "mas vendidos",
      stock: 5,
      price: 200000,
      description:
        "Anchetas para toda ocasión: flores, chocolates, licores y más.",
      img: "/anchetas.jpg",
    },
    {
    
      name: "Desayuno Sorpresa",
      category: "ofertas",
      stock: 4,
      price: 190000,
      description: "Desayuno sorpresa: un regalo perfecto para empezar el día.",
      img: "/desayuno.jpg",
    },
    {
    
      name: "Torta Personalizada",
      category: "nuevos",
      stock: 20,
      price: 50000,
      description:
        "Deliciosos cupcakes decorados para cualquier celebración, con sabores variados y glaseados irresistibles.",
      img: "/personalizada.png",
    },
    {
    
      name: "Cupcake Gourmet",
      category: "nuevos",
      stock: 30,
      price: 30000,
      description:
        "Cupcakes recién horneados con ingredientes naturales, perfectas para acompañar un café o té.",
      img: "/cupcake.png",
    },
    {
   
      name: "Ancheta Personalizada",
      category: "mas vendidos",
      stock: 7,
      price: 120000,
      description:
        "Puedes personalizar tu ancheta dándole un toque único y personal.",
      img: "/anchetas.png",
    },
    {
     
      name: "Desayuno Sorpresa Especial",
      category: "mas vendidos",
      stock: 8,
      price: 70000,
      description:
        "Sorprende a tu persona especial con un delicioso desayuno.",
      img: "/desayunosorpresas.jpg",
    },


  {
    name: "tortas de chocolate",
    category: "ofertas",
    stock: 8,
    price: 70000,
    description:
      "Deliciosa torta de chocolate.",
    img: "./torta de chocolate.jpg",
  },


  ];
  
  export const getProducts = () => {
    const error = false;
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (error) {
          reject(
            "Hubo un error al obtener los productos. Intente nuevamente más tarde."
          );
        } else {
          resolve(productos);
        }
      }, 3000);
    });
  };
  
  export const getOneProduct = (id) => {
    const error = false;
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (error) {
          reject("No se pudo obtener el producto. Intente nuevamente más tarde.");
        } else {
          const product = productos.find((item) => item.id === id);
          if (product) {
            resolve(product);
          } else {
            reject("Producto no encontrado.");
          }
        }
      }, 3000);
    });
  };
  