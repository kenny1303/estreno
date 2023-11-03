import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ExampleComponent = () => {
  const notify = () => toast('¡Hola! Este es un mensaje de alerta.');

  return (
    <div>
      <button onClick={notify}>Mostrar alerta</button>
      <ToastContainer />
    </div>
  );
};

export default ExampleComponent;
