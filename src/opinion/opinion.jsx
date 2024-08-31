import React, { useEffect, useState } from 'react';
import './css/opinion.css';
import future from '../assets/future.jpg'
import unvoice from '../assets/unvoice.jpg'
import independent from '../assets/independent.jpg'
import future2 from '../assets/future2.jpg'
import nazi from '../assets/nazi.jpg'

const App = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);  // Activa las animaciones al cargar la página
  }, []);

  return (
    <div className={`container ${loaded ? 'loaded' : ''}`}>
      <h1>El Cine: Una Ventana a la Imaginación</h1>
      <p>
        El cine, una amalgama de arte, entretenimiento y narrativa, ha sido un pilar cultural durante décadas...
      </p>
      <div className="image-gallery">
        <div className="image-item">
          <img src={unvoice} alt="Historia del cine" />
          <p>Desde los hermanos Lumière en las épicas de Hollywood.</p>
        </div>
        <div className="image-item">
          <img src={independent} alt="Empatía en el cine" />
          <p>El cine fomenta la empatía al presentar perspectivas diversas.</p>
        </div>
        <div className="image-item">
          <img src={nazi} alt="Cine y cambio social" />
          <p>Las películas han contribuido al cambio social y político.</p>
        </div>
        <div className="image-item">
          <img src={future} alt="Futuro del cine" />
          <p>El futuro del cine en la era digital y los desafíos actuales.</p>
        </div>
        <div className="image-item">
          <img src={future2} alt="Cine y la condición humana" />
          <p>El cine explora la condición humana en todas sus facetas.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
