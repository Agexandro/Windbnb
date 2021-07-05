import './App.css';
import { useEffect, useState } from 'react';
import View from './Hotels';

function App() {

  const url = "./stays.json";
  const [data, setdata] = useState([]);

  useEffect(() => {
    get();
  }, []);

  async function get() {
    const response = await fetch(url);
    const datos = await response.json();
    setdata(datos);
  }

  return (
    <main >
      <nav>
        <img src="./logo.png" alt="logo" />
        <div className="menu">
        </div>
      </nav>
      <h1>Stays in Finland</h1>
      <div className="content">
        {
          data.map(hotel => (
            <View props={hotel} />
          ))
        }
      </div>
    </main>
  );
}

export default App;
