import './App.css';
import { useEffect, useState } from 'react';
import View from './Hotels';
import SearchBar from './filter';
import Courtine from './curtain';

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
        <div className="logo">
          <img src="./logo.png" alt="logo" />
        </div>
        <Courtine />
        <SearchBar />
      </nav>
      <h1>Stays in Finland</h1>
      <div className="content">
        {
          data.map((hotel,i) => (
            <View key={"room_"+i} props={hotel} />
          ))
        }
      </div>
    </main>
  );
}

export default App;
