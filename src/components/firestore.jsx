import { db } from "@/services/firebase"; // Ajusta la ruta según tu configuración
import { collection, getDocs } from "firebase/firestore";

const testFirestoreConnection = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "test")); // Asegúrate de tener una colección llamada "test"
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} =>`, doc.data());
    });
  } catch (error) {
    console.error("Error conectando a Firestore:", error);
  }
};

testFirestoreConnection();
