import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Enrutador } from "./components/routes/Enrutador";
import style from './App.module.css';

let router = createBrowserRouter(Enrutador); 

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular una carga de 1 segundo
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className={style.cargaContainer}>
      {isLoading ? (
        <p className={style.cargaText}>Cargando...</p>
      ) : (
        <RouterProvider router={router} />
      )}
    </div>
  );
}

export default App;